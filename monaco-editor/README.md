# Versakit Vue Sandbox

This is a sandbox environment for Versakit Vue, built with `@vue/repl` and `monaco-editor`.

## Setup

1.  Ensure `@versakit/vue` is built:
    ```bash
    pnpm build --filter @versakit/vue
    ```
2.  Run the sandbox:
    ```bash
    pnpm dev
    ```

## Features

-   Real-time editing of Vue components.
-   Loads `@versakit/vue` from the local `packages/versakit-vue/dist` directory.
-   Uses Monaco Editor for code editing.

## Configuration

The sandbox is configured in `src/App.vue`.
The import map points `@versakit/vue` to `/versakit-vue-dist/esm/index.esm.js`, which is served by a custom Vite middleware in `vite.config.ts`.
