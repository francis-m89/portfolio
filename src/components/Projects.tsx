import { Link } from 'react-router-dom'
import { projects } from '../data/content'
import { SectionHeading } from './SectionHeading'

type Props = {
  expanded?: boolean
}

export function Projects({ expanded = false }: Props) {
  return (
    <section className="section" id="projects">
      <div className="wrap">
        <SectionHeading
          kicker="05 / Projects"
          title="Case studies, not screenshot galleries."
          copy="Problem, constraints, decisions, and the outcome you can take to a stakeholder."
        />
        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project" key={project.id}>
              <div className="project-code">
                {project.code}
                <span>
                  {project.year} · {project.sector}
                </span>
              </div>
              <div>
                <h3>{project.name}</h3>
                <p className="blurb">{project.blurb}</p>
                <p className="impact">{project.impact}</p>
                <div className="tags">
                  {project.stack.map((item) => (
                    <span className="tag" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
                {expanded ? (
                  <div className="case">
                    <article>
                      <h4>Problem</h4>
                      <p>{project.problem}</p>
                    </article>
                    <article>
                      <h4>Approach</h4>
                      <p>{project.approach}</p>
                    </article>
                    <article>
                      <h4>Outcome</h4>
                      <p>{project.outcome}</p>
                    </article>
                  </div>
                ) : null}
              </div>
              {!expanded ? (
                <Link className="project-link" to="/projects">
                  Read the case →
                </Link>
              ) : (
                <span className="project-link">{project.role}</span>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
