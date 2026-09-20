import { About } from '../components/About'
import { profile } from '../data/content'

export function AboutPage() {
  return (
    <div className="page">
      <header className="page-hero">
        <div className="wrap">
          <p className="kicker">About me</p>
          <h1>An engineer from Dublin who still likes the details.</h1>
          <p>
            {profile.name} — {profile.role}. I work with European product teams that need someone
            who can hold architecture, delivery, and a production pager at the same time.
          </p>
        </div>
      </header>
      <About showPrinciples />
    </div>
  )
}
