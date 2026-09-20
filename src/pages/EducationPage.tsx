import { Education } from '../components/Education'

export function EducationPage() {
  return (
    <div className="page">
      <header className="page-hero">
        <div className="wrap">
          <p className="kicker">Education</p>
          <h1>University College Dublin, twice.</h1>
          <p>
            A computer science path through UCD — Bachelor of Science, then Master of Science —
            before the production work that started at SAP Ireland in 2013.
          </p>
        </div>
      </header>
      <Education />
    </div>
  )
}
