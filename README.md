# Fitsum Portfolio (Redesign)

A clean, modern, and accessible portfolio for Fitsum — Data Scientist & ML Engineer.

## ✨ Features
- Semantic HTML with accessible navigation (skip link, focus styles).
- Responsive layout with Grid/Flex.
- Project cards + modal details (`<dialog>`).
- Contact form (Netlify-ready) + mailto fallback.
- SEO: meta tags, Open Graph/Twitter cards, JSON-LD, sitemap/robots.
- Lightweight (no heavy JS frameworks).

## 📦 Project Structure
```
fitsum_portfolio_redesign/
├─ index.html
├─ styles.css
├─ script.js
├─ assets/
│  ├─ favicon.svg
│  ├─ og-image.png
│  ├─ manifest.webmanifest
├─ robots.txt
├─ sitemap.xml
└─ README.md
```

## 🧭 Where to edit
- **index.html**
  - Update `<title>` and `<meta name="description">`.
  - Replace `https://YOUR_CANONICAL_URL/` with your live URL everywhere (canonical, OG/Twitter images, JSON-LD).
  - Hero/About content: tweak headline and bio.
  - Projects: edit titles, descriptions, and GitHub/Live links. Duplicate a `.project-card` to add more.
  - Contact form: change `your.email@example.com` to your email.
  - Social links in the footer.
- **styles.css**
  - Theme colors in `:root`.
  - Spacing and component styles.
- **assets/og-image.png**
  - Social preview image shown on LinkedIn/Twitter. Replace with your own if you like.

## 🌐 Deployment

### Option A: GitHub Pages
1. Create a **new repo** (e.g., `portfolio`).
2. Commit all files in this folder to the repo root.
3. Push to GitHub.
4. In the repo, go to **Settings → Pages**.
5. Source: **Deploy from a branch**, select `main` and `/ (root)`.
6. Wait for Pages to publish → copy the URL.
7. Replace `https://YOUR_CANONICAL_URL/` in `index.html` and `sitemap.xml` with this URL, commit & push again.

### Option B: Netlify
1. Drag & drop the folder onto app.netlify.com or connect your Git repo.
2. Netlify will auto-detect this as a static site. No build step needed.
3. For the contact form, Netlify Forms is already wired via `data-netlify="true"`.

### Option C: Vercel
1. Import the GitHub repo into vercel.com.
2. Framework preset: **Other** (static).
3. Output directory: root (no build step).

## ✉ Contact Form options
- **Netlify Forms**: Works out-of-the-box when deployed on Netlify. Submissions appear in Netlify dashboard.
- **Formspree**: Replace `<form ...>` with:
  ```html
  <form action="https://formspree.io/f/YOUR_ID" method="POST">
    ...
  </form>
  ```

## 🔎 SEO
- Update `sitemap.xml` and `robots.txt` with your final domain.
- Replace `og-image.png` with a branded image (1200×630).

## 📄 License
You can use and modify this template freely.
