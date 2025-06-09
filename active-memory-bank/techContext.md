# Tech Context: Home Services SE Directory

## Overview
This section details the technologies, development setup, and tool usage patterns for the Home Services SE Directory project. The goal is to provide a clear understanding of the technical foundation to support ongoing development and maintenance.

## Technologies Used
- **Frontend**: 
  - React 19.1.0: Used for building the user interface with component-based architecture.
  - Vite 6.3.5: Build tool for faster development and production builds, leveraging ES modules.
  - TailwindCSS 4.1.7: CSS framework for responsive and utility-first styling.
  - Lucide React: Icon library for consistent visual elements.
  - Other dependencies: Based on the package.json file, including recharts, framer-motion, sonner, and others as specified.

- **Backend**: None; the application is frontend-only, with business data managed in a JavaScript file (serviceProvidersData.js).

- **Version Control**: Git, with a focus on the refactor/comprehensive-improvements branch for active development.

## Development Setup
- **Operating System**: Windows 11, as per the user's environment.
- **Shell**: Command prompt (cmd.exe), as per SYSTEM INFORMATION.
- **Dependencies**: Managed via pnpm, as indicated by the pnpm-lock.yaml file. Install dependencies using `pnpm install`.
- **Build and Run**: 
  - Development server: `npm run dev` or `pnpm run dev` (based on the shell used).
  - Build for production: `npm run build` or `pnpm run build`.
- **Editor/IDE**: Likely VSCode, given the visible files and environment details.

## Technical Constraints
- **Frontend-Only**: No server-side rendering or API integration; all logic is handled client-side.
- **Browser Compatibility**: Targeted for modern browsers (e.g., Chrome, Firefox, Safari), with support for ES6+ features. Since this is a React 19 project, ensure browser compatibility with the latest standards.
- **No TypeScript**: The project uses JavaScript (not TypeScript), so type checking is not enforced, which may increase the risk of runtime errors but simplifies setup.
- **Memory and Performance**: Given the dynamic data loading (e.g., from serviceProvidersData.js), ensure efficient state management to handle large datasets without excessive memory usage.

## Dependencies and Packages
- **Core Libraries**: React, ReactDOM, Vite, TailwindCSS, Lucide React.
- **Utilities and Tools**: 
  - react-hook-form: For form handling.
  - zod: For validation.
  - recharts: For data visualization if used in the app.
  - framer-motion: For animations and transitions.
  - sonner: For notifications.
- **Dev Dependencies**: ESLint for linting, configured with React and JSX plugins; no TypeScript support.
- **Potential Issues**: 
  - The use of pnpm may require specific configuration; ensure it's set up correctly.
  - Node modules changes (e.g., from git status) could indicate dependency conflicts or updates needed.

## Tool Usage Patterns
- **Development Workflow**: 
  - Use `pnpm run dev` to start the Vite development server.
  - Editing files directly in the src/ directory; changes are reflected in real-time due to Vite's hot-reloading.
  - Git for version control, with branches for features (e.g., refactor/comprehensive-improvements).
- **Testing**: Not specified in the codebase; assume minimal testing or rely on manual verification.
- **Deployment**: Not detailed; likely requires static hosting or a simple web server, given it's a frontend-only application.
- **Best Practices**: Follow React best practices, use functional components and hooks, ensure responsive design with TailwindCSS.

This document should be reviewed periodically to ensure it aligns with changes in the project's technology stack.
