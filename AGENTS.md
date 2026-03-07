# Versakit-Vue Agent Instructions

This document serves as the unified instruction set for AI programming assistants (Cursor, Copilot, Cline, etc.) working on the Versakit-Vue project.

## 1. Project Overview

**Versakit-Vue** is a modern UI component library for Vue 3, built with TypeScript, Vite, and Tailwind CSS. It follows a Monorepo structure managed by `pnpm` and `turbo`.

### Tech Stack

- **Framework**: Vue 3 (Composition API, `<script setup>`)
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v4, `tailwind-variants`
- **Monorepo**: Turbo Repo, pnpm workspaces
- **Documentation**: VitePress
- **Testing**: Vitest, Vue Test Utils
- **Playground**: Monaco Editor Sandbox

## 2. Directory Structure

```text
/
├── packages/
│   ├── versakit-vue/       # Core UI Library
│   │   ├── src/components/ # Component implementations
│   │   └── dist/           # Build output
│   └── versakit-shared/    # Shared utilities
├── docs/                   # VitePress Documentation
├── storybook/              # Component Storybook
├── monaco-editor/          # Online Sandbox (Monaco based)
├── play/                   # Local dev playground
└── .github/workflows/      # CI/CD pipelines
```

## 3. Critical Rules & Conventions

### 3.1 Package Management

- **MUST** use `pnpm` for all package operations.
- **NEVER** use `npm` or `yarn`.
- Run commands from the project root using `pnpm run <script>` or `turbo run <task>`.

### 3.2 Coding Standards

- **Vue Style**: Always use **Composition API** with `<script setup lang="ts">`.
- **TypeScript**: strict typing is required. Avoid `any` whenever possible.
- **Styling**:
  - Use **Tailwind CSS** utility classes.
  - Use `tailwind-variants` for component variants and slot styling.
  - Do not write raw CSS unless absolutely necessary (e.g., complex animations).
- **Dark Mode**:
  - Implemented via Tailwind's `darkMode: 'class'` strategy.
  - Components must support dark mode using `dark:` modifiers (e.g., `dark:bg-gray-800`).

### 3.3 Component Structure

Each component in `packages/versakit-vue/src/components/` generally follows this structure:

```text
MyComponent/
├── src/
│   ├── my-component.vue    # Main component file
│   ├── type.ts             # Props and Emits definitions
│   └── index.variants.ts   # Tailwind variants style definition
├── __tests__/
│   └── MyComponent.test.ts # Vitest tests
└── index.ts                # Export entry
```

## 4. Common Workflows

### Running Development Servers

- **Documentation**: `pnpm run docs:dev` (runs VitePress at http://localhost:5173)
- **Playground (Local)**: `pnpm run play:dev` (runs `play/` folder)
- **Sandbox (Monaco)**: `pnpm --filter monaco-editor-sandbox dev`
- **Storybook**: `pnpm run storybook`

### Building

- **Build Library**: `pnpm run ui:build` (builds `@versakit/vue`)
- **Build Docs**: `pnpm run docs:build`
- **Build All**: `pnpm run site:build`

### Testing

- **Run Tests**: `pnpm run test`
- **Test UI**: `pnpm run test:ui`

## 5. Tool Usage Guidelines (For Agents)

- **Search First**: When asked to find code, use `SearchCodebase` with high-level queries first. Only use `Glob` if looking for specific file patterns.
- **Context Awareness**: Before editing a file, always read its content to understand the current state and imports.
- **Verification**: After making changes, verify the fix.
  - For UI changes: Suggest checking the Playground or Storybook.
  - For Logic changes: Run related tests.
- **Monorepo Imports**: When working in `monaco-editor` or `play`, remember they depend on the local build of `@versakit/vue`. Ensure `pnpm run ui:build` has been run if changes aren't reflecting.

## 6. Specific Configuration Details

- **Tailwind Config**: Located in `packages/versakit-vue/tailwind.config.js` (if present) or configured via `@tailwindcss/vite` plugin in `vite.config.ts`.
- **Vite Config**: Each package (`versakit-vue`, `docs`, `monaco-editor`) has its own `vite.config.ts`. Be careful which one you are editing.
- **GitHub Actions**: Deployments are handled in `.github/workflows/deploy.yml`. The sandbox is deployed to `gh-pages` under `/playground/`.

---

_This file is the single source of truth for agent instructions. Do not create `.clinerules` or `.cursor/rules` manually; link them to this file if needed._
