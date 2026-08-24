import { tv } from 'tailwind-variants'

export const runhorselightStyle = tv({
  slots: {
    root: 'relative w-full overflow-hidden',
    viewport: 'h-full w-full overflow-hidden',
    track:
      'flex h-full w-max flex-nowrap items-center whitespace-nowrap will-change-transform',
    group: 'flex h-full shrink-0 items-center whitespace-nowrap',
    item: 'inline-flex h-full shrink-0 items-center justify-center',
    image: 'h-full max-h-full w-auto object-cover align-middle',
    card: 'inline-flex min-w-48 flex-col gap-1 shadow-sm',
    cardTitle: 'font-semibold leading-tight',
    cardDescription: 'text-sm leading-snug opacity-75',
    text: 'whitespace-nowrap leading-none',
  },
})
