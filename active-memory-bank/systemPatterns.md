# System Patterns: Home Services SE Directory

## Architecture
- Frontend: React 19.1.0, Vite 6.3.5, TailwindCSS 4.1.7
- State Management: Likely using React context or Redux for state management, based on common practices in the codebase.
- Component Structure: Reusable components for business cards, modals, and filters to ensure consistency.

## Key Technical Decisions
- Use of Lucide React for icons to maintain a consistent visual style.
- Implementation of dynamic data loading from a JavaScript file (serviceProvidersData.js) to manage business data.
- Responsive design using TailwindCSS for styling.
- Vite as the build tool for faster development and production builds.

## Design Patterns
- Component Reusability: Components like Header, Footer, and BusinessCard are reused across the application.
- State Management: Context API for global state where appropriate, to avoid prop drilling.
- Data Handling: Data stored in a separate file (serviceProvidersData.js) for easy updates and maintenance.
- Error Handling: Basic error handling in place for user actions like reporting issues.
