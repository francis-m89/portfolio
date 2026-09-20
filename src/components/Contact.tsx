import { useState, type FormEvent } from 'react'
import { profile } from '../data/content'
import { SectionHeading } from './SectionHeading'

type FormState = {
  name: string
  email: string
  subject: string
  message: string
}

const empty: FormState = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

export function Contact() {
  const [form, setForm] = useState<FormState>(empty)
  const [error, setError] = useState('')
  const [sent, setSent] = useState(false)

  function update(field: keyof FormState, value: string) {
    setForm((current) => ({ ...current, [field]: value }))
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError('Please add your name, email, and a short note.')
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError('That email does not look quite right.')
      return
    }

    const subject = encodeURIComponent(form.subject || `Hello from ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name}\n${form.email}`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    setError('')
    setSent(true)
  }

  return (
    <section className="section" id="contact">
      <div className="wrap">
        <SectionHeading
          kicker="06 / Contact"
          title="Looking for a senior engineer who can ship and scale?"
          copy="Open to senior full-stack, platform, and staff-adjacent IC roles with European teams."
        />
        <div className="contact-grid">
          <div className="contact-copy">
            <h3>Write from Dublin, work across Europe.</h3>
            <p>
              I take on a small number of conversations at a time so the work stays sharp. If the
              problem is real — a product to unstick, a platform to settle, a team that needs a
              senior who still writes code — send a note.
            </p>
            <div className="contact-list">
              <a href={`mailto:${profile.email}`}>
                <span>Email</span>
                {profile.email}
              </a>
              <div>
                <span>Address</span>
                {profile.address}
              </div>
              <div>
                <span>Based</span>
                {profile.location} · {profile.timezone}
              </div>
              <a href={profile.github} target="_blank" rel="noreferrer">
                <span>GitHub</span>
                {profile.githubHandle}
              </a>
            </div>
          </div>

          {sent ? (
            <div className="form-ok">
              <h3 className="serif">Thanks — your mail client should be open.</h3>
              <p>
                If nothing appeared, write directly to {profile.email}. I usually reply within one
                working day.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate>
              <div className="field">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  autoComplete="name"
                  value={form.name}
                  onChange={(event) => update('name', event.target.value)}
                />
              </div>
              <div className="field">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={(event) => update('email', event.target.value)}
                />
              </div>
              <div className="field">
                <label htmlFor="subject">Subject</label>
                <input
                  id="subject"
                  name="subject"
                  value={form.subject}
                  onChange={(event) => update('subject', event.target.value)}
                />
              </div>
              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={(event) => update('message', event.target.value)}
                />
              </div>
              {error ? <p className="form-error">{error}</p> : null}
              <button className="btn btn-primary" type="submit">
                Send a note
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
