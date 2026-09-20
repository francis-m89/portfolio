import { Link } from 'react-router-dom'
import { profile } from '../data/content'

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <p>
          © {new Date().getFullYear()} {profile.name} · {profile.location}
        </p>
        <p>
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          {' · '}
          <Link to="/contact">Contact</Link>
        </p>
      </div>
    </footer>
  )
}
