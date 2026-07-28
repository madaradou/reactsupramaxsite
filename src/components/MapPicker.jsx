import { useState, useCallback, useRef, useEffect } from 'react'
import { MapContainer, TileLayer, Marker, useMap, useMapEvents } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import './MapPicker.css'

const TUNISIA_CENTER = [36.8065, 10.1815]
const NOMINATIM = 'https://nominatim.openstreetmap.org'

const markerIcon = new L.DivIcon({
  className: 'mp-marker',
  html: `<div class="mp-pin"><div class="mp-pin-head"></div><div class="mp-pin-shadow"></div></div>`,
  iconSize: [30, 42],
  iconAnchor: [15, 42],
})

function RecenterMap({ center, zoom }) {
  const map = useMap()
  const prev = useRef(center)
  if (center && (center[0] !== prev.current?.[0] || center[1] !== prev.current?.[1])) {
    map.setView(center, zoom || 15)
    prev.current = center
  }
  return null
}

function ClickHandler({ onPosition }) {
  useMapEvents({ click: (e) => onPosition(e.latlng.lat, e.latlng.lng) })
  return null
}

export default function MapPicker({ initial, onSelect }) {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [searching, setSearching] = useState(false)
  const [showResults, setShowResults] = useState(false)

  const [address, setAddress] = useState(initial?.address || '')
  const [position, setPosition] = useState(
    initial?.latitude && initial?.longitude
      ? [initial.latitude, initial.longitude]
      : TUNISIA_CENTER
  )
  const [geocoding, setGeocoding] = useState(false)

  const reverseGeocode = useCallback(async (lat, lng) => {
    setGeocoding(true)
    try {
      const res = await fetch(
        `${NOMINATIM}/reverse?format=jsonv2&lat=${lat}&lon=${lng}&addressdetails=1&accept-language=fr`,
        { headers: { 'User-Agent': 'SupraMaxEnergy/1.0' } }
      )
      const data = await res.json()
      const parts = [
        data.address?.house_number && `${data.address.road || ''} ${data.address.house_number}`.trim(),
        data.address?.road,
        data.address?.suburb || data.address?.neighbourhood,
        data.address?.city || data.address?.town || data.address?.village || data.address?.municipality,
        data.address?.state,
        data.address?.country,
      ].filter(Boolean)
      const result = parts.length >= 2 ? parts.join(', ') : data.display_name || `${lat.toFixed(5)}, ${lng.toFixed(5)}`
      setAddress(result)
      return result
    } catch {
      const fallback = `${lat.toFixed(5)}, ${lng.toFixed(5)}`
      setAddress(fallback)
      return fallback
    } finally {
      setGeocoding(false)
    }
  }, [])

  const handlePosition = useCallback((lat, lng) => {
    setPosition([lat, lng])
    reverseGeocode(lat, lng)
  }, [reverseGeocode])

  const handleSearch = async (e) => {
    e.preventDefault()
    if (!searchQuery.trim()) return
    setSearching(true)
    setShowResults(true)
    try {
      const res = await fetch(
        `${NOMINATIM}/search?format=jsonv2&q=${encodeURIComponent(searchQuery)}&countrycodes=tn&limit=6&addressdetails=1&accept-language=fr`,
        { headers: { 'User-Agent': 'SupraMaxEnergy/1.0' } }
      )
      const data = await res.json()
      setSearchResults(data)
    } catch {
      setSearchResults([])
    } finally {
      setSearching(false)
    }
  }

  const selectSearchResult = (item) => {
    const lat = parseFloat(item.lat)
    const lon = parseFloat(item.lon)
    setPosition([lat, lon])
    reverseGeocode(lat, lon)
    setSearchResults([])
    setShowResults(false)
    setSearchQuery('')
  }

  const [locating, setLocating] = useState(false)
  const [geoError, setGeoError] = useState('')
  const geoRan = useRef(false)

  useEffect(() => {
    if (geoRan.current) return
    if (initial?.latitude && initial?.longitude) return
    if (!navigator.geolocation) return
    geoRan.current = true
    setLocating(true)
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords
        setPosition([latitude, longitude])
        reverseGeocode(latitude, longitude)
        setLocating(false)
      },
      (err) => {
        setLocating(false)
        if (err.code === 1) {
          setGeoError('Localisation refusée. Veuillez saisir votre adresse manuellement.')
        }
      },
      { enableHighAccuracy: true, timeout: 10000 }
    )
  }, [initial, reverseGeocode])

  const handleConfirm = () => {
    onSelect?.({ address, latitude: position[0], longitude: position[1] })
  }

  return (
    <div className="mp">
      {/* ── Search Bar ──────────────────────── */}
      <form className="mp__search" onSubmit={handleSearch}>
        <span className="material-symbols-outlined mp__search-icon">search</span>
        <input
          type="text"
          className="mp__search-input"
          placeholder="Rechercher une adresse, ville, rue..."
          value={searchQuery}
          onChange={(e) => { setSearchQuery(e.target.value); if (!e.target.value) setShowResults(false) }}
          onFocus={() => searchResults.length > 0 && setShowResults(true)}
        />
        {searchQuery && (
          <button type="button" className="mp__search-clear" onClick={() => { setSearchQuery(''); setShowResults(false); setSearchResults([]) }}>
            <span className="material-symbols-outlined">close</span>
          </button>
        )}
        <button type="submit" className="mp__search-btn" disabled={searching}>
          {searching ? (
            <span className="material-symbols-outlined mp__spin">progress_activity</span>
          ) : (
            <span className="material-symbols-outlined">arrow_forward</span>
          )}
        </button>
      </form>

      {/* ── Search Results ──────────────────── */}
      {showResults && searchResults.length > 0 && (
        <div className="mp__results">
          {searchResults.map((r) => (
            <button
              key={r.place_id}
              type="button"
              className="mp__result"
              onClick={() => selectSearchResult(r)}
            >
              <span className="material-symbols-outlined">location_on</span>
              <span className="mp__result-text">{r.display_name}</span>
            </button>
          ))}
        </div>
      )}

      {/* ── Map ──────────────────────────────── */}
      <div className="mp__map-wrap">
        <MapContainer
          center={position}
          zoom={initial?.latitude ? 15 : 12}
          className="mp__map"
          zoomControl={true}
          attributionControl={true}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            maxZoom={19}
          />
          <RecenterMap center={position} />
          <ClickHandler onPosition={handlePosition} />
          <Marker
            position={position}
            icon={markerIcon}
            draggable={true}
            eventHandlers={{
              dragend: (e) => {
                const { lat, lng } = e.target.getLatLng()
                handlePosition(lat, lng)
              },
            }}
          />
        </MapContainer>
      </div>

      {/* ── Geolocation Status ──────────────── */}
      {locating && (
        <div className="mp__info mp__info--geo">
          <div className="mp__info-row">
            <span className="material-symbols-outlined mp__info-icon mp__spin">my_location</span>
            <span className="mp__info-loading">Détection de votre position...</span>
          </div>
        </div>
      )}
      {geoError && (
        <div className="mp__info mp__info--geo mp__info--geo-error">
          <div className="mp__info-row">
            <span className="material-symbols-outlined mp__info-icon">location_off</span>
            <span className="mp__info-hint">{geoError}</span>
          </div>
        </div>
      )}

      {/* ── Selected Address ─────────────────── */}
      <div className="mp__info">
        <div className="mp__info-row">
          <span className="material-symbols-outlined mp__info-icon">pin_drop</span>
          <div className="mp__info-content">
            {geocoding ? (
              <span className="mp__info-loading">Recherche de l'adresse...</span>
            ) : address ? (
              <span className="mp__info-address">{address}</span>
            ) : (
              <span className="mp__info-hint">Cliquez sur la carte ou recherchez une adresse</span>
            )}
          </div>
        </div>
        <div className="mp__coords">
          {position[0].toFixed(5)}, {position[1].toFixed(5)}
        </div>
      </div>

      {/* ── Confirm Button ──────────────────── */}
      <button
        type="button"
        className="btn btn--primary mp__confirm"
        onClick={handleConfirm}
        disabled={!address}
      >
        <span className="material-symbols-outlined">check_circle</span>
        Utiliser cette adresse
      </button>
    </div>
  )
}
