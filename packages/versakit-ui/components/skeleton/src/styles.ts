import { tv } from 'tailwind-variants'

export const skeletonStyles = tv({
  slots: {
    root: 'vk-skeleton flex flex-col gap-2',
    item: 'bg-gray-200 dark:bg-gray-700 overflow-hidden relative',
  },
  variants: {
    animated: {
      true: {
        item: 'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent',
      },
      false: {},
    },
    variant: {
      text: {
        item: 'h-4 w-full rounded',
      },
      circular: {
        item: 'rounded-full h-12 w-12',
      },
      rectangular: {
        item: 'h-16 w-full rounded-md',
      },
      avatar: {
        item: 'rounded-full h-10 w-10',
      },
      button: {
        item: 'h-10 w-24 rounded-md',
      },
      card: {
        item: 'h-40 w-full rounded-lg',
      },
      list: {
        item: 'h-20 w-full rounded-md',
      },
      image: {
        item: 'h-32 w-full rounded-md',
      },
    },
  },
  defaultVariants: {
    animated: true,
    variant: 'text',
  },
})
