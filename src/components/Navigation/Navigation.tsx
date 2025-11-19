import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { navItems } from './data'
import NavLink from './NavLink'
import './Navigation.css'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (id: string) => {
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => {
        const element = document.getElementById(id)
        element?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    } else {
      const element = document.getElementById(id)
      element?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className={`navigation ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <a href="/" className="nav-logo">
          LM.
        </a>
        <ul className="nav-links">
          {navItems.map((item) => (
            <NavLink key={item.id} item={item} onClick={handleNavClick} />
          ))}
        </ul>
      </div>
    </nav>
  )
}
