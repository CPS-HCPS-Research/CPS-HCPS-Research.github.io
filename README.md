# CPS-HCPS Research

The official website of **CPS-HCPS Research** — Cyber-Physical and Human-Cyber-Physical Systems Research.

**From Formal Foundations to Grounded Intelligence**

- Website: https://cps-hcps-research.github.io/
- Organization: https://github.com/CPS-HCPS-Research

## Project Overview

A lightweight, responsive bilingual academic website connecting formal foundations, software engineering, and intelligent systems. Navigation follows **Home → News → Research → Seminars → Publications → Projects → Resources → People → About**. Seminars contains Book Reading and Paper Reading; contact information follows About.

English is the default on a first visit. The globe icon at the top right offers English and 简体中文, remembers an explicit selection locally, and stays visible on mobile. The switch updates navigation, content, diagram labels, page title, and document language while preserving section anchors. If browser storage is unavailable, switching still works for the current visit.

Content distinguishes planned work from published results. The Book Reading Seminar repository exists but is in preparation. The paper seminar is planned. News, Projects, People, and Publications have explicit empty states until confirmed content is available. No member, affiliation, funding, or contact details are inferred.

The homepage connects three concepts: intelligent capabilities for perception and reasoning; autonomous operation within explicit boundaries and human oversight; and AI-native architecture that considers intelligence and assurance throughout the system lifecycle. These describe the group's research perspective and objectives.

Research is introduced through three prospective application areas—embodied intelligence, industrial operations, and intelligent software systems—each with a concrete challenge, research value, and potential joint work. These are collaboration opportunities, not claims of deployed projects or demonstrated performance. The existing six research directions provide the theoretical and engineering foundation. The homepage diagram is a responsive concept architecture, with readable text, vector icons, feedback connections, and paired language labels.

Conceptual references: [Ericsson's AI-native definition](https://www.ericsson.com/en/reports-and-papers/white-papers/ai-native), [NIST's CPS Framework](https://www.nist.gov/programs-projects/cyber-physical-systems-and-internet-things-foundations), and [NSF's CPS research scope](https://www.nsf.gov/funding/opportunities/cps-cyber-physical-system-foundations-connected-communities). These inform terminology and research framing; they do not establish the group's achievements or affiliations.

## Research Scope

- Cyber-Physical Systems
- Human-Cyber-Physical Systems
- Formal Methods and Verification
- Intelligent Software Engineering
- Human-Machine Collaboration
- Embodied and Collaborative Intelligence

## Technology Stack

- Vue 3 and TypeScript with strict checking
- Vite, native CSS, and an original inline SVG systems diagram
- Node.js 24 (see `.nvmrc`) and npm with a committed lockfile
- GitHub Actions and GitHub Pages

Vue is the only runtime dependency. The website uses system fonts, no external image service, no database, no API keys, and no analytics. It supports keyboard navigation, a skip link, semantic landmarks, mobile navigation, and reduced motion preferences.

## Repository Structure

```text
.github/workflows/deploy.yml   Build and Pages deployment
public/                       Favicon, robots.txt, sitemap.xml
scripts/check-build.mjs        Built asset and root-path checks
scripts/check-content.mjs      Vue rendering, anchors, and semantic checks
src/
  components/                 Header, diagram, cards, section heading, publications
  data/site.ts                Default English content and collections
  data/site.zh.ts             Matching Chinese content
  i18n.ts                     Language selection, preference, and metadata
  App.vue                     Page composition
  main.ts                     Application entry point
  styles.css                  Design tokens and responsive styles
index.html                    Document metadata and no-script fallback
vite.config.ts                Root-domain build configuration
tsconfig.json                 Strict TypeScript configuration
```

## Getting Started

```sh
git clone https://github.com/CPS-HCPS-Research/CPS-HCPS-Research.github.io.git
cd CPS-HCPS-Research.github.io
nvm use
npm ci
```

If nvm is unavailable, install Node.js 24 and use npm directly. GitHub repository URLs are case-insensitive. This project retains the repository name supplied by the organization; the public website hostname is lowercase.

## Local Development

```sh
npm run dev
```

Open the local address printed by Vite. Content changes in `src/data/site.ts` update the page during development.

```sh
npm run typecheck  # Vue and TypeScript checks
npm run build      # Type checking and production build
npm run check      # Build, asset paths, rendered content, and anchor checks
npm run preview    # Serve the production build locally
```

Before submitting changes, check desktop, tablet, and mobile layouts; keyboard focus; menu open/close/Escape behavior; anchor targets; reduced motion; and external links. `check-build.mjs` checks the build artifact, not visual behavior or live deployment.

## Build and Deployment

The organization site is hosted at the domain root. `vite.config.ts` explicitly sets `base: '/'`; do not change this to a repository subdirectory for this deployment. The site uses section anchors, so it does not require a server-side history fallback.

1. Use the existing repository `CPS-HCPS-Research/CPS-HCPS-Research.github.io` and the `main` branch.
2. In **Settings → Pages → Build and deployment → Source**, select **GitHub Actions**.
3. Push to `main`, or manually run **Deploy website to GitHub Pages** from the Actions tab.
4. The workflow runs `npm ci`, type checking, a production build, and artifact verification; uploads `dist/`; and deploys through the official GitHub Pages actions.
5. Confirm the deployment job succeeds, then visit https://cps-hcps-research.github.io/ and check that its CSS, JavaScript, and favicon load successfully.

Only the deployment job receives `pages: write` and `id-token: write`; the build job has read-only repository access. The `github-pages` environment and a concurrency group serialize deployments. No personal access token or external deployment secret is required. Keep environment branch restrictions aligned with `main`.

A successful local build is not proof of a successful deployment. If publication fails, inspect the Actions job logs and Pages source setting. If updates appear delayed, compare the deployed asset filenames with `dist/index.html` and hard-refresh the site.

Official references: [GitHub Pages naming](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site), [Vite deployment](https://vite.dev/guide/static-deploy#github-pages), and [custom Pages workflows](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).

## Content Maintenance

Edit `src/data/site.ts` and `src/data/site.zh.ts` together for site identity, navigation, research areas, seminars, resources, and interface text. Both bundles share a typed structure; IDs and destinations must match. Publication metadata remains in the shared `publications` collection. This site does not need an additional internationalization framework.

News, Projects, and People currently use `EmptySection.vue`; replace their empty states with confirmed content when available. Do not copy people or research records from another group merely to populate these sections. Book Reading and Paper Reading are entries in `seminars`; add further reading formats there without adding new top-level navigation items.

- **Research:** add an entry to `researchAreas`. Set its optional `href` only after a topic page exists; otherwise the card remains descriptive.
- **Seminars:** update the status and description based on actual records. Add dates or progress only after confirmation. A missing `href` renders text, not a dead link.
- **Resources:** add only existing public destinations. Describe their actual availability; repository creation alone is not a research result.
- **Publications:** add verified `id`, `title`, `authors`, `venue`, `year`, and `href` fields to `publications`, plus an optional `artifactUrl`. The list component automatically replaces the empty state.
- **Identity and SEO:** when the domain or name changes, also update `index.html`, `public/robots.txt`, and `public/sitemap.xml`.

The section composition lives in `App.vue`. New sections require a component/section and a matching navigation ID. Additional pages can later use Vite multi-page entries or a router; neither is needed for this initial site.

## Contribution Guidelines

1. Make a focused branch and keep changes reviewable.
2. Preserve existing content and provenance. Verify all publication metadata and public links.
3. Do not add unconfirmed people, institutions, sponsors, email addresses, or achievements.
4. Use original or explicitly permitted assets. Document permissions for any future third-party assets.
5. Keep dependencies small and commit `package-lock.json` whenever dependencies change.
6. Run `npm ci` and `npm run check`; inspect responsive and keyboard behavior before opening a pull request.
7. Never commit credentials, `.env` files, dependency directories, or generated `dist/` output.

No software license is declared by this initialization. Any future license choice requires an organization decision.
