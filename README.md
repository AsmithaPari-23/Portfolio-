## Portfolio Website

A pixel-perfect, fully responsive portfolio website built with modern web technologies, featuring a dark cyberpunk theme with neon glows, glassmorphism, and smooth animations.

## Tech Stack
- **React + Vite** (Fast and modern frontend tooling)
- **Tailwind CSS** (Utility-first styling, custom theme configurations)
- **Framer Motion** (Smooth page transitions and component animations)
- **React Router DOM** (Client-side routing)
- **React Icons** (SVG icons)

## Project Structure
- `src/components`: Reusable UI components (`Sidebar`, `Layout`, `GlassCard`, `GlowButton`, `ParticleBackground`)
- `src/pages`: Individual page components matching the routes.
- `src/data`: Dummy data files for dynamic rendering (`projects.js`, `github.js`).
- `src/assets`: Image and PDF assets directory.
  - `/profile/profile.jpg` - Your profile image
  - `/github/github-activity.png` - GitHub contribution graph screenshot
  - `/projects/` - Screenshots for the project cards
  - `/resume/resume.pdf` - Your resume PDF file

## Setup Instructions

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Start Development Server:**
   ```bash
   npm run dev
   ```

3. **Replace Placeholders:**
   - Place your profile photo in `src/assets/profile/profile.jpg`
   - Place your GitHub contribution graph screenshot in `src/assets/github/github-activity.png`
   - Place your resume PDF in `src/assets/resume/resume.pdf`
   - Place project images in `src/assets/projects/` and update `src/data/projects.js` accordingly.

4. **Build for Production:**
   ```bash
   npm run build
   ```

## Design Notes
- **Neon Theme:** Implemented custom color configurations (`neon-purple`, `neon-blue`) in `tailwind.config.js`.
- **Glassmorphism:** The `.glass` utility class in `index.css` applies the backdrop-blur and borders.
- **Responsiveness:** Uses a fixed sidebar on Desktop, falling back to a hamburger menu and top bar on Mobile.
