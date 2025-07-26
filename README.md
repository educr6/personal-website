# Eduardo Calderon - Personal Website

A modern, static personal website built with Next.js 15.4 and Tailwind CSS.

## Features

- ⚡ **Static Site Generation** - Optimized for performance with Next.js static export
- 🎨 **Modern Design** - Beautiful gradient background with responsive layout
- 📱 **Mobile Responsive** - Looks great on all devices
- 🚀 **Fast Loading** - Minimal bundle size and optimized assets
- 🔗 **Social Links** - Easy integration with Twitter/X, LinkedIn, and GitHub

## Tech Stack

- **Framework**: Next.js 15.4 (latest)
- **Styling**: Tailwind CSS
- **Icons**: React Icons
- **Language**: TypeScript
- **Build**: Static Export

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd personal-website
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

To build the static site:

```bash
npm run build
```

The static files will be generated in the `out/` directory, ready for deployment to any static hosting service.

## Customization

### Update Personal Information

Edit `src/app/page.tsx` to update:

- Your name
- Description
- Social media links

### Update Metadata

Edit `src/app/layout.tsx` to update:

- Page title
- Meta description
- Keywords

### Styling

The site uses Tailwind CSS for styling. You can customize colors, fonts, and layout by modifying the classes in `src/app/page.tsx`.

## Deployment

The static site can be deployed to:

- **Vercel**: Connect your GitHub repository
- **Netlify**: Drag and drop the `out/` folder
- **GitHub Pages**: Push the `out/` folder to a `gh-pages` branch
- **Any static hosting service**: Upload the contents of the `out/` folder

## Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout with metadata
│   └── page.tsx         # Main page component
out/                     # Static export output
```

## License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ by Eduardo Calderon
