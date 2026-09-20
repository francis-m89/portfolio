import { Link } from 'react-router-dom'
import { metrics, profile } from '../data/content'

export function Hero() {
  return (
    <section className="hero" id="landing">
      <div className="wrap">
        <div className="hero-grid">
          <div>
            <p className="kicker">
              {profile.location} · {profile.role}
            </p>
            <h1>
              {profile.firstName} <em>{profile.lastName}</em>
            </h1>
            <p className="lede">{profile.tagline}</p>
            <div className="hero-actions">
              <Link className="btn btn-primary" to="/projects">
                View selected work
              </Link>
              <Link className="btn btn-ghost" to="/contact">
                Get in touch
              </Link>
            </div>
            <div className="hero-meta">
              <div>
                <strong>{profile.status}</strong>
                {profile.availability}
              </div>
              <div>
                <strong>{profile.timezone}</strong>
                {profile.coordinates}
              </div>
            </div>
          </div>

          <aside className="status-card">
            <div className="live">
              <span className="pulse" aria-hidden="true" />
              Live · Dublin
            </div>
            <h2>Hiring for a senior who can own the stack?</h2>
            <p>{profile.summary}</p>
            <div className="status-list">
              <div>
                <span>Practice</span>
                Architecture · Product · Cloud · AI
              </div>
              <div>
                <span>Working stack</span>
                TypeScript · Node · React · PostgreSQL · AWS
              </div>
              <div>
                <span>Reply</span>
                Usually within one working day
              </div>
            </div>
          </aside>
        </div>

        <div className="metrics" aria-label="Impact metrics">
          {metrics.map((metric) => (
            <div className="metric" key={metric.label}>
              <b>{metric.value}</b>
              <span>{metric.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
