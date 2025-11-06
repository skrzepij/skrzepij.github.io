# Plan Migracji: Gatsby → Astro

## 🎯 Strategia: Bezpośrednia migracja z gotowego HTML

**Decyzja:** Użyjemy gotowego HTML jako bazy, ponieważ jest:

- ✅ Kompletniejszy niż obecny Gatsby
- ✅ Zawiera wszystkie potrzebne sekcje
- ✅ Ma lepszy UX i design
- ✅ Oszczędza czas (nie przepisujemy prostszej wersji)

---

## 📋 Krok po kroku

### Faza 1: Setup Astro (1-2h)

1. **Utworzyć nowy projekt Astro**

   ```bash
   npm create astro@latest . -- --template minimal --typescript strict --yes
   ```

   - Wybór: `minimal` template
   - TypeScript: `strict`
   - Integracje: Tailwind, React (opcjonalnie dla islands)

2. **Zainstalować zależności**

   ```bash
   npm install swiper @types/swiper
   npm install -D @astrojs/tailwind tailwindcss
   ```

3. **Struktura folderów**
   ```
   src/
   ├── components/
   │   ├── Layout.astro
   │   ├── Navigation.astro
   │   ├── Hero.astro
   │   ├── Services.astro
   │   ├── Portfolio.astro
   │   ├── About.astro
   │   ├── Contact.astro
   │   ├── Footer.astro
   │   └── SwiperContainer.astro (client component)
   ├── layouts/
   │   └── BaseLayout.astro
   ├── pages/
   │   └── index.astro
   ├── config/
   │   └── site.ts (metadata)
   └── styles/
       └── global.css
   ```

---

### Faza 2: Konwersja HTML → Astro Components (3-4h)

#### 2.1 BaseLayout.astro

- Przenieść `<head>` z SEO
- Dodać metadata z `gatsby-config.js`
- Przenieść global styles
- Dodać Google Analytics script

#### 2.2 Navigation.astro

- Przekonwertować nav na Astro component
- Dodać TypeScript types
- Przenieść mobile menu logic

#### 2.3 Hero.astro

- Przenieść sekcję hero
- Dodać zdjęcie profilowe (zamiast placeholdera)
- Zintegrować linki do CV

#### 2.4 Services.astro

- Przekonwertować sekcję usług
- Dodać data structure dla services

#### 2.5 Portfolio.astro

- Przekonwertować sekcję portfolio
- Dodać data structure dla projektów
- Przygotować pod przyszłe integracje

#### 2.6 About.astro

- Przenieść sekcję "O mnie"
- Dodać obraz `he1.png`

#### 2.7 Contact.astro

- Przekonwertować formularz
- Dodać TypeScript types dla form data
- Przygotować pod integrację z backend (np. Formspree, EmailJS)

#### 2.8 Footer.astro

- Przenieść footer
- Dodać dynamiczny year

#### 2.9 SwiperContainer.tsx (React Island Component)

- Utworzyć jako React component (`.tsx`) dla lepszego zarządzania stanem
- Użyć `client:load` directive w Astro
- Przenieść logikę Swiper.js
- Dodać TypeScript types
- Obsłużyć mobile/desktop switch
- **Lepsze podejście:** React island zamiast Astro component z client:load

---

### Faza 3: Integracje i konfiguracja (2-3h)

#### 3.1 SEO

- Utworzyć `src/config/site.ts` z metadata
- Zainstalować `@astrojs/sitemap` dla automatycznego sitemap
- Przenieść Open Graph tags
- Dodać structured data (JSON-LD)

#### 3.2 Tailwind CSS

- Skonfigurować `tailwind.config.mjs`
- Przenieść custom colors z HTML
- Dodać custom utilities (np. `accent-yellow`)
- Usunąć CDN link z HTML

#### 3.3 PWA

- Skonfigurować `@astrojs/pwa`
- Przenieść manifest z Gatsby
- Dodać service worker
- Skonfigurować offline support

#### 3.4 Google Analytics

- Zainstalować `@astrojs/partytown` (opcjonalnie)
- Dodać gtag script
- Przenieść tracking ID z Gatsby

#### 3.5 TypeScript

- Utworzyć types dla:
  - Site metadata
  - Form data
  - Portfolio items
  - Services
  - Navigation items

#### 3.6 API Route dla formularza

- Utworzyć `src/pages/api/contact.ts`
- Wybrać rozwiązanie:
  - **Opcja A:** Nodemailer + SMTP (serverless)
  - **Opcja B:** GitHub Issues API (100% darmowe)
  - **Opcja C:** Resend (darmowy tier 3000 emails/miesiąc)
- **REKOMENDACJA:** Opcja A lub B (bez zewnętrznych płatnych serwisów)
- Szczegóły w `MIGRATION_REVIEW.md` sekcja 2

---

### Faza 4: Assets i optymalizacja (1-2h)

#### 4.1 Obrazy

- Przenieść `me.png` do `public/`
- Dodać `he1.png` do `public/`
- Zoptymalizować obrazy (astro:assets)
- Dodać lazy loading

#### 4.2 Fonty

- **Self-hosting fonts** zamiast Google Fonts
- Zainstalować `@fontsource/poppins` i `@fontsource/roboto`
- Dodać font-display: swap
- **Powód:** Lepsza wydajność, zero external requests

#### 4.3 CV

- Przenieść `CV v4.pdf` do `public/`
- Zaktualizować linki

---

### Faza 5: CI/CD i deployment (1h)

#### 5.1 GitHub Actions

- Zaktualizować `.github/workflows/staging.yml`
- Zmienić build command na `astro build`
- Zaktualizować cache paths
- Zmienić Node version na 24 (już jest w workflow)

#### 5.2 Vercel (opcjonalnie)

- Zaktualizować `vercel.sh` jeśli używany
- Dodać `vercel.json` dla Astro

---

### Faza 6: Testy i finalizacja (1-2h)

#### 6.1 Linting

- Skonfigurować ESLint dla Astro
- Dodać Prettier
- Uruchomić `npm run lint`

#### 6.2 Testy (opcjonalnie)

- Dodać Vitest
- Napisać podstawowe testy dla komponentów

#### 6.3 Sprawdzenie

- ✅ Wszystkie sekcje działają
- ✅ Swiper działa na desktop
- ✅ Scroll działa na mobile
- ✅ Formularz działa (demo)
- ✅ SEO tags są poprawne
- ✅ PWA działa
- ✅ Analytics działa
- ✅ Responsywność OK

---

## 🔧 Szczegóły techniczne

### Astro Config (`astro.config.mjs`)

```javascript
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  integrations: [
    tailwind(),
    react(), // dla Swiper (React island)
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

### Tailwind Config (`tailwind.config.mjs`)

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

### Site Config (`src/config/site.ts`)

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

## 📦 Zależności

### Dependencies

- `astro` - framework
- `@astrojs/tailwind` - Tailwind integration
- `swiper` - slider library
- `@types/swiper` - TypeScript types

### DevDependencies

- `typescript` - TypeScript
- `@typescript-eslint/*` - ESLint dla TS
- `eslint-plugin-astro` - ESLint dla Astro
- `prettier` - code formatting
- `prettier-plugin-astro` - Astro formatting

### Opcjonalne

- `@astrojs/react` - **DLA Swiper** (React island)
- `@astrojs/pwa` - PWA support
- `@astrojs/sitemap` - Sitemap generation
- `@astrojs/partytown` - dla Analytics (third-party scripts)

### Formularz kontaktowy (wybrać jedną opcję)

- `nodemailer` - Opcja A (SMTP)
- `resend` - Opcja C (alternatywa)
- LUB użyć GitHub Issues API - Opcja B (bez zależności)

---

## ⚠️ Potencjalne problemy i rozwiązania

### Problem 1: Swiper.js w Astro

**Rozwiązanie:** Utworzyć jako client component z `client:load`

```astro
---
// SwiperContainer.astro
---

<div class="swiper-container" client:load>
  <!-- Swiper content -->
</div>
<script>
  import Swiper from 'swiper';
  // Initialize Swiper
</script>
```

### Problem 2: Formularz kontaktowy

**Rozwiązanie:**

- Na początku: demo (jak w HTML)
- Później: Astro API Route + SMTP/Nodemailer (Opcja A) lub GitHub Issues API (Opcja B)
- **BEZ zewnętrznych płatnych serwisów** - używamy Astro endpoints
- Szczegóły w `MIGRATION_REVIEW.md` sekcja 2

### Problem 3: Mobile/Desktop switch

**Rozwiązanie:** Użyć CSS media queries + JavaScript dla logiki Swiper

### Problem 4: Animacje fade-in

**Rozwiązanie:** Użyć Intersection Observer API (jak w HTML) lub Astro ViewTransitions

---

## ✅ Checklist przed wdrożeniem

- [ ] Wszystkie komponenty przekonwertowane
- [ ] TypeScript types dodane
- [ ] Tailwind skonfigurowany lokalnie
- [ ] SEO metadata przeniesione
- [ ] PWA działa
- [ ] Analytics działa
- [ ] Obrazy zoptymalizowane
- [ ] CV dostępne
- [ ] CI/CD zaktualizowane
- [ ] Testy na mobile/desktop
- [ ] Lighthouse score > 90
- [ ] Wszystkie linki działają

---

## 🚀 Następne kroki po migracji

1. **Integracja formularza** - Astro API Route + SMTP/GitHub Issues (bez zewnętrznych płatnych serwisów)
2. **Dodanie bloga** (opcjonalnie) - Astro Content Collections
3. **Dodanie CMS** (opcjonalnie) - Contentful/Strapi
4. **Analytics dashboard** - własne API
5. **Dodanie testów E2E** - Playwright

---

## 📚 Dodatkowe dokumenty

- **MIGRATION_REVIEW.md** - Przegląd planu i odpowiedzi na pytania techniczne
- **CONTEXT_SUMMARY.md** - Podsumowanie kontekstu dla nowego sesji

---

## 📊 Przewidywany czas: 10-15 godzin

- Setup: 1-2h
- Konwersja komponentów: 3-4h
- Integracje: 2-3h
- Assets: 1-2h
- CI/CD: 1h
- Testy: 1-2h

---

## 💡 Zalety migracji

✅ **Zero JS domyślnie** - szybsze ładowanie
✅ **Prostszy stack** - mniej zależności
✅ **Lepszy DX** - łatwiejsze utrzymanie
✅ **Szybszy build** - mniej czasu na deployment
✅ **Lepsze SEO** - czysty HTML
✅ **Island Architecture** - JS tylko gdzie potrzeba

---

## 🎯 Gotowość do rozpoczęcia?

Mam przygotować szczegółowy plan dla każdej fazy osobno, czy zacząć od razu od implementacji?
