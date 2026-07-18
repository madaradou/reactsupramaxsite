import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollReveal() {
  const { pathname } = useLocation()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
    )

    // Small delay to let React render new page DOM
    const timer = setTimeout(() => {
      const elements = document.querySelectorAll('[data-reveal], [data-stagger]')
      elements.forEach((el) => {
        if (!el.classList.contains('revealed')) {
          observer.observe(el)
        }
      })
    }, 50)

    return () => {
      clearTimeout(timer)
      observer.disconnect()
    }
  }, [pathname])

  return null
}
