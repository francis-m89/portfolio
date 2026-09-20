import { Contact } from '../components/Contact'

export function ContactPage() {
  return (
    <div className="page">
      <header className="page-hero">
        <div className="wrap">
          <p className="kicker">Contact</p>
          <h1>Let’s talk about the work.</h1>
          <p>
            Senior full-stack, platform, and staff-adjacent roles. Remote Europe or hybrid Dublin.
            I reply within a working day.
          </p>
        </div>
      </header>
      <Contact />
    </div>
  )
}
