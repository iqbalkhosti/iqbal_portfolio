# Iqbal Khosti - Portfolio Website

A clean, minimal, and modern personal portfolio website built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui.

## Features

- 🎨 Clean, minimal design with muted color palette
- 🌓 Dark mode support (system preference detection)
- 📱 Fully responsive design
- ⚡ Fast and performant
- ♿ Accessible and SEO-friendly
- 📄 Single-page scroll layout with smooth navigation

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **shadcn/ui** components
- **next-themes** for dark mode
- **Lucide React** for icons

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Add your resume PDF:

Place your resume PDF file at `/public/resume.pdf`. The "Download Resume" button will automatically link to this file.

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

All content is managed through a single data file: `/lib/content.ts`. Edit this file to update:

- Hero section text
- About section
- Projects
- Experience
- Skills
- Contact information

## Deployment to Vercel

1. Push your code to a GitHub repository.

2. Import your repository in [Vercel](https://vercel.com):

   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will automatically detect Next.js and configure the build settings

3. Deploy:

   - Click "Deploy"
   - Your site will be live in minutes!

### Build Settings (Auto-detected by Vercel)

- **Framework Preset**: Next.js
- **Build Command**: `next build`
- **Output Directory**: `.next`
- **Install Command**: `npm install` (or `yarn install` / `pnpm install`)

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with ThemeProvider
│   ├── page.tsx            # Main page with all sections
│   └── globals.css         # Global styles and CSS variables
├── components/
│   ├── navbar.tsx          # Navigation bar
│   ├── theme-toggle.tsx    # Dark mode toggle
│   ├── sections/           # Section components
│   │   ├── hero.tsx
│   │   ├── about.tsx
│   │   ├── projects.tsx
│   │   ├── experience.tsx
│   │   ├── skills.tsx
│   │   ├── contact.tsx
│   │   └── footer.tsx
│   └── ui/                 # shadcn/ui components
│       ├── button.tsx
│       ├── card.tsx
│       ├── badge.tsx
│       └── separator.tsx
├── lib/
│   ├── content.ts          # All portfolio content (single source of truth)
│   └── utils.ts            # Utility functions
└── public/
    └── resume.pdf           # Your resume PDF (add this file)
```

## Notes

- Make sure to add your `resume.pdf` file to the `/public` directory before deploying.
- The site uses semantic HTML and follows accessibility best practices.
- All external links open in new tabs with proper security attributes.

## License

This project is private and personal.
