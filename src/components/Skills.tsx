import { skillGroups } from '../data/content'
import { SectionHeading } from './SectionHeading'

export function Skills() {
  return (
    <section className="section" id="skills">
      <div className="wrap">
        <SectionHeading
          kicker="04 / Skills"
          title="The stack behind the work."
          copy="Tools matter less than how they come together. This is what I actually ship with."
        />
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article className="skill-card" key={group.title}>
              <h3>{group.title}</h3>
              <p className="note">{group.note}</p>
              <div className="tags">
                {group.items.map((item) => (
                  <span className="tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
