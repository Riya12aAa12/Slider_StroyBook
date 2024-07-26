This project is a comprehensive system developed using React, Storybook, and TypeScript, among other technologies. The system includes various components like sliders and headers, and it showcases advanced functionality with customization options and interactive features.

Features
Slider Component: A versatile slider component with support for both continuous and discrete types. Includes options for single and range subtypes, with customizable handle sizes.
Technologies Used
React: For building user interfaces.
TypeScript: For type safety and improved development experience.
Storybook: For component development, documentation, and testing.
SCSS: For styling components.
Usage
Slider Component
The Slider component supports both continuous and discrete types. It has the following props:

type: Specifies the type of slider ('Continuous' or 'Discrete').
subtype: Defines the subtype ('Single' or 'Range').
steps: Number of steps for discrete sliders.
handleSize: Size of the slider handle ('Size_24' or 'Size_32').
onChange: Callback function for value changes.
-->npm install
-->npm run storybook

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json", "./tsconfig.app.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
