# Repository Instructions

## Project Overview

This is a Create React App site for `ryancrews.com`, built with React 18, TypeScript, React Router v6, and SCSS.

Use npm for package management. Do not switch package managers or introduce a new lockfile.

## Local Development

Install dependencies and start the app with:

```sh
npm install
npm start
```

The local app runs at `http://localhost:3000`.

## Verification

Use these commands for future tasks:

```sh
npm test -- --watchAll=false
npm run build
```

Notes:

- `npm test` alone starts Jest in watch mode; prefer the non-interactive command above.
- There is no dedicated lint script.
- There is no dedicated typecheck script yet; add one later rather than relying on ad hoc commands.
- `npm run build` is the current full verification command because Create React App performs TypeScript and ESLint checks during production builds.
- Never run `npm run deploy` unless explicitly requested. It builds and syncs `build/` to the production S3 bucket.
- Never run `npm run eject` unless explicitly requested. It is a one-way operation.

## Important Directories

- `src/App.tsx`: root app composition, theme provider, and router provider.
- `src/routes/routes.tsx`: route constants and `createBrowserRouter` configuration.
- `src/screens`: page-level screens.
- `src/screens/food/content`: individual recipe pages.
- `src/screens/code/posts/content`: individual code posts.
- `src/shared-components`: reusable layout, header/footer, buttons, and tiles.
- `src/themes`: theme context/provider and SCSS theme maps.
- `src/sass-mixins`: shared SCSS variables and mixins.
- `public`: static HTML, icons, manifests, robots, and browser metadata.

## Architecture And Patterns

Routing is centralized in `src/routes/routes.tsx`. Keep public URLs stable unless asked to change them.

Recipe pages usually:

- Live in `src/screens/food/content`.
- Use `RecipeWrapper`, `Ingredients`, and `Preparation`.
- Require manual updates to route constants, `src/screens/index.ts`, and `FoodHome.tsx`.
- Use existing `NEW_RECIPE` comments as insertion markers.

Code posts usually:

- Live in `src/screens/code/posts/content`.
- Require manual updates to route constants, `src/screens/index.ts`, and `PostsHome.tsx`.
- Use existing `NEW_POST` comments as insertion markers.

Styling is SCSS. Component styles usually sit beside the component and are imported directly. Theme-aware styles use `@include themify($themes)` and `themed("token")`.

## Coding Conventions

- Prefer simple function components and existing shared components.
- Preserve the existing TypeScript and SCSS style.
- Keep changes small, focused, and reviewable.
- Avoid adding production dependencies unless necessary; explain why first.
- Do not reformat unrelated files.
- Do not commit generated `build/` output.

## Risky Areas

Ask before changing:

- Deployment behavior, S3 bucket names, or AWS-related commands.
- Public route URLs.
- Files under `public/` that affect app metadata, icons, manifests, or robots.
- Theme provider/context or global theme tokens.
- Package versions, `react-scripts`, TypeScript, React, or lockfile structure.
- Build tooling or CRA eject behavior.
- Existing recipe/post content unrelated to the task.

## Definition Of Done

A task is done when:

- The requested behavior or content change is implemented.
- Relevant routes, exports, and index/list pages are updated.
- The app follows existing organization and style.
- `npm run build` passes.
- Relevant tests pass with `npm test -- --watchAll=false`.
- Any skipped verification, risks, or follow-ups are called out clearly.
