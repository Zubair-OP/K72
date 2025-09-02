# K72 — Responsive Multi-Page React Website

A polished 3-page web experience built with **React + Vite**. It focuses on clean UI, smooth animations, and solid React fundamentals (components, props, state, hooks). The site is fully responsive and designed to be production-ready.

## ✨ Features

- **Multi-page UX** (Home / About / Contact or similar)
- **Responsive layout** (mobile-first, fluid grids, flexible media)
- **Smooth animations** (e.g., CSS/JS powered; easily swappable with Framer Motion/GSAP)
- **Reusable components** (Navbar, Hero, Cards, Footer, etc.)
- **State & Hooks** (`useState`, `useEffect`), prop-driven components
- **Form handling** (basic validation + success/error states)
- **Accessible basics** (semantic HTML, alt text, focusable controls)
- **Clean project structure** with clear separation of concerns

> Tech: React, Vite, JavaScript (ES202x), CSS (utility classes/custom), HTML.

## 🔗 Live Demo

- Repo: https://github.com/Zubair-OP/K72

## 📦 Getting Started

### Prerequisites
- **Node.js** 18+ and **npm** (or pnpm/yarn)

### Install & Run
# clone
git clone https://github.com/Zubair-OP/K72.git
cd K72

# install
npm install

# dev
npm run dev

# production build
npm run build

# preview local prod build
npm run preview


#Structure

K72/
├─ public/
├─ src/
│  ├─ assets/           # images, icons
│  ├─ components/       # Navbar, Footer, Button, Card, etc.
│  ├─ pages/            # Home.jsx, About.jsx, Contact.jsx
│  ├─ hooks/            # custom hooks (if any)
│  ├─ styles/           # global.css / variables.css
│  ├─ App.jsx
│  └─ main.jsx
├─ index.html
├─ package.json
└─ vite.config.js


Linting configured (ESLint)
Mobile & desktop tested
Lightweight, fast dev server (Vite HMR)

🚀 Deployment:

Netlify / Vercel: Connect repo ➜ select framework “Vite/React” ➜ build command npm run build ➜ output dist.
GitHub Pages: Build locally ➜ push dist to a gh-pages branch (use vite-plugin-gh-pages or a simple action).
