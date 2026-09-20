import { Skills } from '../components/Skills'

export function SkillsPage() {
  return (
    <div className="page">
      <header className="page-hero">
        <div className="wrap">
          <p className="kicker">Skills</p>
          <h1>Frontend, backend, data, cloud, and the practice around them.</h1>
          <p>
            I stay close to TypeScript, Node, React, PostgreSQL, and AWS. Everything else is chosen
            for the problem — not the résumé line.
          </p>
        </div>
      </header>
      <Skills />
    </div>
  )
}
