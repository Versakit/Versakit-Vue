import { tv } from 'tailwind-variants'

export const dialogOverlay = tv({
  base: 'fixed inset-0 bg-black/50 backdrop-blur-sm z-40',
})

export const dialogContent = tv({
  base: `
    fixed left-1/2 top-1/2 z-50
    -translate-x-1/2 -translate-y-1/2
    bg-white rounded-lg shadow-lg
    w-full max-w-lg p-6
    transition-all
  `,
})
