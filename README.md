A modern Phaser 3 template: Phaser 3 + TypeScript + Vite + ESLint + GitHub Pages

---

**Table of contents**
- [Dependencies](#dependencies)
- [Quick start](#quick-start)
- [Project structure](#project-structure)
- [TypeScript](#typescript)
- [Vite](#vite)
- [ESLint](#eslint)
- [NPM Scripts](#npm-scripts)
- [GitHub Pages](#github-pages)

# Dependencies
- [Node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)

# Quick start

1. Get this template: Press over the "Use this template" button. This will allow you to create a new repo with this project's structure on your Github account. Then you can clone it to your local machine.

    Alternatively, you can clone this repo to your machine using the following command.

```sh
git clone https://github.com/pawap90/phaser3-ts-vite-eslint.git
```

2. Install dependencies: Run the following command from the project's root folder:

```sh
npm install
```

3. Start the local development server: 

```sh
npm run dev
```

Go to your browser and navigate to http://localhost:5173. You should see this beauty:

![Acho the pup bouncing around](https://i.imgur.com/bYVcrSr.gif)

# Project structure

```
├── /.github
│   └── /workflows
│           ├── build.yml
│           └── deploy.yml
├── /public
│       ├── acho.png
│       └── ground.png
├── /src
│   ├── /scenes
│   │      ├── game.scene.ts
│   │      └── preloader.scene.ts
│   ├── main.ts
│   └── vite-env.d.ts
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
├── tsconfig.json
└── vite.config.ts
```

> You can remove the assets within the `public` directory, but I recommend you first run the project once and make sure everything is installed and running properly.

# TypeScript
You can find TypeScript's configuration in `tsconfig.json`. To keep the codebase safe, you'll notice the flag `strict` is set to true. This [enables all strict type checking options](https://www.typescriptlang.org/tsconfig/#strict), like `noImplicitAny` and `alwaysStrict`. Feel free to add your preferred configurations.

# Vite
Vite provides the development server and the production build. 
Learn more about Vite [here](https://vitejs.dev/).

To build your project for development and enjoy live updates, execute:

```sh
npm run dev
```

This will start the server in http://localhost:5173.


To build your project for production:

```sh
npm run build
```

# ESLint
ESLint keeps your codebase clean and consistent while also helping you prevent errors. 

This project comes with a few custom rules already set up in the `eslint.config.js` file. Feel free to update them in your own project.

Check for errors or styling issues using the following command:

```sh
npm run lint
```

This will print the list of problems found. 

Some of the issues can be automatically fixed using:

```sh
npm run lint:fix
```

# NPM Scripts
A brief description of the scripts you'll find in the `package.json`:
- **dev**: Starts the local development server. Use it to test your project during development.
- **prebuild**: Compiles the project and runs the linter. This script will be executed before `build`, and its goal is to find any errors before the production build is created.
- **build**: Generates the production build in a `dist` folder located in the project's root.
- **lint**: Runs the linter and prints any issues found
- **lint:fix**: Runs the linter and executes automatic fixes. It'll also print any issues that couldn't be solved.

# GitHub Pages
This template includes a couple of GitHub Actions workflows:
- `build.yml`: It builds the project, runs the linter and the TypeScript compiler to check for errors. Triggered manually or when a PR is opened targeting the `main` branch.
- `deploy.yml`: This workflow is triggered when a push is made to the `main` branch. It deploys the production build to GitHub Pages.

You can see this template's latest deploy to GitHub Pages here: [pawap90.github.io/phaser3-ts-vite-eslint](https://pawap90.github.io/phaser3-ts-vite-eslint/).

To use the **GitHub Pages** in your own repo, follow these steps:

1. In `vite.config.ts`, update the `base` property with your repo's name:

```diff
export default defineConfig({
-    base: '/phaser3-ts-vite-eslint/'
+    base: '/your-repo-name/'
});
```

2. Enable GitHub Pages in your repo's settings. To find this option, go to your repo's main page, click on the "Settings" tab, and click on "Pages" in the left sidebar.

<!-- no toc -->
## Happy coding! 
