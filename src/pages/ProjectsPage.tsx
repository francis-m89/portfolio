import { Projects } from '../components/Projects'

export function ProjectsPage() {
  return (
    <div className="page">
      <header className="page-hero">
        <div className="wrap">
          <p className="kicker">Projects</p>
          <h1>Selected systems with the decisions still attached.</h1>
          <p>
            Four stretches of work that show how I think: custom product delivery, Irish healthcare
            platforms, fund administration systems, and a first season at SAP Ireland.
          </p>
        </div>
      </header>
      <Projects expanded />
    </div>
  )
}
