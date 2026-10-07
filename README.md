This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Current development setup

Use Node.js 24 and Bun 1.4.2 (see `engines` and `packageManager` in `package.json`). The committed `bun.lock` is the dependency source of truth.

```bash
bun install --frozen-lockfile
bun run dev
bun run lint
bun run lint:fix
bun run format
bun run build
```

Local environment variables are loaded from the ignored `.env` file. Set `NEXT_PUBLIC_BASE_URL` to the local server origin (normally `http://localhost:3000`) so server-side App Store requests and contact form actions use the local app. Keep credentials out of Git. Public canonical URLs always use `https://www.janchalupa.dev`.

### Dependency update: 2026-10-07

Updated direct dependencies to their latest compatible stable releases and refreshed transitive dependencies. Main versions: Next.js 16.4.0, React 19.3.0, Tailwind CSS 4.3.3, Framer Motion 14.0.0, Resend 6.32.1, GraphQL Codegen 7.4.4, and the latest individual HeroUI v2 packages.

Compatibility limits:

- Node types 24.19.1 match the configured Node.js 24 runtime.
- HeroUI remains on the current individual-package releases. Moving to the separate HeroUI v3 API would require a component and theme migration rather than a dependency version bump.

Migrated Next.js React Compiler configuration, replaced the Tailwind PostCSS plugin, and adapted affected React components to the current lint rules. Removed unused `@heroui/select` and `@types/react-textfit`, obsolete `autoprefixer` and `@eslint/eslintrc`, and the undeclared `node-fetch` import. Declared required HeroUI, GraphQL, codegen preset, and `server-only` packages directly.

Validation: clean frozen-lockfile installation, lint and type checking, production build, GraphQL generation against the real Hygraph schema into a temporary directory, all six sitemap pages with correct canonical URLs, and browser checks of desktop/mobile navigation, light/dark themes, project dialogs, README loading, App Store screenshots/tabs, and contact form rendering. No real email was sent. Vercel Analytics cannot be fully validated on the local production server because its script is provided by Vercel hosting.

The full dependency audit reports two high-severity findings in development tooling:

- [`@graphql-tools/utils` 11.2.2](https://github.com/advisories/GHSA-7mx3-vvmw-hjmv): the latest Codegen CLI and client preset require `^11.2.0`; the fixed version is in major 12. No incompatible override was introduced.
- [`braces` 3.0.3](https://github.com/advisories/GHSA-vfj7-8cjw-p6xm): no patched release is available.

### Biome migration: 2026-10-07

Biome 2.5.15 provides linting, formatting, and import organization. `bun run lint` runs `biome check .` and the separate TypeScript check; the pre-commit hook runs the same command without changing the index. `bun run lint:fix` applies safe lint/import/formatting fixes, and `bun run format` only formats files.

Removed ESLint and its Next.js configuration package. There was no direct Prettier dependency or project configuration to migrate. The VS Code workspace recommends the Biome extension and uses it for formatting and code actions on save. Formatting follows the existing two-space indentation and 100-column line width.

Migrated supported ESLint rules, including Next.js and React rules, and preserved the existing disabled exhaustive-dependencies rule. Biome does not implement every ESLint/React Compiler rule; TypeScript checking and the production build remain separate checks. Generated GraphQL files and build/dependency directories are excluded.

An existing App Store integration limitation remains: its JWT is created once at module initialization and expires after 20 minutes. This update does not change that behavior.

### TypeScript 7 and security PR review: 2026-10-07

Updated TypeScript to 7.0.2 and enabled Next.js `experimental.useTypeScriptCli`, so the production build uses the native compiler CLI instead of the legacy TypeScript JavaScript API.

[Security PR #1](https://github.com/honzachalupa/portfolio/pull/1) changes only Next.js 15.3.1 to 15.3.8 to fix React Server Components vulnerabilities. The local Next.js 16.4.0 update supersedes that change. Keep the security PR open until the newer dependencies are published and deployed; a local update does not establish production remediation. See the [Next.js security advisory](https://nextjs.org/blog/CVE-2025-66478) for the affected versions and post-deployment secret rotation guidance.
