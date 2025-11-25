# MeowTube — YouTube-style React Frontend

MeowTube is an elegant, lightweight YouTube-style frontend built with React and Vite. It demonstrates a clean component structure, Tailwind-powered styling, and integration with the YouTube Data API to fetch popular videos, play them with the embedded player, and show recommended content.

Whether you're studying modern frontend patterns, prototyping a video UX, or shipping a starting point for a video-app, MeowTube gives you a polished, extensible base.

**Highlights**

- Fast dev experience with `Vite` and React 19
- Minimal, composable components: `Navbar`, `Sidebar`, `Feed`, `PlayVideo`, `Recommended`
- Tailwind CSS utilities for rapid styling
- Integration with the YouTube Data API (requires `VITE_YOUTUBE_API_KEY`)

**Live Features**

- Browse most popular videos by category
- Responsive grid feed and detailed video player view
- Channel info, like/share/save actions, and comments (via YouTube API)
- Sidebar with subscriptions and a YouTube-like scrollbar

---

**Tech Stack**

- React 19
- Vite
- Tailwind CSS
- React Router DOM
- YouTube Data API (v3)

---

**Quickstart**

Prerequisites: Node.js (16+ recommended) and npm.

1. Install dependencies:

```powershell
npm install
```

2. Create a `.env` file in the project root with your YouTube API key:

```text
VITE_YOUTUBE_API_KEY=YOUR_API_KEY_HERE
```

3. Start the dev server:

```powershell
npm run dev
```

Open the URL printed by Vite (usually `http://localhost:5173`) and explore.

Notes:

- The app uses `import.meta.env.VITE_YOUTUBE_API_KEY` to fetch video, channel, and comment data. If you don't set a key the app will still run but API-driven content will fail.

---

**Available npm scripts**

- `npm run dev` — Start Vite development server
- `npm run build` — Produce a production build in `dist/`
- `npm run preview` — Preview the production build locally
- `npm run lint` — Run ESLint

---

**Project Structure (important files)**

- `src/App.jsx` — top-level routes and sidebar state
- `src/main.jsx` — app entry (React + Router)
- `src/pages/Home` — home layout that composes `Sidebar` and `Feed`
- `src/pages/Video` — video playback page composing `PlayVideo` and `Recommended`
- `src/components/Navbar` — top navigation UI
- `src/components/Sidebar` — left navigation and subscriptions (custom scrollbar styles)
- `src/components/Feed` — grid of video cards (fetches popular videos)
- `src/components/PlayVideo` — embeds YouTube player, fetches details, comments
- `src/components/Recommended` — side recommendations
- `src/constant/photos.js` — bundled image/icon imports
- `src/utils/ValueConverter.js` — helper to format view/subscriber counts

---

**Environment / API Key**

You need a Google Cloud project with the YouTube Data API enabled and an API key. Create one at https://console.cloud.google.com/apis/library/youtube.googleapis.com.

When populating `VITE_YOUTUBE_API_KEY`, keep in mind:

- Use API key restrictions for security (HTTP referrers or IPs)
- The key is used client-side, so rate limits and quota apply

---

**Troubleshooting**

- If the feed shows empty results, confirm your `VITE_YOUTUBE_API_KEY` is valid and not restricted incorrectly.
- If CORS or quota errors appear, check the browser console for the exact API response.

---

Enjoy exploring MeowTube — let me know which part you want polished next.
