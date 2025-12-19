# Development Documentation

## Personal Website - Development Guide

This is a React + TypeScript + Vite personal website hosted on GitHub Pages.

## 🚀 Quick Start

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn

### Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```
   This will start the Vite development server with hot module replacement (HMR) at `http://localhost:5173`

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Preview production build:**
   ```bash
   npm run preview
   ```

5. **Run linting:**
   ```bash
   npm run lint
   ```

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── AboutCard.tsx
│   ├── LogoButton.tsx
│   ├── NavBar.tsx
│   ├── ProfileCard.tsx
│   ├── Sidebar.tsx
│   └── SidebarItem.tsx
├── pages/              # Page components
│   ├── Courses.tsx
│   ├── Home.tsx
│   ├── MLStockPredict.tsx
│   ├── Projects.tsx
│   ├── Research.tsx
│   ├── Reversi.tsx
│   └── Sudoku.tsx
├── assets/             # Static assets
├── App.tsx             # Main app component with routing
├── routes.tsx          # Route definitions
└── main.tsx            # Entry point
```

## 🛠️ Tech Stack

- **Frontend Framework:** React 18
- **Language:** TypeScript
- **Build Tool:** Vite
- **UI Library:** Chakra UI
- **Routing:** React Router DOM
- **Icons:** React Icons
- **Animations:** Framer Motion
- **Styling:** Emotion (CSS-in-JS)

## 📱 Pages & Routes

The website includes the following pages:

- **Home** (`/`) - Main landing page
- **Projects** (`/projects`) - Projects overview
- **Sudoku** (`/projects/sudoku`) - Sudoku game
- **Reversi** (`/projects/reversi`) - Reversi game
- **ML Stock Predict** (`/projects/stocks`) - Machine learning stock prediction
- **Research** (`/research`) - Research work

## 🔄 Deployment

### Automatic Deployment via GitHub Actions

The website is automatically deployed to GitHub Pages whenever changes are pushed to the `main` branch.

**Deployment Process:**
1. Push changes to `main` branch
2. GitHub Actions workflow triggers automatically
3. Builds the project using `npm run build`
4. Deploys the `dist` folder to GitHub Pages

**Workflow Details:**
- **Trigger:** Push to `main` branch
- **Build:** Uses Node.js 16, installs dependencies, builds project
- **Deploy:** Uses `peaceiris/actions-gh-pages@v3` to deploy to GitHub Pages
- **URL:** https://mnath12.github.io/

### Manual Deployment

If you need to deploy manually:

1. Build the project:
   ```bash
   npm run build
   ```

2. The built files will be in the `dist` folder

3. Deploy the `dist` folder contents to your hosting service

## 🎨 Adding New Pages

To add a new page:

1. Create a new component in `src/pages/`
2. Add the route to `src/App.tsx`:
   ```tsx
   <Route path="/your-path" element={<YourComponent/>}/>
   ```
3. Update navigation in `src/components/NavBar.tsx` if needed

## 🎯 Development Tips

- **Hot Reload:** Vite provides instant hot module replacement during development
- **TypeScript:** All components are written in TypeScript for better type safety
- **Chakra UI:** Use Chakra UI components for consistent styling
- **Responsive Design:** The site is built with mobile-first responsive design
- **Performance:** Vite provides fast builds and optimized production bundles

## 🐛 Troubleshooting

### Common Issues

1. **Port already in use:**
   ```bash
   npm run dev -- --port 3001
   ```

2. **Build fails:**
   - Check TypeScript errors: `npm run lint`
   - Ensure all dependencies are installed: `npm install`

3. **Deployment issues:**
   - Check GitHub Actions logs in the repository's Actions tab
   - Ensure the `main` branch is up to date

## 📝 Scripts Reference

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## 🔗 Useful Links

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [Chakra UI Documentation](https://chakra-ui.com/)
- [TypeScript Documentation](https://www.typescriptlang.org/)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)

---

**Note:** This website is hosted on GitHub Pages and automatically deploys when changes are pushed to the main branch.
