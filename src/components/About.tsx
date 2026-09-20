import { about, principles, profile } from '../data/content'
import { SectionHeading } from './SectionHeading'

type Props = {
  showPrinciples?: boolean
}

const facts = [
  { label: 'Based', value: profile.location },
  { label: 'Born', value: profile.born },
  { label: 'Timezone', value: profile.timezone },
  { label: 'Status', value: profile.status },
]

export function About({ showPrinciples = false }: Props) {
  return (
    <section className="section" id="about">
      <div className="wrap">
        <SectionHeading
          kicker="01 / About"
          title={about.lead}
          copy="Product-minded, backend-strong, and still close to the code."
        />
        <div className="about-grid">
          <aside className="signal" aria-label="Location and availability">
            <p className="signal-kicker">Now · {profile.location}</p>
            <div className="signal-coords">
              <span>{profile.lat}</span>
              <span>{profile.lng}</span>
            </div>
            <svg className="signal-map" viewBox="0 0 280 88" aria-hidden="true">
              <path
                d="M8 54 C 36 22, 58 70, 86 40 S 132 18, 158 46 206 78, 236 34 268 20, 272 28"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
              />
              <circle cx="158" cy="46" r="4" fill="currentColor" />
              <circle cx="158" cy="46" r="10" fill="none" stroke="currentColor" strokeWidth="1" />
            </svg>
            <p className="signal-note">{profile.availability}</p>
            <dl className="signal-facts">
              {facts.map((fact) => (
                <div key={fact.label}>
                  <dt>{fact.label}</dt>
                  <dd>{fact.value}</dd>
                </div>
              ))}
            </dl>
          </aside>
          <div className="prose">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <ul className="focus-list">
              {about.focus.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        {showPrinciples ? (
          <div className="principles">
            {principles.map((principle) => (
              <article className="principle" key={principle.title}>
                <h3>{principle.title}</h3>
                <p>{principle.body}</p>
              </article>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  )
}
