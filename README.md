# Aris Innovations - Creative Digital Agency Website

A modern, high-performance website for Aris Innovations, featuring stunning neon-themed animations, responsive design, and cutting-edge web technologies.

## 🚀 Live Demo

[Visit Aris Innovations](https://your-domain.com) *(Replace with your actual domain)*

## ✨ Features

- **Modern Design**: Sleek, neon-themed UI with animated backgrounds and particle effects
- **Responsive**: Fully responsive design optimized for all devices (mobile, tablet, desktop)
- **Performance Optimized**: Built with Next.js 14 for optimal loading speeds and SEO
- **Interactive Animations**: Smooth Framer Motion animations and micro-interactions
- **Accessibility**: WCAG compliant with proper semantic HTML and keyboard navigation
- **Custom Typography**: Anton and Poppins fonts for striking visual hierarchy
- **Component Library**: Built with shadcn/ui components and Tailwind CSS
- **Client Testimonials**: Interactive testimonial carousel
- **Portfolio Showcase**: Previous clients and work samples

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Package Manager**: [pnpm](https://pnpm.io/)
- **Fonts**: Google Fonts (Anton, Poppins)

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js**: Version 18.0 or higher
- **pnpm**: Version 8.0 or higher (recommended) or npm/yarn
- **Git**: For version control

### Installing Prerequisites

1. **Install Node.js**:
   - Download from [nodejs.org](https://nodejs.org/)
   - Verify installation: `node --version`

2. **Install pnpm** (recommended):
   ```bash
   npm install -g pnpm
   ```
   - Verify installation: `pnpm --version`

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Rajkishore08/ArisInnovations.git
cd ArisInnovations
```

### 2. Install Dependencies

Using pnpm (recommended):
```bash
pnpm install
```

Or using npm:
```bash
npm install
```

Or using yarn:
```bash
yarn install
```

### 3. Environment Setup

Create a `.env.local` file in the root directory (if needed for future integrations):

```env
# Add environment variables here when needed
# NEXT_PUBLIC_API_URL=your_api_url
# NEXT_PUBLIC_ANALYTICS_ID=your_analytics_id
```

### 4. Run the Development Server

```bash
pnpm dev
```

Or:
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

## 📁 Project Structure

```
├── app/                    # Next.js 14 App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout with font configuration
│   ├── page.tsx           # Homepage with hero section
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── portfolio/         # Portfolio page
│   ├── products/          # Products page
│   └── what-we-do/        # Services page
├── components/            # Reusable React components
│   ├── ui/               # shadcn/ui components
│   ├── layout/           # Layout components (navbar, footer)
│   └── theme-provider.tsx # Theme configuration
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── public/               # Static assets
├── styles/               # Additional CSS files
├── components.json       # shadcn/ui configuration
├── next.config.mjs       # Next.js configuration
├── package.json          # Dependencies and scripts
├── tailwind.config.ts    # Tailwind CSS configuration
└── tsconfig.json         # TypeScript configuration
```

## 🎨 Customization

### Colors and Themes

The website uses a neon color palette defined in `tailwind.config.ts`. Main colors include:
- **Cyan**: `#00FFFF` - Primary accent
- **Purple**: `#FF00FF` - Secondary accent
- **Pink**: `#FF69B4` - Tertiary accent

### Typography

Two main fonts are used:
- **Anton**: For bold headings and hero text
- **Poppins**: For body text and subtitles

### Animations

Framer Motion animations are configured in individual components. Key animation features:
- Hero text staggered animations
- Scroll-triggered reveals
- Interactive hover effects
- Background particle systems

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px
- **Large Desktop**: > 1280px

## 🚀 Build and Deployment

### Build for Production

```bash
pnpm build
```

### Start Production Server

```bash
pnpm start
```

### Export Static Site (if needed)

```bash
pnpm export
```

### Deployment Options

1. **Vercel** (recommended for Next.js):
   - Connect your GitHub repository
   - Auto-deploy on push to main branch

2. **Netlify**:
   - Build command: `pnpm build`
   - Publish directory: `out` (for static export) or `.next` (for SSR)

3. **Other Platforms**:
   - Any platform supporting Node.js applications

## 🔧 Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm type-check` - Run TypeScript type checking

## 📝 Adding New Pages

1. Create a new folder in the `app/` directory
2. Add a `page.tsx` file with your component
3. Optionally add `loading.tsx` for loading states
4. Update navigation in `components/layout/navbar.tsx`

Example:
```bash
mkdir app/blog
touch app/blog/page.tsx
```

## 🎯 Performance Optimization

The website includes several performance optimizations:

- **Image Optimization**: Next.js Image component with lazy loading
- **Font Optimization**: Google Fonts with `font-display: swap`
- **Code Splitting**: Automatic code splitting with Next.js
- **Compression**: Gzip compression in production
- **Caching**: Optimized caching strategies

## 🐛 Troubleshooting

### Common Issues

1. **Font Loading Issues**:
   - Ensure fonts are properly imported in `layout.tsx`
   - Check network requests in browser dev tools

2. **Animation Performance**:
   - Reduce animation complexity on mobile devices
   - Use `will-change` CSS property sparingly

3. **Build Errors**:
   - Clear `.next` folder: `rm -rf .next`
   - Reinstall dependencies: `rm -rf node_modules && pnpm install`

### Development Tips

- Use browser dev tools to debug animations
- Test on multiple devices and screen sizes
- Monitor Core Web Vitals for performance

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📧 Contact

**Aris Innovations**
- Website: [arisinnovations.com](https://arisinnovations.com)
- Email: contact@arisinnovations.com
- GitHub: [@Rajkishore08](https://github.com/Rajkishore08)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
- [Framer Motion](https://www.framer.com/motion/) for smooth animations
- [shadcn/ui](https://ui.shadcn.com/) for beautiful components
- [Lucide](https://lucide.dev/) for clean icons

---

**Made with ❤️ by Aris Innovations**
