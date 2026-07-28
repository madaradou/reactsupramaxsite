import { useState, useEffect } from 'react'
import './ProjectCarousel.css'

export default function ProjectCarousel({ images = [], alt = '', className = '' , interval = 2500 }){
  const [idx, setIdx] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    if (!images || images.length === 0) return
    const id = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setIdx(i => (i + 1) % images.length)
        setVisible(true)
      }, 300)
    }, interval)
    return () => clearInterval(id)
  }, [images, interval])

  if (!images || images.length === 0) return null

  return (
    <div className={`project-carousel`}>
      <img
        src={images[idx]}
        alt={`${alt} ${idx+1}`}
        className={`${className} project-carousel__img ${visible ? 'visible' : 'hidden'}`}
        loading="lazy"
      />
    </div>
  )
}
