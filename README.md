# Skrzepij Portfolio Page

![Dev Build Status](https://github.com/skrzepij/skrzepij.github.io/actions/workflows/main.yml/badge.svg?branch=develop)

Portfolio website for Radomir Skrzepij - Frontend & Web Developer.

**Built with:** Astro 5 + TypeScript + TailwindCSS

Available online:
- https://skrzepij.github.io - staging (latest develop build)
- http://skrzepij.pl - production

## 🚀 Tech Stack

- **Framework:** [Astro](https://astro.build) 5.15.3
- **Language:** TypeScript 5.7.2
- **Styling:** TailwindCSS 3.4.18
- **Package Manager:** pnpm 9.15.0
- **Linting:** ESLint 9.39.1 (flat config)
- **Formatting:** Prettier 3.6.2

## 📦 Development

### Prerequisites

- Node.js 24+
- pnpm 9+

### Setup

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

### Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm lint` - Run ESLint
- `pnpm lint:fix` - Fix ESLint errors
- `pnpm format` - Format code with Prettier
- `pnpm format:check` - Check code formatting
- `pnpm type-check` - Type check with TypeScript
- `pnpm astro:check` - Astro type checking

## 🏗️ Project Structure

```
src/
├── components/
│   ├── sections/     # Page sections (Hero, Services, Portfolio, About, Contact)
│   ├── ui/           # UI components (Navigation, Footer)
│   └── SwiperContainer.astro  # Swiper slider component
├── layouts/
│   └── BaseLayout.astro       # Base layout with SEO
├── pages/
│   └── index.astro            # Main page
├── config/
│   └── site.ts                # Site configuration
├── styles/
│   └── global.css             # Global styles
└── types/
    └── index.ts               # TypeScript types
```

## 🔧 Configuration

- **ESLint:** `eslint.config.js` (flat config format)
- **Prettier:** `.prettierrc`
- **TypeScript:** `tsconfig.json`
- **Tailwind:** `tailwind.config.mjs`
- **Astro:** `astro.config.mjs`

## 📝 Notes

- Original HTML reference: `reference-html.html`
- Migration documentation: See `MIGRATION_PLAN.md` and `CONTEXT_SUMMARY.md`

## 🤝 Contribution

All source files should be placed on `develop` branch.

Every new feature should be created on new `feature` branch, which should be merged (via PR) to `develop` branch after finishing the work.

## 📄 License

MIT
