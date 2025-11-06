# 📋 Podsumowanie Kontekstu - Migracja Gatsby → Astro

**Data:** 2025.11.XX
**Projekt:** Portfolio Radek Skrzepij - skrzepij.github.io
**Branch:** develop
**Status:** Migracja w toku - podstawowa funkcjonalność działa

---

## 🎯 Główne Ustalenia

### **1. Decyzja o migracji: Gatsby → Astro**

**Dlaczego Astro?**

- ✅ Portfolio to statyczna strona - Astro idealny (SSG by default)
- ✅ Zero JS domyślnie - szybsze ładowanie
- ✅ Mniejszy bundle size niż Next.js
- ✅ Prostszy stack niż Gatsby (bez GraphQL)
- ✅ Island Architecture - JS tylko gdzie potrzeba
- ✅ Szybszy build time

**Dlaczego NIE Next.js?**

- ❌ Next.js domyślnie SSR - overkill dla portfolio
- ❌ Większy bundle size
- ❌ Więcej konfiguracji

**Dlaczego NIE zostać przy Gatsby?**

- ⚠️ Przestarzałe zależności (Gatsby 5.11 → 5.15)
- ⚠️ Wolniejszy build
- ⚠️ GraphQL overhead dla prostego portfolio
- ⚠️ Nieukończona implementacja (brakuje sekcji)

---

### **2. Strategia migracji**

**Użyjemy gotowego HTML jako bazy:**

- ✅ Kompletniejszy niż obecny Gatsby
- ✅ Zawiera wszystkie sekcje (Hero, Services, Portfolio, About, Contact)
- ✅ Ma lepszy UX i design
- ✅ Oszczędza czas (nie przepisujemy prostszej wersji)

**NIE przepisujemy obecnego Gatsby** - startujemy od gotowego HTML

---

### **3. Obecny stan projektu**

**✅ Ukończone (Astro):**

- ✅ Migracja z Gatsby do Astro 5.15.3
- ✅ Wszystkie komponenty przekonwertowane (Hero, Services, Portfolio, About, Contact)
- ✅ Swiper.js zintegrowany z modułami Mousewheel i Keyboard
- ✅ TailwindCSS 3.4.18 skonfigurowany lokalnie (bez CDN)
- ✅ Fonty self-hosted (@fontsource/poppins, @fontsource/roboto)
- ✅ TypeScript strict mode
- ✅ ESLint + Prettier skonfigurowane
- ✅ pnpm 9.15.0 jako package manager
- ✅ Wszystkie zależności zaktualizowane do najnowszych wersji
- ✅ GitHub Actions workflows zaktualizowane dla Astro
- ✅ Struktura projektu oczyszczona (usunięte wszystkie pliki Gatsby)
- ✅ BaseLayout z SEO metadata
- ✅ Navigation i Footer komponenty
- ✅ Responsywny design (mobile scroll, desktop swiper)

**⚠️ Znane problemy do naprawienia:**

1. **Wyśrodkowanie w pionie zawartości slajdów** - zawartość każdego slajdu jest wyciągnięta do góry, zamiast być wyśrodkowana w pionie. Początkowe treści są przysłonięte przez menu główne.
2. **Swiper touchpad swipe** - działa, ale może wymagać dodatkowych optymalizacji
3. **Inne drobne błędy** - do identyfikacji i naprawy w kolejnych sesjach

**📋 Do zrobienia:**

- [ ] Naprawić wyśrodkowanie w pionie zawartości slajdów
- [ ] Zaimplementować formularz kontaktowy (API Route)
- [ ] Dodać Google Analytics (opcjonalnie)
- [ ] Dodać PWA support (opcjonalnie)
- [ ] Dodać optymalizację obrazów
- [ ] Dodać testy E2E (opcjonalnie)
- [ ] Rozbudowa strony (dodatkowe funkcjonalności)

---

## 📁 Struktura projektu (aktualna)

```
src/
├── components/
│   ├── sections/          # Sekcje strony
│   │   ├── Hero.astro
│   │   ├── Services.astro
│   │   ├── Portfolio.astro
│   │   ├── About.astro
│   │   └── Contact.astro
│   ├── ui/                # Komponenty UI
│   │   ├── Navigation.astro
│   │   └── Footer.astro
│   └── SwiperContainer.astro  # Swiper slider (client:load)
├── layouts/
│   └── BaseLayout.astro   # Layout z SEO
├── pages/
│   ├── index.astro        # Główna strona
│   └── api/               # (puste, do implementacji)
├── config/
│   └── site.ts            # Site metadata
├── styles/
│   └── global.css         # Global styles + Tailwind
├── images/                # Obrazy zoptymalizowane
│   ├── me.png
│   ├── he1.png
│   └── ...
└── types/
    └── index.ts           # TypeScript types
```

---

## 🛠️ Stack technologiczny

### **Dependencies (zainstalowane):**

- `astro@^5.15.3` - framework
- `@astrojs/tailwind@^6.0.2` - Tailwind integration
- `@astrojs/react@^4.4.1` - React integration (dla Swiper)
- `@astrojs/sitemap@^3.6.0` - Sitemap generation
- `swiper@^12.0.3` - slider library
- `react@^19.0.0` + `react-dom@^19.0.0` - React (wymagane przez @astrojs/react)
- `@fontsource/poppins@^5.2.7` - Fonty (self-hosted)
- `@fontsource/roboto@^5.2.8` - Fonty (self-hosted)

### **DevDependencies (zainstalowane):**

- `typescript@^5.7.2` - TypeScript strict mode
- `@typescript-eslint/*@^8.46.3` - ESLint dla TS
- `eslint@^9.39.1` - ESLint (flat config)
- `eslint-plugin-astro@^1.3.1` - ESLint dla Astro
- `prettier@^3.6.2` + `prettier-plugin-astro@^0.14.1` - Formatting
- `tailwindcss@^3.4.18` - TailwindCSS (3.4.18 - kompatybilne z @astrojs/tailwind)
- `postcss@^8.5.6` + `autoprefixer@^10.4.21` - PostCSS
- `@astrojs/check@^0.9.5` - Astro type checking

### **Opcjonalne (do zrobienia):**

- `@vite-pwa/astro` - PWA support (zamiast @astrojs/pwa)
- `@astrojs/partytown` - Dla Analytics (third-party scripts)

### **Formularz kontaktowy:**

- `nodemailer` - Jeśli używamy SMTP (Opcja A)
- `resend` - Jeśli używamy Resend (Opcja C)
- LUB GitHub Issues API (Opcja B - darmowe)

---

## 📧 Rozwiązanie formularza kontaktowego

**REKOMENDACJA: Astro API Route + SMTP lub GitHub Issues**

### **Opcja A: Astro API Route + Nodemailer**

```typescript
// src/pages/api/contact.ts
export const POST: APIRoute = async ({ request }) => {
  // Nodemailer + SMTP
};
```

- ✅ Zero zewnętrznych serwisów płatnych
- ✅ Działa jako serverless (Vercel/Netlify)
- ✅ Wymaga SMTP (Gmail, SendGrid, AWS SES)

### **Opcja B: GitHub Issues API**

```typescript
// Tworzy GitHub Issue z wiadomością
```

- ✅ 100% darmowe
- ✅ Zero infrastruktury
- ✅ Wiadomości w GitHub Issues

### **Opcja C: Resend**

- ✅ Proste API
- ✅ Darmowe tier (3000 emails/miesiąc)

**Decyzja:** Użyjemy Opcji A (SMTP) lub B (GitHub Issues) - bez zewnętrznych płatnych serwisów

---

## 🔧 Konfiguracja

### **astro.config.mjs:**

```javascript
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  integrations: [
    tailwind(),
    react(), // Tylko dla Swiper island
    sitemap(),
  ],
  output: 'static',
  site: 'https://skrzepij.github.io',
  base: '/',
  vite: {
    optimizeDeps: {
      include: ['swiper'],
    },
  },
});
```

### **tailwind.config.mjs:**

```javascript
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'accent-yellow': '#FACC15',
        'dark-bg': '#0D1117',
        'dark-card': '#161B22',
        'dark-lines': '#30363D',
        'primary-text': '#E6EDF3',
        'secondary-text': '#8B949E',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
};
```

### **src/config/site.ts:**

```typescript
export const siteConfig = {
  title: 'Radek Skrzepij - Frontend & Web Developer',
  description:
    'Frontend / Web developer, nastawiony na budowanie wydajnych i przyjaznych użytkownikowi aplikacji wykorzystując nowoczesne narzędzia programistyczne.',
  author: 'Radek Skrzepij',
  url: 'https://skrzepij.github.io',
  social: {
    twitter: 'https://twitter.com/Zyziu10',
    github: 'https://github.com/skrzepij',
    facebook: 'https://www.facebook.com/skrzepij',
  },
};
```

---

## ✅ Status migracji

### **Faza 1: Setup Astro** ✅ UKOŃCZONE

- ✅ Projekt Astro utworzony
- ✅ Wszystkie zależności zainstalowane (pnpm)
- ✅ Struktura folderów skonfigurowana
- ✅ Wszystkie pliki Gatsby usunięte

### **Faza 2: Konwersja HTML → Komponenty** ✅ UKOŃCZONE

- ✅ Wszystkie 5 sekcji przekonwertowane (Hero, Services, Portfolio, About, Contact)
- ✅ Navigation i Footer komponenty
- ✅ SwiperContainer z client:load
- ✅ TypeScript types dodane

### **Faza 3: Integracje** ⚠️ CZĘŚCIOWO

- ✅ SEO metadata (BaseLayout)
- ⏳ PWA (opcjonalnie, do zrobienia)
- ⏳ Google Analytics (opcjonalnie, do zrobienia)
- ⏳ API Route dla formularza (do zrobienia)

### **Faza 4: Assets** ✅ UKOŃCZONE

- ✅ Obrazy przeniesione do src/images/
- ✅ Fonty self-hosted (@fontsource)
- ✅ CV dostępne w public/

### **Faza 5: CI/CD** ✅ UKOŃCZONE

- ✅ GitHub Actions workflows zaktualizowane
- ✅ Build command: `astro build`
- ✅ pnpm i Node 24 skonfigurowane

### **Faza 6: Testy** ⚠️ DO WERYFIKACJI

- ✅ Linting i formatowanie działają
- ⏳ Lighthouse score > 90 (do sprawdzenia)
- ⚠️ Naprawić wyśrodkowanie w pionie slajdów

---

## ✅ Checklist przed wdrożeniem

- [x] Wszystkie komponenty przekonwertowane
- [x] TypeScript types dodane
- [x] Tailwind skonfigurowany lokalnie (bez CDN)
- [x] SEO metadata przeniesione
- [ ] PWA działa (opcjonalnie)
- [ ] Analytics działa (opcjonalnie)
- [ ] API Route dla formularza działa
- [x] Obrazy zoptymalizowane (w src/images/)
- [x] Fonty self-hosted
- [x] CV dostępne
- [x] CI/CD zaktualizowane
- [ ] Testy na mobile/desktop (do weryfikacji)
- [ ] Lighthouse score > 90 (do sprawdzenia)
- [ ] Wszystkie linki działają (do weryfikacji)
- [ ] **Naprawić wyśrodkowanie w pionie zawartości slajdów** ⚠️

---

## 🚀 Następne kroki (priorytet)

### **Najpilniejsze:**

1. **Naprawić wyśrodkowanie w pionie zawartości slajdów** ⚠️
   - Problem: Zawartość każdego slajdu jest wyciągnięta do góry, zamiast być wyśrodkowana w pionie
   - Lokalizacja: `src/components/SwiperContainer.astro`
   - Uwaga: W oryginalnym HTML zawartość była wyśrodkowana w pionie

2. **Swiper touchpad swipe** - weryfikacja i optymalizacja (jeśli potrzebne)

3. **Inne drobne błędy** - identyfikacja i naprawa

### **Kolejne kroki:**

4. **Integracja formularza kontaktowego** - Wybór między SMTP/GitHub Issues
5. **Google Analytics** (opcjonalnie) - zintegrować z Partytown
6. **PWA support** (opcjonalnie) - dodać @vite-pwa/astro
7. **Optymalizacja obrazów** - sprawdzić czy wszystkie obrazy są zoptymalizowane
8. **Testy E2E** (opcjonalnie) - Playwright
9. **Rozbudowa strony** - dodatkowe funkcjonalności

---

## 📝 Kluczowe decyzje techniczne

### **Swiper.js:**

- ✅ Zaimplementowany jako Astro component z `client:load` directive
- ✅ Zaimportowane moduły `Mousewheel` i `Keyboard` z `swiper/modules`
- ✅ Konfiguracja: `mousewheel: { enabled: true, forceToAxis: true }` i `keyboard: { enabled: true }`
- ✅ Responsywny: desktop = swiper, mobile = scroll
- ⚠️ Problem: Zawartość slajdów nie jest wyśrodkowana w pionie (do naprawienia)

### **Fonty:**

- Self-hosting zamiast Google Fonts
- Użyjemy `@fontsource/poppins` i `@fontsource/roboto`
- Powód: Lepsza wydajność, zero external requests

### **Formularz:**

- Astro API Route (serverless)
- Bez zewnętrznych płatnych serwisów
- Opcja A (SMTP) lub B (GitHub Issues)

### **SEO:**

- `@astrojs/sitemap` dla automatycznego sitemap
- Structured data (JSON-LD)
- Open Graph tags

---

## 🎯 Kluczowe zasady Astro do przestrzegania

1. **Zero JS by default** - większość komponentów statyczna
2. **Island Architecture** - JS tylko gdzie potrzeba (Swiper)
3. **Static output** - `output: 'static'` dla portfolio
4. **TypeScript strict** - lepsze type safety
5. **Self-hosted assets** - fonty, obrazy lokalnie

---

## 📊 Metryki sukcesu

- ✅ Lighthouse Performance > 90
- ✅ Lighthouse SEO > 95
- ✅ Build time < 30s
- ✅ Bundle size < 100KB (bez Swiper)
- ✅ Zero JS dla statycznych sekcji
- ✅ Wszystkie sekcje działają
- ✅ Formularz działa

---

## 🔗 Ważne linki

- **Astro Docs:** https://docs.astro.build
- **Astro Migration Guide:** https://docs.astro.build/guides/migrate-to-astro/from-gatsby/
- **GitHub Repo:** https://github.com/skrzepij/skrzepij.github.io
- **Staging:** https://skrzepij.github.io
- **Production:** http://skrzepij.pl

---

## 💡 Ważne notatki

- **Nie używamy zewnętrznych płatnych serwisów** dla formularza (koszty, ograniczenia)
- **Startujemy od gotowego HTML** - nie przepisujemy prostszej wersji Gatsby
- **Island Architecture** - tylko Swiper będzie client-side
- **Self-hosted wszystko** - fonty, obrazy, assets lokalnie
- **TypeScript strict** - lepsze type safety od początku

---

## 🆘 Jeśli coś nie działa

1. Sprawdź `MIGRATION_PLAN.md` - szczegółowy plan krok po kroku
2. Sprawdź `MIGRATION_REVIEW.md` - review i poprawki
3. Sprawdź oficjalną dokumentację Astro
4. Sprawdź GitHub Issues w repozytorium

---

## 📝 Kluczowe informacje techniczne

### **SwiperContainer.astro - ważne szczegóły:**

- Używa `client:load` directive na `.swiper-container` div
- Importuje moduły: `Mousewheel` i `Keyboard` z `swiper/modules`
- Konfiguracja Swiper:
  ```javascript
  mousewheel: {
    enabled: true,
    forceToAxis: true,
    sensitivity: 1,
    releaseOnEdges: false,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  ```
- CSS: `.swiper-container` ma `margin-top: 64px` (navbar height) i `height: calc(100dvh - 64px)`
- Problem z wyśrodkowaniem: `.swiper-slide` ma `justify-content: center`, ale zawartość nadal jest u góry

### **Struktura stylów:**

- `src/styles/global.css` - importuje Tailwind i custom styles
- Fonty: `@fontsource/poppins` i `@fontsource/roboto` importowane w `global.css`
- Custom colors zdefiniowane w `tailwind.config.mjs`

### **Pliki referencyjne:**

- `reference-html.html` - oryginalny HTML jako referencja dla designu i funkcjonalności
- `IMAGES_STRUCTURE.md` - dokumentacja struktury obrazów

### **Konfiguracja:**

- `astro.config.mjs` - Astro config z integracjami
- `tailwind.config.mjs` - Tailwind config z custom colors
- `tsconfig.json` - TypeScript strict mode
- `eslint.config.js` - ESLint flat config
- `.npmrc` - pnpm config (`shamefully-hoist=true`)

### **GitHub Actions:**

- `.github/workflows/staging.yml` - build i deploy na GitHub Pages
- `.github/workflows/build-and-test.yml` - build i testy
- Używa pnpm 9.15.0 i Node 24

---

**Ostatnia aktualizacja:** 2025.11.XX
**Status:** Podstawowa funkcjonalność działa, wymaga naprawy wyśrodkowania i dalszych ulepszeń
