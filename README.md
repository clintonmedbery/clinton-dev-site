# clinton-dev-site

Clinton Medbery's personal website, built with [React](https://react.dev/),
[Vite](https://vitejs.dev/), and [Tailwind CSS](https://tailwindcss.com/).

## Requirements

- Node.js 18+ (see `.nvmrc`)
- [pnpm](https://pnpm.io/)

## Available Scripts

Install dependencies first:

```sh
pnpm install
```

### `pnpm dev`

Runs the app in development mode at [http://localhost:3000](http://localhost:3000)
with hot module replacement.

### `pnpm build`

Builds the app for production to the `dist` folder.

### `pnpm preview`

Serves the production build locally to preview it before deploying.

### `pnpm test`

Runs the test suite with [Vitest](https://vitest.dev/).

## Notes

- Static assets (favicons, `manifest.json`, `ClintonMedberyResume.pdf`) live in
  `public/` and are served from the site root.
- This project was migrated from Create React App + Craco to Vite.
