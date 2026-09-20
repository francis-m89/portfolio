type Props = {
  kicker: string
  title: string
  copy?: string
}

export function SectionHeading({ kicker, title, copy }: Props) {
  return (
    <div className="section-head">
      <div>
        <p className="kicker">{kicker}</p>
        <h2>{title}</h2>
      </div>
      {copy ? <p>{copy}</p> : null}
    </div>
  )
}
