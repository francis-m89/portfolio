import { Link } from 'react-router-dom'

export function NotFound() {
  return (
    <div className="page not-found">
      <div>
        <p className="kicker">404</p>
        <h1>This page has gone west.</h1>
        <p>The route does not exist. Head back to the landing page.</p>
        <p>
          <Link className="btn btn-primary" to="/">
            Return home
          </Link>
        </p>
      </div>
    </div>
  )
}
