import { experience } from '../data/content'
import { SectionHeading } from './SectionHeading'

export function Experience() {
  const roles = experience

  return (
    <section className="section" id="experience">
      <div className="wrap">
        <SectionHeading
          kicker="02 / Experience"
          title="Production results, not just responsibilities."
          copy="Selected roles owning backend systems, product interfaces, infrastructure, and the people around them."
        />
        <div className="timeline">
          {roles.map((role) => (
            <article className="role" key={role.id}>
              <div className="role-side">
                <div className="dates">{role.dates}</div>
                <h3>{role.title}</h3>
                <div className="company">{role.company}</div>
                <div className="loc">{role.location}</div>
                {role.current ? <span className="badge">Current</span> : null}
              </div>
              <div>
                <p className="summary">{role.summary}</p>
                <ul>
                  {role.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
                <div className="tags">
                  {role.stack.map((item) => (
                    <span className="tag" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
