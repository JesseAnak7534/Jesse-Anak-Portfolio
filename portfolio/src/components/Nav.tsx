import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'CV' },
  { to: '/overview', label: 'Overview' },
  { to: '/experience', label: 'Experience' },
  { to: '/education', label: 'Education' },
  { to: '/skills', label: 'Skills' },
  { to: '/publications', label: 'Publications' },
  { to: '/conferences', label: 'Conferences' },
  { to: '/referees', label: 'Referees' },
  { to: '/contact', label: 'Contact' },
]

export default function Nav() {
  const [dark, setDark] = useState(true)
  const [theme, setTheme] = useState<string>('mint')

  useEffect(() => {
    const stored = localStorage.getItem('theme-dark')
    if (stored !== null) setDark(stored === '1')
  }, [])

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme-palette')
    if (storedTheme) setTheme(storedTheme)
  }, [])

  useEffect(() => {
    document.documentElement.style.colorScheme = dark ? 'dark' : 'light'
    document.body.classList.remove('theme-mint','theme-sunset','theme-ocean','theme-violet')
    document.body.classList.add(`theme-${theme}`)
    localStorage.setItem('theme-dark', dark ? '1' : '0')
    localStorage.setItem('theme-palette', theme)
  }, [dark, theme])

  return (
    <nav className="sticky">
      <div className="container inner">
        <div className="brand">Jesse<span className="dot">.</span></div>
        <div style={{display:'flex', gap:12, alignItems:'center'}}>
          <div className="navlinks">
            {links.map(l => (
              <NavLink key={l.to} to={l.to} className={({isActive}) => isActive? 'active':''}>{l.label}</NavLink>
            ))}
          </div>
          <button className="theme-toggle" onClick={() => setDark(d => !d)} aria-label="Toggle theme">
            {dark ? '🌙' : '☀️'}
          </button>
          <div className="palette" aria-label="Color palette">
            {['mint','sunset','ocean','violet'].map(p => (
              <div key={p} className={`swatch ${p}`} onClick={() => setTheme(p)} title={p} />
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
