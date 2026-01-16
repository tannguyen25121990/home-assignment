# Home Assignment

A Progressive Web Application built with React, TypeScript, and Tailwind CSS.

## Features

- **Login Page**: Email login with animations and validation
- **Forgotten Email Page**: Two-column layout with name recovery form
- **Internationalization (i18n)**: English and Japanese support
- **PWA Ready**: Installable as a native app
- **Responsive Design**: Works on mobile and desktop

## Tech Stack

| Technology                                    | Purpose                   |
| --------------------------------------------- | ------------------------- |
| [Vite](https://vitejs.dev/)                   | Build tool and dev server |
| [React 18](https://react.dev/)                | UI framework              |
| [TypeScript](https://www.typescriptlang.org/) | Type safety               |
| [Tailwind CSS](https://tailwindcss.com/)      | Styling                   |
| [Zustand](https://zustand-demo.pmnd.rs/)      | State management          |
| [React Router](https://reactrouter.com/)      | Routing                   |
| [i18next](https://www.i18next.com/)           | Internationalization      |
| [Vitest](https://vitest.dev/)                 | Testing                   |
| [Storybook](https://storybook.js.org/)        | Component documentation   |

## Getting Started

### Prerequisites

- Node.js >= 18
- Yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/tannguyen25121990/home-assignment.git
cd home-assignment

# Install dependencies
yarn install
```

### Development

```bash
# Start dev server
yarn dev

# Run tests
yarn test

# Run Storybook
yarn storybook

# Build for production
yarn build
```

## Project Structure

```
src/
├── components/        # Reusable UI components
│   ├── ui/           # Base components (Button, Card, etc.)
│   └── ...
├── pages/            # Route pages
├── store/            # Zustand stores
├── hooks/            # Custom React hooks
├── i18n/             # Internationalization
└── utils/            # Utility functions
```

## Design Decisions

### Why Vite?

Vite offers significantly faster development experience compared to Create React App, with instant HMR and optimized production builds.

### Why Zustand?

Zustand provides a simpler API than Redux while maintaining powerful state management capabilities. It has minimal boilerplate and is TypeScript-friendly.

### Why Tailwind CSS?

Tailwind enables rapid UI development with utility-first classes. The custom design tokens (colors, animations) are defined in `tailwind.config.js`.

## Production Concerns

This project is a prototype. The following items would need attention for production use:

| Area               | Current State               | Production Requirement                            |
| ------------------ | --------------------------- | ------------------------------------------------- |
| **Authentication** | Mock login (no real auth)   | Integrate with OAuth/JWT backend                  |
| **API Endpoints**  | HTTPbin (demo only)         | Real backend API with proper error handling       |
| **Translations**   | Machine-translated Japanese | Professional translation review                   |
| **Error Handling** | Basic try/catch             | Error boundaries, user-friendly messages, logging |
| **Security**       | No CSRF/XSS protection      | Implement security headers, input sanitization    |
| **Analytics**      | None                        | Add analytics/monitoring (e.g., Sentry, GA)       |
| **Accessibility**  | Basic a11y                  | Full WCAG 2.1 audit                               |
| **Performance**    | Not optimized               | Image optimization, code splitting, caching       |

## Deployment

The app is deployed on Vercel with CI/CD pipeline.

**Live Demo**: [Coming soon]

## License

MIT
