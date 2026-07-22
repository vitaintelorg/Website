Name of company: VitaIntel
Old Site: https://vitaintel.org

# Updates
## pages:
- Home
- About
- Services
- Portfolio
- Blog
- Testimonials
- Contact

## Use Modern Technologies

- **Frontend**
    - React
    - Next.js
    - TypeScript
- **Styling**
    - Tailwind CSS
    - CSS Modules
    - Shadcn UI
- **Animations**
    - Framer Motion
    - GSAP (when needed)
- **Icons**
    - Lucide
    - Heroicons

## Make It Responsive

Design for:

- Mobile
- Tablet
- Laptop
- Desktop
- Ultrawide

## Optimize Performance

Professional landing pages aim for excellent Core Web Vitals.

Checklist:

- Lazy-load images
- Compress images (WebP/AVIF)
- Optimize fonts
- Code splitting
- Server-side rendering (SSR) or static generation (SSG)
- Minimize JavaScript

Aim for:

- Lighthouse score: 90+
- First Contentful Paint (FCP): < 2 seconds
- Largest Contentful Paint (LCP): < 2.5 seconds

## Follow SEO Best Practices

Include:

- Title tag
- Meta description
- Open Graph tags
- Twitter cards
- Structured data (Schema.org)
- Sitemap
- Robots.txt

## Polish the User Experience

Small details make a page feel professional:

- Smooth scrolling
- Subtle hover effects
- Consistent spacing
- Clear visual hierarchy
- Well-designed empty states
- Loading skeletons when needed
- Consistent iconography
- Thoughtful micro-interactions

vitaintel/
│
├── app/
│   ├── (marketing)/
│   │   ├── page.tsx                 # Home
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── services/
│   │   │   └── page.tsx
│   │   ├── portfolio/
│   │   │   └── page.tsx
│   │   ├── blog/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/
│   │   │       └── page.tsx
│   │   ├── testimonials/
│   │   │   └── page.tsx
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   └── layout.tsx
│   │
│   ├── globals.css
│   ├── layout.tsx
│   ├── loading.tsx
│   ├── error.tsx
│   ├── not-found.tsx
│   ├── sitemap.ts
│   └── robots.ts
│
├── components/
│   │
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── MobileMenu.tsx
│   │   ├── Footer.tsx
│   │   ├── Container.tsx
│   │   └── ThemeProvider.tsx
│   │
│   ├── sections/
│   │   ├── home/
│   │   │   ├── Hero.tsx
│   │   │   ├── AboutPreview.tsx
│   │   │   ├── ServicesPreview.tsx
│   │   │   ├── PortfolioPreview.tsx
│   │   │   ├── BlogPreview.tsx
│   │   │   ├── TestimonialsPreview.tsx
│   │   │   ├── ContactCTA.tsx
│   │   │   └── index.ts
│   │   │
│   │   ├── about/
│   │   ├── services/
│   │   ├── portfolio/
│   │   ├── blog/
│   │   ├── testimonials/
│   │   └── contact/
│   │
│   ├── cards/
│   │   ├── ServiceCard.tsx
│   │   ├── PortfolioCard.tsx
│   │   ├── BlogCard.tsx
│   │   └── TestimonialCard.tsx
│   │
│   ├── forms/
│   │   └── ContactForm.tsx
│   │
│   ├── common/
│   │   ├── SectionHeader.tsx
│   │   ├── Button.tsx
│   │   ├── Badge.tsx
│   │   ├── Breadcrumb.tsx
│   │   ├── EmptyState.tsx
│   │   ├── LoadingSkeleton.tsx
│   │   └── ScrollToTop.tsx
│   │
│   └── ui/                          # shadcn/ui components
│
├── data/
│   ├── navigation.ts
│   ├── services.ts
│   ├── portfolio.ts
│   ├── blog.ts
│   ├── testimonials.ts
│   ├── company.ts
│   └── seo.ts
│
├── hooks/
│   ├── useScroll.ts
│   ├── useMediaQuery.ts
│   ├── useIntersection.ts
│   └── useGSAP.ts
│
├── lib/
│   ├── seo.ts
│   ├── metadata.ts
│   ├── utils.ts
│   ├── animations.ts
│   └── constants.ts
│
├── services/
│   ├── blog.service.ts
│   ├── contact.service.ts
│   └── portfolio.service.ts
│
├── types/
│   ├── blog.ts
│   ├── portfolio.ts
│   ├── service.ts
│   ├── testimonial.ts
│   └── common.ts
│
├── styles/
│   ├── globals.css
│   ├── animations.css
│   └── variables.css
│
├── public/
│   ├── images/
│   │   ├── hero/
│   │   ├── about/
│   │   ├── services/
│   │   ├── portfolio/
│   │   ├── blog/
│   │   ├── testimonials/
│   │   └── logos/
│   │
│   ├── icons/
│   ├── favicon.ico
│   ├── site.webmanifest
│   └── og-image.png
│
├── config/
│   ├── site.ts
│   ├── navigation.ts
│   └── metadata.ts
│
├── middleware.ts
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── package.json
├── .env.local
└── README.md

---

# Delivery phases

## Phase progress and confirmed decisions

| Phase | Status | Confirmed output |
| --- | --- | --- |
| Phase 1 — Stitch design | Completed | [Stitch project](https://stitch.withgoogle.com/projects/8744485953062365568) |
| Phase 2 — Cloud planning | Completed | Claude cloud architecture recommendation recorded below |
| Phase 3 — Implementation | Next | Build the approved design using the selected cloud architecture |
| Phase 4 — QA and launch | Pending | Validate and release the production website |
| Phase 5 — Cursor improvement | Pending | Review and improve after the initial release |

### Confirmed Phase 2 cloud architecture

- **Hosting:** Vercel Pro, initially one seat; estimated total MVP operating cost is approximately **$20–25/month**.
- **DNS:** Cloudflare DNS with DNSSEC; Vercel manages the custom-domain TLS certificate.
- **Canonical domain:** `www.vitaintel.org`, with a permanent redirect from the apex domain.
- **Environments:** local, automatic Vercel preview deployments for branches/PRs, and production from protected `main`. A persistent staging site is deferred until a CMS or integration needs one.
- **Content:** code-managed data plus MDX blog posts for the MVP. Adopt a headless CMS only when non-technical publishing becomes necessary.
- **Contact form:** Next.js Server Action or route handler, Zod validation, Resend email delivery to `hello@vitaintel.org`, Cloudflare Turnstile, a honeypot field, and rate limiting.
- **Analytics and monitoring:** Cloudflare Web Analytics and Sentry's free tier; send failed-deployment notifications to Slack.
- **Security and access:** Vercel environment variables scoped separately for Preview and Production, 2FA enabled, CEO as billing owner, Full-Stack Developer as deploy administrator, and Cybersecurity Lead as read-only reviewer.
- **Release quality gates:** type checking, ESLint, production build, Lighthouse CI (performance and accessibility at least 90), and broken-link checks. Preview URLs must be `noindex`.
- **Rollback:** immediately promote the last known-good Vercel deployment; target recovery time is under five minutes.

### Phase 3 implementation prerequisites

- [ ] GitHub repository created and `main` branch protected.
- [ ] Vercel Pro project connected to the repository with preview deployments enabled.
- [ ] `vitaintel.org` DNS moved/configured in Cloudflare and connected to Vercel.
- [ ] Canonical-domain redirect and HSTS configured after domain verification.
- [ ] Preview and Production environment variables configured.
- [ ] Resend domain/email sender and `hello@vitaintel.org` confirmed.
- [ ] Cloudflare Turnstile site and secret keys created.
- [ ] Sentry and Cloudflare Web Analytics projects created.
- [ ] Final Stitch exports, brand assets, and approved page copy available to the implementation team.

## Phase 0 — Discovery and requirements in Claude

**Tool:** Claude

Use this phase to turn the available business information into a clear website brief before starting visual design.

**Prompt for Claude**

```text
You are a senior digital strategist and UX content planner. Help me prepare a website brief for VitaIntel (https://vitaintel.org).

The planned website pages are: Home, About, Services, Portfolio, Blog, Testimonials, and Contact.
The technical direction is a responsive Next.js, React, TypeScript, Tailwind CSS, and shadcn/ui website.

Create a concise, actionable website brief that includes:
1. Assumptions and questions needed to understand VitaIntel's audience, services, brand voice, differentiators, and main conversion goal.
2. A recommended information architecture and navigation for the listed pages.
3. The purpose, key sections, primary CTA, and suggested content for each page.
4. A home-page conversion journey from Hero through Contact CTA.
5. A content and brand-assets checklist.
6. SEO keyword themes and metadata ideas for each page.
7. Risks, dependencies, and a prioritised MVP scope.

Do not invent company facts. Clearly label assumptions and ask focused questions where information is missing. Format the result as a handoff document for a designer and developer.
```

**Deliverable:** a confirmed website brief, content outline, asset checklist, and MVP scope.

## Phase 1 — Design in Stitch

**Tool:** https://stitch.withgoogle.com/

Create the complete responsive visual direction for VitaIntel before development.

- Establish the design system: VitaIntel colours, typography, spacing, icon style, buttons, cards, form fields, and animation rules.
- Create desktop and mobile screens for Home, About, Services, Portfolio, Blog, Testimonials, and Contact.
- Prioritise the Home page journey: `Hero` → `AboutPreview` → `ServicesPreview` → `PortfolioPreview` → `BlogPreview` → `TestimonialsPreview` → `ContactCTA`.
- Design the shared `Navbar`, `MobileMenu`, `Footer`, loading, error, empty, and 404 states.
- Define responsive layouts for mobile, tablet, laptop, desktop, and ultrawide displays.
- Export images, logo variants, icons, font choices, and final page copy.

**Deliverable:** approved Stitch screens, design tokens, responsive rules, and an asset/content handoff.

**Prompt for Stitch**

```text
Design a premium, modern, trustworthy responsive marketing website for VitaIntel.

Create designs for: Home, About, Services, Portfolio, Blog, Blog Article, Testimonials, and Contact. The site must work beautifully on mobile, tablet, laptop, desktop, and ultrawide screens.

For the Home page, use this conversion flow: Hero with a clear primary CTA, About preview, Services preview, Portfolio preview, Blog preview, Testimonials preview, and a final Contact CTA. Include a polished sticky navigation, mobile menu, footer, buttons, cards, form fields, loading states, empty states, and error states.

Visual direction: clean and editorial, confident but approachable, generous whitespace, clear visual hierarchy, subtle micro-interactions, accessible contrast, and consistent iconography. Use rounded cards and restrained, purposeful motion only. Avoid generic corporate imagery and cluttered layouts.

Create a reusable design system covering colours, typography, spacing, grids, button variants, cards, forms, and responsive rules. Include annotations for desktop and mobile behaviour. Make the layouts implementation-ready for Next.js with Tailwind CSS and shadcn/ui.
```

## Phase 2 — Cloud planning

**Tool:** Cloud platform to be selected

Plan the production environment and content/data integrations before implementation.

- Choose the hosting platform for Next.js and connect the `vitaintel.org` domain.
- Set up local, preview, and production environments.
- Decide the data source for `services`, `portfolio`, `blog`, and `testimonials`: local files for launch, a CMS, or a database.
- Plan the Contact form delivery and notification service; define spam protection and consent handling.
- Store environment values securely in `.env.local` locally and managed cloud environment settings in deployment.
- Configure image storage/delivery, analytics, error monitoring, backups, and access ownership.
- Define automated preview deployments, release checks, monitoring, and rollback steps.

**Deliverable:** approved cloud architecture, required service accounts, environment-variable list, and launch checklist.

**Prompt for Cloud planning**

```text
You are a cloud solutions architect. Create a production-ready, cost-conscious deployment plan for VitaIntel, a Next.js/React/TypeScript marketing website.

The website has Home, About, Services, Portfolio, Blog, Testimonials, and Contact pages. It needs fast global delivery, preview deployments, production deployment, domain and HTTPS configuration for vitainteI.org, SEO support, image optimisation, analytics, error monitoring, and a secure Contact form with spam protection and email notifications.

Recommend an architecture, starting with the simplest managed solution. Compare Vercel, AWS, and one suitable alternative using cost, operational effort, Next.js support, performance, security, and scalability. Then recommend one option.

Include:
1. Local, preview, staging (if needed), and production environments.
2. DNS, HTTPS, redirects, environment variables, secret management, and access roles.
3. Options for content: code-managed data versus CMS, including the recommendation for an MVP.
4. Contact-form delivery, anti-spam, analytics, monitoring, backups, and privacy considerations.
5. CI/CD flow, release checks, rollback procedure, and estimated recurring costs.

State assumptions clearly and finish with an implementation checklist.
```

## Phase 3 — Implementation

**Tool:** Next.js, React, TypeScript, Tailwind CSS, shadcn/ui

Build the approved design using the structure already defined in this document.

1. Initialise the Next.js app and shared configuration: Tailwind, TypeScript, shadcn/ui, fonts, global styles, and metadata.
2. Build `components/layout` and `components/common` first, including responsive navigation, footer, container, buttons, skeletons, and empty states.
3. Build the Home sections and reusable cards, then the About, Services, Portfolio, Blog, Testimonials, and Contact pages.
4. Create typed data models in `types/`, content in `data/`, and page/service connections in `services/`.
5. Add Framer Motion for subtle UI transitions; use GSAP only where a more advanced animation is clearly needed.
6. Implement responsive behaviour across every target screen size and verify keyboard accessibility.
7. Add contact-form validation, delivery, success/error feedback, and spam protection.
8. Add SEO essentials: metadata, Open Graph and Twitter cards, Schema.org data, `sitemap.ts`, `robots.ts`, and canonical URLs.
9. Optimise image formats, font loading, code splitting, SSR/SSG strategy, and Core Web Vitals.

**Deliverable:** complete preview deployment with all launch pages and integrations working.

**Prompt for implementation assistant**

```text
You are a senior Next.js engineer. Implement the VitaIntel marketing website from the approved Stitch design and the architecture plan.

Use Next.js App Router, React, TypeScript, Tailwind CSS, shadcn/ui, Lucide icons, and Framer Motion. Use GSAP only for an interaction that cannot be achieved cleanly with Framer Motion or CSS.

Create the following routes: /, /about, /services, /portfolio, /blog, /blog/[slug], /testimonials, and /contact. Follow the documented component structure for layout, sections, cards, forms, common components, data, types, services, hooks, lib, config, and public assets.

Requirements:
- Responsive mobile-first layouts through ultrawide screens.
- Semantic, keyboard-accessible UI with clear focus states and accessible contrast.
- Reusable typed components, clean code, and no duplicated page logic.
- Optimised images (WebP/AVIF where possible), fonts, loading states, error states, and empty states.
- SEO metadata, Open Graph, Twitter cards, Schema.org, sitemap, robots, canonical URLs, and page-specific titles/descriptions.
- Contact-form validation, loading/success/error feedback, spam protection, and the selected email integration.
- Performance goal: Lighthouse 90+; FCP below 2 seconds; LCP below 2.5 seconds.

Work in small, reviewable milestones. At each milestone, state the files created or changed, how to test the result, and any decision that needs approval. Do not create fictional company content; use clearly marked placeholder content when final copy is unavailable.
```

## Phase 4 — QA and production launch

- Test all pages, links, forms, states, navigation, and responsive breakpoints.
- Review accessibility, browser support, metadata, sitemap, analytics, and performance targets.
- Confirm Lighthouse score of 90+ and aim for FCP under 2 seconds and LCP under 2.5 seconds.
- Deploy the approved preview to production and complete post-launch checks.

**Deliverable:** live VitaIntel website and launch handover.

## Phase 5 — Improvement in Cursor

**Tool:** Cursor

Use Cursor after the first implementation is live to improve quality safely and iteratively.

- Compare the built pages with the approved Stitch designs and correct visual differences.
- Refactor repeated code into clear, reusable components and strengthen TypeScript types.
- Resolve accessibility, responsiveness, SEO, and performance findings.
- Add and maintain tests for priority paths such as navigation and the Contact form.
- Review analytics and visitor feedback, then release the highest-impact improvements through preview first.

**Deliverable:** an ongoing, prioritised improvement backlog and verified incremental releases.

**Prompt for Cursor**

```text
You are a meticulous senior frontend engineer conducting an improvement pass on the VitaIntel Next.js website. Review the codebase and compare it to the approved Stitch design and project requirements.

Prioritise findings in this order: broken functionality, accessibility, responsive layout, Core Web Vitals and performance, SEO, design consistency, TypeScript safety, maintainability, and code duplication.

For each finding, provide:
1. Priority (critical, high, medium, or low).
2. The affected file(s) and exact cause.
3. The smallest safe fix.
4. How the fix should be tested.

Then implement only the highest-value safe improvements in small commits. Preserve the established visual system and public behaviour. Do not replace working architecture without a clear measurable benefit. Verify the site after each change and report performance, accessibility, and SEO improvements separately.
```

## Decisions still needed

1. Which cloud provider should host the site (for example, Vercel, AWS, or another)?
2. Will blog, portfolio, services, and testimonials be managed in code initially, or through a CMS?
3. Which email address/service should receive Contact form submissions?
4. Do you have VitaIntel brand assets and final content, or should those be created during the Stitch design phase?
