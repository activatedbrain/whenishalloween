# 🎃 When Is Halloween? — A Countdown Timer

A simple, responsive countdown timer to Halloween built with **Vite**, **TailwindCSS**, and **vanilla JavaScript**.

Live demo: [whenishalloween.com](https://www.whenishalloween.com)

---

## ✨ Features

- 📅 Real-time countdown to Halloween
- 📱 Mobile-first responsive design
- 🌙 TailwindCSS for easy styling
- ⚡ Fast build with Vite
- 🔒 Optional privacy-friendly analytics (Matomo)

---

## 🚀 Getting Started

### 1. Clone the repo

```shell
git clone https://github.com/yourusername/whenishalloween.git
cd whenishalloween
```

### 2. Install dependencies
```shell
npm install
```

### 3. Start development server
```shell
npm run dev
```

### 4. Build for production
```shell
npm run build
```

The output will be in the `dist/` folder.

## 📊 Optional: Enable Matomo Analytics

This project includes support for [Matomo](https://matomo.org/) — a privacy-friendly analytics platform. Analytics are disabled by default.

To enable:

1. Create a `.env` file based on `.env.example`
2. Set the following environment variables:
   ```
   VITE_ENABLE_MATOMO=true
   VITE_MATOMO_URL=https://your-matomo-instance.com/
   VITE_MATOMO_SITE_ID=1
   ```

## 🌐 Deploying
You can host the site on any static host (e.g., Netlify, Vercel, GitHub Pages). Just run:

```shell
npm run build
```

And deploy the dist/ folder.

## 👻 License
MIT — free to use, modify, and share. Attribution is appreciated but not required.

## ❤️ Credits
* Built with [Vite](https://vitejs.dev/) and [TailwindCSS](https://tailwindcss.com/)
* Background inspired by https://codepen.io/kotAndy/pen/oNJyrre
* Pumpkin icon courtesy of https://www.iconfinder.com/iconsets/free-color-halloween-icons