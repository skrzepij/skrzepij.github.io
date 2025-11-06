# Przegląd Planu Migracji - Astro Best Practices Review

## ✅ 1. Czy plan jest zgodny z dobrymi praktykami Astro?

### **TAK**, z kilkoma poprawkami:

#### ✅ **Dobre praktyki które są w planie:**

1. **Island Architecture** - Swiper jako client component (`client:load`) ✓
2. **Zero JS by default** - większość komponentów będzie statyczna ✓
3. **TypeScript strict mode** - lepsze type safety ✓
4. **Struktura folderów** - zgodna z konwencją Astro ✓
5. **Output: static** - dla portfolio SSG jest idealne ✓

#### ⚠️ **Poprawki do planu:**

1. **SwiperContainer - lepsze podejście:**

   ```astro
   // ❌ NIE: SwiperContainer.astro z client:load dla całego kontenera // ✅ TAK: Użyć React/Vue
   component dla Swiper (island), reszta jako Astro // src/components/SwiperContainer.tsx (React
   component) // lub // src/components/SwiperContainer.astro z client:load tylko dla inicjalizacji
   ```

2. **Struktura komponentów:**

   ```
   src/
   ├── components/
   │   ├── sections/          # ✅ Lepsze grupowanie
   │   │   ├── Hero.astro
   │   │   ├── Services.astro
   │   │   ├── Portfolio.astro
   │   │   ├── About.astro
   │   │   └── Contact.astro
   │   ├── ui/                # ✅ Komponenty UI
   │   │   ├── Navigation.astro
   │   │   └── Footer.astro
   │   └── SwiperContainer.tsx  # React island dla Swiper
   ```

3. **Astro Config - poprawki:**

   ```javascript
   export default defineConfig({
     integrations: [
       tailwind(),
       // ❌ NIE: react() jeśli nie potrzebujemy
       // ✅ TAK: Tylko jeśli Swiper będzie React component
     ],
     output: 'static',
     site: 'https://skrzepij.github.io',
     base: '/',
     // ✅ Dodać:
     vite: {
       optimizeDeps: {
         include: ['swiper'],
       },
     },
   });
   ```

4. **SEO - użyć @astrojs/sitemap:**

   ```bash
   npm install @astrojs/sitemap
   ```

5. **Fonty - self-hosting zamiast Google Fonts:**
   - Użyć `@fontsource/poppins` i `@fontsource/roboto`
   - Lepsza wydajność, zero external requests

---

## 📧 2. Obsługa formularza kontaktowego - ROZWIĄZANIA BEZ ZEWNĘTRZNYCH SERWISÓW

### **Astro API Routes (Server Endpoints) - NAJLEPSZE ROZWIĄZANIE**

Astro ma wbudowane **API Routes** (endpoints) które działają w trybie SSR lub jako serverless functions.

#### **Opcja A: Astro API Route + Nodemailer (Vercel/Netlify)**

```typescript
// src/pages/api/contact.ts
import type { APIRoute } from 'astro';
import nodemailer from 'nodemailer';

export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData();
  const name = data.get('name');
  const email = data.get('email');
  const subject = data.get('subject');
  const message = data.get('message');

  // Konfiguracja Nodemailer
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: process.env.CONTACT_EMAIL,
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <h2>Nowa wiadomość z portfolio</h2>
        <p><strong>Od:</strong> ${name} (${email})</p>
        <p><strong>Temat:</strong> ${subject}</p>
        <p><strong>Wiadomość:</strong></p>
        <p>${message}</p>
      `,
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: 'Failed to send' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
```

**Formularz w Astro:**

```astro
---
// src/components/sections/Contact.astro
---

<form id="contact-form" action="/api/contact" method="POST">
  <input type="text" name="name" required />
  <input type="email" name="email" required />
  <input type="text" name="subject" />
  <textarea name="message" required></textarea>
  <button type="submit">Wyślij</button>
</form>

<script>
  document.getElementById('contact-form')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const response = await fetch('/api/contact', {
      method: 'POST',
      body: formData,
    });

    const result = await response.json();
    // Handle response
  });
</script>
```

**Zalety:**

- ✅ Zero zewnętrznych zależności
- ✅ Działa jako serverless function (Vercel/Netlify)
- ✅ Pełna kontrola nad kodem
- ✅ Zero kosztów (jeśli używasz darmowych tierów)
- ✅ Szybkie (no external API calls)

**Wymagania:**

- SMTP server (Gmail, SendGrid, AWS SES, etc.)
- Environment variables dla credentials

---

#### **Opcja B: GitHub Actions + Issues (Darmowe, bez backendu!)**

Kreatywne rozwiązanie - użyj GitHub Issues jako backend:

```typescript
// src/pages/api/contact.ts
import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData();
  const name = data.get('name');
  const email = data.get('email');
  const subject = data.get('subject');
  const message = data.get('message');

  // GitHub API - tworzy issue
  const response = await fetch(
    `https://api.github.com/repos/${process.env.GITHUB_USER}/${process.env.GITHUB_REPO}/issues`,
    {
      method: 'POST',
      headers: {
        Authorization: `token ${process.env.GITHUB_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: `[Contact] ${subject}`,
        body: `**Od:** ${name} (${email})\n\n${message}`,
        labels: ['contact-form'],
      }),
    }
  );

  if (response.ok) {
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  return new Response(JSON.stringify({ success: false }), {
    status: 500,
    headers: { 'Content-Type': 'application/json' },
  });
};
```

**Zalety:**

- ✅ 100% darmowe
- ✅ Zero infrastruktury
- ✅ Wiadomości w GitHub Issues
- ✅ Możliwość odpowiedzi przez Issues

---

#### **Opcja C: Vercel Serverless + Resend (Najprostsze)**

Resend to tani email service ($0 za 3000 emails/miesiąc):

```typescript
// src/pages/api/contact.ts
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData();

  const { error } = await resend.emails.send({
    from: 'Portfolio <contact@yourdomain.com>',
    to: process.env.CONTACT_EMAIL,
    subject: `Portfolio: ${data.get('subject')}`,
    html: `...`,
  });

  // Handle response
};
```

**Zalety:**

- ✅ Proste API
- ✅ Darmowe tier (3000 emails/miesiąc)
- ✅ Działa z Vercel out-of-the-box

---

### **REKOMENDACJA:**

**Dla portfolio: Opcja A (Astro API Route + SMTP) lub Opcja B (GitHub Issues)**

- **Opcja A** jeśli masz własną domenę i chcesz profesjonalne emaile
- **Opcja B** jeśli chcesz 100% darmowe rozwiązanie bez infrastruktury

---

## 📝 3. Dokument podsumowujący dla nowego kontekstu

Przygotowałem osobny plik: `CONTEXT_SUMMARY.md`

---

## 🔧 Aktualizacje do planu migracji

### Dodatkowe kroki:

1. **API Route dla formularza:**

   ```bash
   # W Faza 3, dodać:
   - Utworzyć src/pages/api/contact.ts
   - Skonfigurować environment variables
   - Wybrać rozwiązanie (SMTP/GitHub/Resend)
   ```

2. **Struktura komponentów:**

   ```
   src/
   ├── components/
   │   ├── sections/     # Sekcje strony
   │   ├── ui/            # Komponenty UI
   │   └── SwiperContainer.tsx  # React island
   ```

3. **Fonty:**

   ```bash
   npm install @fontsource/poppins @fontsource/roboto
   ```

4. **Dodać do astro.config:**

   ```javascript
   import sitemap from '@astrojs/sitemap';

   integrations: [
     tailwind(),
     sitemap(),
   ],
   ```

---

## ✅ Finalne poprawki planu

Plan jest dobry, ale warto:

1. ✅ Użyć React component dla Swiper (lepsze island)
2. ✅ Dodać API Route dla formularza
3. ✅ Self-host fonts
4. ✅ Dodać sitemap
5. ✅ Poprawić strukturę folderów
