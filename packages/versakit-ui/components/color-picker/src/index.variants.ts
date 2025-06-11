import { tv } from 'tailwind-variants'

export const colorPicker = tv({
  slots: {
    root: 'inline-block',
    trigger:
      'w-10 h-10 rounded-md border border-gray-300 cursor-pointer overflow-hidden shadow-sm',
    panel: 'bg-white border border-gray-200 rounded-md shadow-md p-4 w-[280px]',
    saturation: 'relative w-full h-40 rounded-md mb-4 cursor-pointer',
    saturationThumb:
      'absolute w-4 h-4 rounded-full border-2 border-white shadow-md translate-x-[-50%] translate-y-[-50%] pointer-events-none',
    hue: 'relative h-8 rounded-md mb-4 cursor-pointer',
    hueThumb:
      'absolute w-4 h-8 rounded-md border-2 border-white shadow-md translate-x-[-50%] pointer-events-none',
    alpha:
      'relative h-8 rounded-md mb-4 cursor-pointer bg-[linear-gradient(45deg,#ccc_25%,transparent_25%,transparent_75%,#ccc_75%,#ccc),linear-gradient(45deg,#ccc_25%,transparent_25%,transparent_75%,#ccc_75%,#ccc)] bg-[length:8px_8px] bg-[position:0_0,4px_4px]',
    alphaOverlay: 'absolute inset-0 rounded-md',
    alphaThumb:
      'absolute w-4 h-8 rounded-md border-2 border-white shadow-md translate-x-[-50%] pointer-events-none',
    presets: 'flex flex-wrap gap-2 mb-3',
    preset: 'w-6 h-6 rounded-md border border-gray-300 cursor-pointer',
    input: 'w-full border border-gray-300 rounded px-2 py-1 text-sm',
    tabs: 'flex border-b border-gray-200 mb-3',
    tab: 'px-3 py-2 text-sm cursor-pointer',
    activeTab: 'border-b-2 border-primary-500 text-primary-700',
    footer: 'border-t border-gray-200 mt-3 pt-3 flex justify-end',
  },
  variants: {
    disabled: {
      true: {
        root: 'opacity-60 cursor-not-allowed',
        trigger: 'cursor-not-allowed',
        saturation: 'cursor-not-allowed',
        hue: 'cursor-not-allowed',
        alpha: 'cursor-not-allowed',
        preset: 'cursor-not-allowed',
      },
    },
  },
  defaultVariants: {
    disabled: false,
  },
})
