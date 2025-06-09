# Research Stack: Home Services SE Directory

## Overview
This document outlines the research findings on the technologies used in the Home Services SE Directory project. It includes the latest versions, code snippets, and relevant documentation links.

## Technologies

### React
- **Version**: 19.1.0
- **Documentation**: [https://reactjs.org/](https://reactjs.org/)
- **Key Concepts**:
  - React is a JavaScript library for building user interfaces.
  - It uses a component-based architecture.
  - React Hooks allow you to use state and other React features in functional components.
- **Code Snippets**:
  ```javascript
  import React, { useState, useEffect } from 'react';

  function MyComponent() {
    const [count, setCount] = useState(0);

    useEffect(() => {
      document.title = `You clicked ${count} times`;
    }, [count]);

    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
      </div>
    );
  }
  ```
- **Important Considerations**:
  - Ensure Hooks are called at the top level of a function component or a custom Hook.
  - Treat hook arguments as immutable to ensure memoization works as intended.

### Vite
- **Version**: 6.3.5
- **Documentation**: [https://vitejs.dev/](https://vitejs.dev/)
- **Key Concepts**:
  - Vite is a build tool that aims to provide a faster and leaner development experience for modern web projects.
  - It uses native ES modules and Rollup for bundling.
- **Configuration**:
  - Vite configuration is defined in `vite.config.js` or `vite.config.ts`.
  - You can use `defineConfig` to get intellisense.
- **Code Snippets**:
  ```javascript
  import { defineConfig } from 'vite';

  export default defineConfig({
    // config options
  });
  ```
- **Important Considerations**:
  - Use `pnpm run dev` to start the Vite development server.
  - Editing files directly in the `src/` directory; changes are reflected in real-time due to Vite's hot-reloading.

### TailwindCSS
- **Version**: 4.1.7
- **Documentation**: [https://tailwindcss.com/](https://tailwindcss.com/)
- **Key Concepts**:
  - Tailwind CSS is a utility-first CSS framework.
  - It provides low-level utility classes that you can compose to build any design.
- **Configuration**:
  - Tailwind CSS configuration is defined in `tailwind.config.js`.
  - You can customize the theme, variants, and plugins.
- **Code Snippets**:
  ```javascript
  /** @type {import('tailwindcss').Config} */
  module.exports = {
    content: [
      // ...
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  };
  ```
- **Important Considerations**:
  - Use a consistent color scheme throughout the application.
  - Use clear and readable fonts.
  - Use Lucide React icons for visual consistency.
  - Use a responsive layout that adapts to different screen sizes.

### Lucide React
- **Documentation**: [https://lucideicons.com/](https://lucideicons.com/)
- **Key Concepts**:
  - Lucide is a collection of open-source icons.
  - `lucide-react` is the React package for using Lucide icons.
- **Code Snippets**:
  ```javascript
  import { Camera } from 'lucide-react';

  // Usage
  const App = () => {
    return <Camera color="red" size={48} />;
  };

  export default App;
  ```
- **Important Considerations**:
  - Use the `Icon` component to render icons.
  - Pass props like `color` and `size` to customize the icon's appearance.

## Additional Notes
- The project uses JavaScript (not TypeScript), so type checking is not enforced, which may increase the risk of runtime errors but simplifies setup.
- Given the dynamic data loading (e.g., from `serviceProvidersData.js`), ensure efficient state management to handle large datasets without excessive memory usage.
