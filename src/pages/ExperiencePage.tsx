import { Experience } from '../components/Experience'

export function ExperiencePage() {
  return (
    <div className="page">
      <header className="page-hero">
        <div className="wrap">
          <p className="kicker">Experience</p>
          <h1>A path through custom delivery, health, and funds.</h1>
          <p>
            Four environments that shaped how I build: Anchorstacktech, Clanwilliam, Waystone, and
            an internship at SAP Ireland.
          </p>
        </div>
      </header>
      <Experience />
    </div>
  )
}
