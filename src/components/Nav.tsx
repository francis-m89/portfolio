import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { nav, profile } from '../data/content'

export function Nav() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header className={open ? 'nav open' : 'nav'}>
      <div className="nav-inner">
        <NavLink to="/" end className="brand" onClick={close}>
          <span className="mark" aria-hidden="true">
            {profile.initials}
          </span>
          <span className="brand-copy">
            <strong>{profile.name}</strong>
            <span>{profile.location}</span>
          </span>
        </NavLink>

        <button
          className="nav-toggle"
          type="button"
          aria-expanded={open}
          aria-label="Toggle navigation"
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className="nav-links" aria-label="Primary">
          {nav.map((item) =>
            item.to === '/contact' ? (
              <NavLink key={item.to} to={item.to} className="nav-cta" onClick={close}>
                {item.label}
              </NavLink>
            ) : (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => (isActive ? 'active' : undefined)}
                end={item.to === '/'}
                onClick={close}
              >
                {item.label}
              </NavLink>
            ),
          )}
        </nav>
      </div>
    </header>
  )
}
