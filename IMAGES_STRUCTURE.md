# Struktura obrazów w projekcie Astro

## 📁 Gdzie umieszczać obrazy?

### **`src/images/` - Obrazy do optymalizacji** ✅
**Użyj dla:** Obrazy które będą optymalizowane przez Astro

**Jak używać:**
```astro
---
import myImage from '../../images/my-image.jpg';
---

<img src={myImage.src} alt="Description" />
```

**Zalety:**
- ✅ Automatyczna optymalizacja przez Astro
- ✅ Lazy loading
- ✅ Responsive images
- ✅ WebP conversion
- ✅ Smaller bundle size

**Przykłady w projekcie:**
- `src/images/me.png` - zdjęcie profilowe
- `src/images/he1.png` - ilustracja w sekcji About
- `src/images/image_2d8597-a.jpg` - obrazy portfolio
- `src/images/image_2d8597-b.jpg` - obrazy portfolio

---

### **`public/` - Pliki statyczne** ✅
**Użyj dla:** Pliki które nie wymagają optymalizacji i są kopiowane bezpośrednio do outputu

**Jak używać:**
```astro
<img src="/favicon.svg" alt="Favicon" />
```

**Zalety:**
- ✅ Bezpośredni dostęp przez URL
- ✅ Nie wymaga importu
- ✅ Dobre dla faviconów, PDFs, etc.

**Przykłady w projekcie:**
- `public/favicon.svg` - favicon
- `public/favicon.ico` - favicon
- `public/CV.pdf` - pliki PDF
- `public/icons/` - ikony PWA

---


## 🎯 Best Practices dla Astro

1. **Obrazy używane w komponentach** → `src/images/` + import
2. **Pliki statyczne (favicony, PDFs)** → `public/`
3. **Obrazy optymalizowane** → `src/images/` + Astro Image component (opcjonalnie)
4. **Duże obrazy** → `src/images/` + lazy loading

---

## 📝 Aktualna struktura

```
src/images/          ✅ Obrazy do optymalizacji
├── me.png          ✅ Zdjęcie profilowe (Hero)
├── he1.png         ✅ Ilustracja (About)
├── image_2d8597-a.jpg  ✅ Portfolio
└── image_2d8597-b.jpg  ✅ Portfolio

public/              ✅ Pliki statyczne
├── favicon.svg     ✅ Favicon
├── CV.pdf          ✅ CV
└── icons/          ✅ PWA icons
```

