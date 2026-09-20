import { education, profileNotes } from '../data/content'
import { SectionHeading } from './SectionHeading'

export function Education() {
  return (
    <section className="section" id="education">
      <div className="wrap">
        <SectionHeading
          kicker="03 / Education"
          title="Computer science at University College Dublin."
          copy="A BSc and MSc from UCD — the formal path that sits underneath thirteen years of production work."
        />
        <div className="edu-grid">
          <div>
            {education.map((item) => (
              <article className="edu-card" key={`${item.credential}-${item.dates}`}>
                <div className="dates">{item.dates}</div>
                <h3>{item.credential}</h3>
                <div className="school">
                  {item.school} · {item.location}
                </div>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
          <aside className="cert-card">
            <h3>Details</h3>
            <ul>
              {profileNotes.map((note) => (
                <li key={note.label}>
                  <strong>{note.label}</strong>
                  <span>{note.value}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  )
}
