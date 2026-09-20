export const profile = {
  name: 'Francis Moloney',
  firstName: 'Francis',
  lastName: 'Moloney',
  initials: 'FM',
  born: '1989',
  role: 'Senior Software Engineer',
  location: 'Dublin, Ireland',
  address: '3 Harry Street, Dublin, D02 NC42, Ireland',
  timezone: 'Europe/Dublin · GMT / IST',
  status: 'Open to senior roles',
  availability: 'Europe · Remote · Hybrid Dublin',
  email: 'raymone.integrityrcs@gmail.com',
  github: 'https://github.com/francis-m89',
  githubHandle: 'github.com/francis-m89',
  lat: '53.3417° N',
  lng: '6.2605° W',
  coordinates: '53.3417° N, 6.2605° W',
  tagline:
    'I design and ship production systems from the first interface to the last deployment — reliable, observable, and cheap to run.',
  summary:
    'Thirteen years building product software across custom delivery, healthcare technology, and fund administration. I own architecture, delivery, and the operational details that keep systems boring in production.',
}

export const metrics = [
  { value: '13+', label: 'Years shipping production software' },
  { value: '2017', label: 'Senior engineer since Clanwilliam' },
  { value: '4', label: 'Employers, from SAP Ireland to Anchorstacktech' },
  { value: 'UCD', label: 'BSc and MSc in Computer Science' },
]

export const about = {
  lead: 'An engineer who likes product clarity as much as technical depth.',
  paragraphs: [
    'I am a senior software engineer based at 3 Harry Street in Dublin, born in 1989. Most of my work sits at the intersection of product delivery and platform engineering: TypeScript services, React interfaces, PostgreSQL systems that stay honest under load, and cloud infrastructure that can be explained on a whiteboard.',
    'Since 2013 I have worked through four Irish and remote teams — SAP Ireland, Waystone, Clanwilliam, and Anchorstacktech. The domains shifted from enterprise software and fund administration into healthcare technology and custom product delivery. The pattern stayed the same: take an ambiguous business problem, make the constraints visible, then ship something operators can trust on a Monday morning.',
    'I still write code every week. I also lead design conversations, mentor engineers, and sit with product and compliance when the decision is not just technical. If you need someone who can own a surface end to end — API, interface, pipeline, and pager — you are in the right place.',
  ],
  focus: [
    'Backend-strong full stack delivery',
    'Healthcare and regulated operations',
    'Fund administration and governance systems',
    'Custom product engineering, remote-first',
  ],
}

export const principles = [
  {
    title: 'Make the cost visible',
    body: 'Latency, cloud spend, and operational toil are product decisions. I instrument them early so trade-offs are honest.',
  },
  {
    title: 'Ship behind flags',
    body: 'Rollouts should be reversible. Feature flags, canaries, and a rollback you have actually practised.',
  },
  {
    title: 'Write for the next owner',
    body: 'Clear boundaries, typed contracts, and runbooks. Senior work is what a team can still operate after you move on.',
  },
]

export type Role = {
  id: string
  company: string
  title: string
  location: string
  dates: string
  current?: boolean
  summary: string
  bullets: string[]
  stack: string[]
}

export const experience: Role[] = [
  {
    id: 'anchorstacktech',
    company: 'Anchorstacktech',
    title: 'Senior Software Engineer',
    location: 'Remote',
    dates: 'Mar 2022 — Aug 2026',
    summary:
      'Custom software delivery across web, APIs, and the path into production. I owned senior full-stack work for client product teams, from design conversations through release.',
    bullets: [
      'Delivered senior full-stack work on custom product engagements — interfaces, services, and the release path that sits underneath both.',
      'Turned ambiguous client requirements into typed, shippable software, then stayed with the operational details after go-live.',
      'Worked remote as a senior IC: architecture notes, code review, and pairing that raised the quality bar without slowing delivery.',
      'Partnered with product and stakeholders so scope, risk, and trade-offs were visible before they became incidents.',
    ],
    stack: ['TypeScript', 'React', 'Node.js', 'PostgreSQL', 'AWS', 'Docker', 'GitHub Actions'],
  },
  {
    id: 'clanwilliam',
    company: 'Clanwilliam',
    title: 'Senior Software Engineer',
    location: 'Remote',
    dates: 'Oct 2017 — Feb 2022',
    summary:
      'Healthcare technology used by clinical and pharmacy operators in Ireland. I worked as a senior engineer on services and product surfaces that had to stay correct under regulation.',
    bullets: [
      'Built and maintained healthcare software for Irish operators — product interfaces and the APIs that feed them.',
      'Kept delivery honest in a regulated domain: audit-minded access, careful change, and reviews that catch the quiet bugs.',
      'Collaborated remotely with product, operations, and domain specialists so clinical workflows stayed in the design, not as an afterthought.',
      'Mentored engineers and helped settle the team’s delivery practice — testing, staging, and incident notes that people actually used.',
    ],
    stack: ['TypeScript', 'React', 'Node.js', 'PostgreSQL', 'Docker', 'AWS'],
  },
  {
    id: 'waystone',
    company: 'Waystone',
    title: 'Software Engineer',
    location: 'Dublin · Hybrid',
    dates: 'Oct 2013 — Sep 2017',
    summary:
      'Fund administration and governance software for a Dublin-based specialist. I engineered services and internal tools used by operations teams rather than consumer apps.',
    bullets: [
      'Shipped software for fund administration and governance workflows used by operations in Dublin.',
      'Worked hybrid on systems close to regulated operational data, where correctness beats cleverness.',
      'Delivered interfaces and backend services that operations could run without a Slack archaeology session.',
      'Grew the habits of production delivery: automated tests, staging environments, and careful releases.',
    ],
    stack: ['JavaScript', 'Node.js', 'React', 'SQL', 'REST'],
  },
  {
    id: 'sap-ireland',
    company: 'SAP Ireland',
    title: 'Software Developer Intern',
    location: 'Dublin · On-site',
    dates: 'Jul 2013 — Sep 2013',
    summary:
      'First production engineering season on SAP Ireland’s Dublin campus, contributing under senior engineers in an enterprise product organisation.',
    bullets: [
      'Contributed to internal software work on-site, with reviews, tickets, and the cadence of a large product team.',
      'Learned how enterprise organisations ship: environments, ownership, and the cost of a careless change.',
      'Left with a production baseline that carried into the Waystone role that followed.',
    ],
    stack: ['Java', 'SQL', 'Enterprise software'],
  },
]

export type EducationItem = {
  school: string
  credential: string
  dates: string
  location: string
  detail: string
}

export const education: EducationItem[] = [
  {
    school: 'University College Dublin',
    credential: 'Master of Science (MSc), Computer Science',
    dates: '2011 — 2012',
    location: 'Dublin',
    detail:
      'Postgraduate computer science at UCD, building on the undergraduate degree with deeper work in software systems and the practice of building them.',
  },
  {
    school: 'University College Dublin',
    credential: 'Bachelor of Science (BSc), Computer Science',
    dates: '2007 — 2011',
    location: 'Dublin',
    detail:
      'Four-year computer science degree covering software engineering, algorithms, databases, and networks — the foundation for the production work that followed.',
  },
]

export const profileNotes = [
  { label: 'Born', value: '1989' },
  { label: 'Address', value: '3 Harry Street, Dublin, D02 NC42, Ireland' },
  { label: 'Email', value: 'raymone.integrityrcs@gmail.com' },
  { label: 'GitHub', value: 'github.com/francis-m89' },
]

export const skillGroups = [
  {
    title: 'Frontend',
    note: 'Interfaces that stay fast and accessible after the third year of features.',
    items: ['React', 'Next.js', 'TypeScript', 'Vite', 'CSS architecture', 'Accessibility', 'Design systems'],
  },
  {
    title: 'Backend',
    note: 'APIs and services with contracts, idempotency, and an honest data model.',
    items: ['Node.js', 'NestJS', 'Express', 'tRPC', 'GraphQL', 'REST', 'WebSockets', 'Kafka'],
  },
  {
    title: 'Data',
    note: 'Schemas you can reason about, plus the caches and search layers around them.',
    items: ['PostgreSQL', 'Prisma', 'Redis', 'MongoDB', 'Elasticsearch', 'Snowflake'],
  },
  {
    title: 'Cloud & delivery',
    note: 'Infrastructure that can be reviewed, replayed, and rolled back.',
    items: ['AWS', 'GCP', 'Docker', 'ECS', 'Kubernetes', 'Terraform', 'GitHub Actions', 'Observability'],
  },
  {
    title: 'AI in production',
    note: 'Model calls behind tool use, evals, and a path that does not leak customer data.',
    items: ['Claude API', 'OpenAI API', 'RAG', 'Tool use', 'Eval harnesses', 'Prompt contracts'],
  },
  {
    title: 'Practice',
    note: 'How the work actually gets out the door.',
    items: ['System design', 'Mentoring', 'Incident response', 'Technical writing', 'RFCs', 'Pairing'],
  },
]

export type Project = {
  id: string
  code: string
  name: string
  year: string
  role: string
  sector: string
  blurb: string
  impact: string
  problem: string
  approach: string
  outcome: string
  stack: string[]
  href?: string
}

export const projects: Project[] = [
  {
    id: 'anchorstacktech',
    code: '01',
    name: 'Custom product delivery',
    year: '2022 — 2026',
    role: 'Senior software engineer',
    sector: 'Custom software',
    blurb:
      'Senior full-stack ownership on custom product work at Anchorstacktech — web applications, APIs, and the delivery path into production.',
    impact: 'Remote senior IC across client product teams',
    problem:
      'Client teams needed software that could be explained, operated, and extended — not a one-off demo that collapsed after handover.',
    approach:
      'I took work from design conversation to production: typed interfaces and services, reviews, and a release path with rollback. Scope and risk stayed visible to the people who had to live with the system.',
    outcome:
      'Shipped senior full-stack work across custom engagements through August 2026. The same delivery habits — contracts, tests, and operational notes — travelled from one product to the next.',
    stack: ['TypeScript', 'React', 'Node.js', 'PostgreSQL', 'AWS', 'Docker'],
  },
  {
    id: 'clanwilliam',
    code: '02',
    name: 'Healthcare platforms',
    year: '2017 — 2022',
    role: 'Senior software engineer',
    sector: 'Health',
    blurb:
      'Healthcare technology at Clanwilliam for clinical and pharmacy operators in Ireland — product surfaces that had to stay correct under regulation.',
    impact: 'Senior ownership in a regulated Irish health domain',
    problem:
      'Healthcare operators need software that matches real clinical and pharmacy workflows, with an audit trail when something is questioned later.',
    approach:
      'Worked remotely as a senior engineer on services and interfaces, keeping access, change, and testing honest. Product and domain specialists stayed in the loop so the software matched the work on the floor.',
    outcome:
      'Five years of senior delivery on Irish healthcare software. The systems stayed operable; the team’s delivery practice — reviews, staging, incident notes — got sharper over that stretch.',
    stack: ['TypeScript', 'React', 'Node.js', 'PostgreSQL', 'AWS'],
  },
  {
    id: 'waystone',
    code: '03',
    name: 'Fund administration systems',
    year: '2013 — 2017',
    role: 'Software engineer',
    sector: 'Funds',
    blurb:
      'Fund administration and governance software at Waystone in Dublin — internal tools and services used by operations teams.',
    impact: 'Hybrid Dublin delivery on regulated operational systems',
    problem:
      'Fund operations need systems that are correct, traceable, and calm under change. Cleverness that operations cannot explain is a liability.',
    approach:
      'Engineered interfaces and backend services for administration and governance workflows. Hybrid Dublin work, close to the people who ran the processes, with tests and staging that made releases safer.',
    outcome:
      'Four years building the production baseline that later senior roles assumed: careful change, honest data, and software operations teams could actually run.',
    stack: ['JavaScript', 'Node.js', 'React', 'SQL', 'REST'],
  },
  {
    id: 'sap-ireland',
    code: '04',
    name: 'SAP Ireland internship',
    year: '2013',
    role: 'Software developer intern',
    sector: 'Enterprise',
    blurb:
      'On-site internship at SAP Ireland — first production engineering environment, contributing under senior engineers in a large product organisation.',
    impact: 'On-site Dublin · first production season',
    problem:
      'Enterprise product work has a cost to careless change. An intern still has to learn how tickets, reviews, and environments actually work.',
    approach:
      'Contributed on-site in Dublin to internal software, with the cadence of a large product team: ownership, review, and the discipline of shipping inside an existing system.',
    outcome:
      'A short season that set the production habits carried into Waystone that October — how large organisations ship, and what a review is for.',
    stack: ['Java', 'SQL', 'Enterprise software'],
  },
]

export const nav = [
  { to: '/about', label: 'About' },
  { to: '/experience', label: 'Experience' },
  { to: '/education', label: 'Education' },
  { to: '/skills', label: 'Skills' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
]
