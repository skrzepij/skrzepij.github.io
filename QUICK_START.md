# 🚀 Quick Start - Kontynuacja Pracy

**Projekt:** Portfolio Radek Skrzepij - Migracja Gatsby → Astro
**Branch:** develop
**Status:** Podstawowa funkcjonalność działa, wymaga poprawek

---

## ⚠️ Najpilniejsze do naprawienia

1. **Wyśrodkowanie w pionie zawartości slajdów**
   - Problem: Zawartość każdego slajdu jest wyciągnięta do góry, zamiast być wyśrodkowana
   - Lokalizacja: `src/components/SwiperContainer.astro`
   - W oryginalnym HTML (reference-html.html) zawartość była wyśrodkowana w pionie

2. **Inne drobne błędy** - do identyfikacji i naprawy

---

## 📦 Stack technologiczny

- **Framework:** Astro 5.15.3
- **Styling:** TailwindCSS 3.4.18
- **TypeScript:** 5.7.2 (strict mode)
- **Package Manager:** pnpm 9.15.0
- **Swiper:** 12.0.3 (z modułami Mousewheel i Keyboard)

---

## 🏗️ Struktura projektu

```
src/
├── components/
│   ├── sections/          # Hero, Services, Portfolio, About, Contact
│   ├── ui/                # Navigation, Footer
│   └── SwiperContainer.astro  # Swiper slider (client:load)
├── layouts/
│   └── BaseLayout.astro   # SEO + global HTML
├── pages/
│   └── index.astro        # Główna strona
├── config/
│   └── site.ts            # Site metadata
└── styles/
    └── global.css         # Tailwind + custom styles
```

---

## 🎯 Kluczowe pliki

- `CONTEXT_SUMMARY.md` - **Pełna dokumentacja kontekstu** (PRZECZYTAJ PRZED ROZPOCZĘCIEM)
- `reference-html.html` - Oryginalny HTML jako referencja
- `src/components/SwiperContainer.astro` - Swiper implementation (do naprawy wyśrodkowania)
- `src/styles/global.css` - Global styles + font imports
- `tailwind.config.mjs` - Tailwind config z custom colors

---

## 🔧 Komendy

```bash
# Development
pnpm dev

# Build
pnpm build

# Preview
pnpm preview

# Linting
pnpm lint
pnpm lint:fix

# Formatting
pnpm format
pnpm format:check

# Type checking
pnpm type-check
pnpm astro:check
```

---

## 📝 Ważne informacje

### Swiper Configuration:
- Moduły: `Mousewheel` i `Keyboard` z `swiper/modules`
- `client:load` directive na `.swiper-container`
- CSS: `margin-top: 64px` (navbar) + `height: calc(100dvh - 64px)`
- Problem: `.swiper-slide` ma `justify-content: center`, ale zawartość nadal u góry

### Fonty:
- Self-hosted: `@fontsource/poppins` i `@fontsource/roboto`
- Importowane w `src/styles/global.css`

### Colors (Tailwind):
- `accent-yellow`: #FACC15
- `dark-bg`: #0D1117
- `dark-card`: #161B22
- `dark-lines`: #30363D

---

## 📚 Dokumentacja

- **Pełny kontekst:** `CONTEXT_SUMMARY.md`
- **Struktura obrazów:** `IMAGES_STRUCTURE.md`
- **Plan migracji:** `MIGRATION_PLAN.md`
- **Astro Docs:** https://docs.astro.build

---

## ✅ Co jest gotowe

- ✅ Wszystkie komponenty przekonwertowane
- ✅ Swiper.js zintegrowany
- ✅ TailwindCSS lokalnie
- ✅ Fonty self-hosted
- ✅ TypeScript strict mode
- ✅ ESLint + Prettier
- ✅ GitHub Actions workflows

---

## ⏳ Co do zrobienia

- [ ] Naprawić wyśrodkowanie w pionie slajdów ⚠️
- [ ] Formularz kontaktowy (API Route)
- [ ] Google Analytics (opcjonalnie)
- [ ] PWA support (opcjonalnie)
- [ ] Rozbudowa strony

---

**Ostatnia aktualizacja:** 2025.11.XX

