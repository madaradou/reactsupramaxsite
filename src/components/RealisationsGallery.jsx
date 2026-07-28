import { useState, useEffect } from 'react'
import './RealisationsGallery.css'

// Displays a gallery of images. Behavior:
// - If `urls` prop is provided (array of image URLs), use it.
// - Otherwise try to fetch `/realisations/links.json` (public) and use that array.
// - Otherwise fallback to local images named `/{prefix}{n}.jpg` (as before).
export default function RealisationsGallery({ urls: propUrls, count = 6, prefix = 'realisations-' }){
  const [urls, setUrls] = useState(null)
  const [loaded, setLoaded] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    if (propUrls && Array.isArray(propUrls) && propUrls.length) {
      setUrls(propUrls)
      setLoaded(Array(propUrls.length).fill(true))
      return
    }

    // Try to fetch public/realisations/links.json
    fetch('/realisations/links.json')
      .then(res => {
        if (!res.ok) throw new Error('no links.json')
        return res.json()
      })
      .then(data => {
        console.debug('RealisationsGallery: links.json', data)
        if (Array.isArray(data) && data.length) {
          setUrls(data)
          setLoaded(Array(data.length).fill(true))
          return
        }
        // fallback to local pattern
        const files = Array.from({length: count}, (_, i) => `/${prefix}${i+1}.jpg`)
        console.debug('RealisationsGallery: fallback files', files)
        setUrls(files)
        setLoaded(Array(files.length).fill(true))
      })
      .catch((err) => {
        console.warn('RealisationsGallery: failed to fetch links.json', err)
        setError(err?.message || String(err))
        const files = Array.from({length: count}, (_, i) => `/${prefix}${i+1}.jpg`)
        setUrls(files)
        setLoaded(Array(files.length).fill(true))
      })
  }, [propUrls, count, prefix])

  // reveal stagger (declare hook before any early return to keep hooks order stable)
  useEffect(() => {
    if (!urls) return
    const el = document.querySelector('.realisations-gallery')
    if (!el) return
    const items = Array.from(el.querySelectorAll('.realisations-gallery__item'))
    items.forEach((it, idx) => {
      it.classList.remove('show')
      setTimeout(() => it.classList.add('show'), idx * 180)
    })
  }, [urls])

  if (!urls) return null

  return (
    <div className="realisations-gallery" data-reveal>
      {error && (
        <div style={{color:'#b45353',marginBottom:12}}>Erreur galerie: {error}</div>
      )}
      {urls.map((src, i) => (
        loaded[i] ? (
          <div className="realisations-gallery__item" key={i}>
            <img
              src={src}
              alt={`Réalisation ${i+1}`}
              loading="lazy"
              onError={() => setLoaded(prev => { const next = [...prev]; next[i]=false; return next })}
            />
          </div>
        ) : null
      ))}
    </div>
  )
}
