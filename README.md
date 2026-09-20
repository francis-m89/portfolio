# Francis Moloney — Senior Software Engineer

Portfolio site for a Dublin-based senior software engineer. Landing page plus dedicated routes for about, experience, education, skills, projects, and contact.

## Stack

- Vite
- React 19
- TypeScript
- React Router

## Scripts

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Deploy on Netlify

This is a Vite SPA. Netlify settings are already in `netlify.toml`:

- **Build command:** `npm run build`
- **Publish directory:** `dist`
- **Redirects:** all routes serve `index.html` so `/about`, `/experience`, and the rest work on refresh

**From GitHub:** push this repo, then in Netlify choose *Add new site → Import an existing project* and select the repository. Netlify will pick up `netlify.toml`.

**From the publish folder:** run `npm run build`, then in Netlify choose *Add new site → Deploy manually* and drop the `dist` folder.

## Customise

Edit `src/data/content.ts` to replace the profile, roles, projects, and contact details.
