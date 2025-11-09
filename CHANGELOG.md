# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2025-11-06

### Changed

- **BREAKING:** Migrated entire project from legacy Gatsby 5 stack to Astro 5 framework as the SSG
- Updated to TypeScript 5.7.2 for better type safety
- Migrated styling from custom CSS to TailwindCSS 3.4.18
- Replaced legacy JavaScript with TypeScript
- Updated package manager to pnpm 9.15.0
- Modernized build and development tooling

### Added

- Astro 5.15.3 as the main framework
- TailwindCSS 3.4.18 for utility-first styling
- ESLint 9.39.1 with flat config format for code linting
- Prettier 3.6.2 for code formatting
- TypeScript support with strict type checking
- Component-based architecture with `.astro` components
- Swiper 12.0.3 for carousel functionality
- Automated CI/CD workflows with GitHub Actions

### Removed

- Legacy HTML/CSS/JS implementation
- Gatsby framework and dependencies
- jQuery dependencies

## [0.2.0] - Earlier

### Added

- Initial portfolio website implementation
- Basic HTML/CSS/JS structure
- Portfolio sections (Hero, Services, Portfolio, About, Contact)
- Responsive design
- Basic animations and interactions

---

## Migration Notes (0.2.0 → 1.0.0)

The jump from version 0.2.0 to 1.0.0 represents a complete rewrite of the portfolio website. This is a breaking change that migrates from a legacy Gastro 5 approach to a modern Astro-based framework with TypeScript and TailwindCSS.

**Why a major version bump?**
- Complete framework change (Gatsby → Astro)
- Breaking changes in project structure
- New build process and tooling
- Different development workflow
- Modernized dependencies and technology stack

This migration improves:
- Development experience with TypeScript and modern tooling
- Build performance with Astro's optimized static site generation
- Code maintainability with component-based architecture
- Developer productivity with automated linting and formatting
- Site performance with optimized output
