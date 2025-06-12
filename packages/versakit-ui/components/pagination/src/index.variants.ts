import { tv } from 'tailwind-variants'

export const pagination = tv({
  slots: {
    root: 'flex items-center gap-1 select-none',
    pageButton:
      'relative inline-flex items-center justify-center min-w-[32px] h-8 px-2 text-sm transition-colors focus:outline-none',
    prevButton:
      'relative inline-flex items-center justify-center min-w-[32px] h-8 px-2 text-sm transition-colors focus:outline-none',
    nextButton:
      'relative inline-flex items-center justify-center min-w-[32px] h-8 px-2 text-sm transition-colors focus:outline-none',
    ellipsis: 'inline-flex items-center justify-center min-w-[32px] h-8 px-2',
    jumperInput:
      'h-8 px-2 text-sm border rounded focus:outline-none focus:ring-1 w-12',
    sizeSelect:
      'h-8 px-2 text-sm border rounded focus:outline-none focus:ring-1',
    totalText: 'text-sm text-gray-500',
  },
  variants: {
    size: {
      sm: {
        pageButton: 'min-w-[28px] h-7 text-xs',
        prevButton: 'min-w-[28px] h-7 text-xs',
        nextButton: 'min-w-[28px] h-7 text-xs',
        ellipsis: 'min-w-[28px] h-7 text-xs',
        jumperInput: 'h-7 text-xs w-10',
        sizeSelect: 'h-7 text-xs',
        totalText: 'text-xs',
      },
      md: {
        pageButton: 'min-w-[32px] h-8 text-sm',
        prevButton: 'min-w-[32px] h-8 text-sm',
        nextButton: 'min-w-[32px] h-8 text-sm',
        ellipsis: 'min-w-[32px] h-8 text-sm',
        jumperInput: 'h-8 text-sm w-12',
        sizeSelect: 'h-8 text-sm',
        totalText: 'text-sm',
      },
      lg: {
        pageButton: 'min-w-[36px] h-9 text-base',
        prevButton: 'min-w-[36px] h-9 text-base',
        nextButton: 'min-w-[36px] h-9 text-base',
        ellipsis: 'min-w-[36px] h-9 text-base',
        jumperInput: 'h-9 text-base w-14',
        sizeSelect: 'h-9 text-base',
        totalText: 'text-base',
      },
    },
    variant: {
      filled: {
        pageButton:
          'text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 focus:ring-primary-500 focus:border-primary-500 data-[active=true]:bg-primary-500 data-[active=true]:text-white data-[active=true]:border-primary-500',
        prevButton:
          'text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 focus:ring-primary-500 focus:border-primary-500 disabled:opacity-50 disabled:cursor-not-allowed',
        nextButton:
          'text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 focus:ring-primary-500 focus:border-primary-500 disabled:opacity-50 disabled:cursor-not-allowed',
        jumperInput:
          'border-gray-300 focus:ring-primary-500 focus:border-primary-500',
        sizeSelect:
          'border-gray-300 focus:ring-primary-500 focus:border-primary-500',
      },
      outline: {
        pageButton:
          'text-gray-700 bg-transparent border border-gray-300 hover:bg-gray-50 focus:ring-primary-500 focus:border-primary-500 data-[active=true]:border-primary-500 data-[active=true]:text-primary-500',
        prevButton:
          'text-gray-700 bg-transparent border border-gray-300 hover:bg-gray-50 focus:ring-primary-500 focus:border-primary-500 disabled:opacity-50 disabled:cursor-not-allowed',
        nextButton:
          'text-gray-700 bg-transparent border border-gray-300 hover:bg-gray-50 focus:ring-primary-500 focus:border-primary-500 disabled:opacity-50 disabled:cursor-not-allowed',
        jumperInput:
          'border-gray-300 focus:ring-primary-500 focus:border-primary-500',
        sizeSelect:
          'border-gray-300 focus:ring-primary-500 focus:border-primary-500',
      },
      ghost: {
        pageButton:
          'text-gray-700 bg-transparent hover:bg-gray-100 focus:ring-primary-500 data-[active=true]:bg-primary-100 data-[active=true]:text-primary-700',
        prevButton:
          'text-gray-700 bg-transparent hover:bg-gray-100 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed',
        nextButton:
          'text-gray-700 bg-transparent hover:bg-gray-100 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed',
        jumperInput:
          'border-gray-300 focus:ring-primary-500 focus:border-primary-500',
        sizeSelect:
          'border-gray-300 focus:ring-primary-500 focus:border-primary-500',
      },
    },
    disabled: {
      true: {
        root: 'opacity-60 pointer-events-none',
        pageButton: 'cursor-not-allowed',
        prevButton: 'cursor-not-allowed',
        nextButton: 'cursor-not-allowed',
        jumperInput: 'cursor-not-allowed bg-gray-100',
        sizeSelect: 'cursor-not-allowed bg-gray-100',
      },
    },
    simple: {
      true: {
        root: 'justify-center',
      },
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'filled',
    disabled: false,
    simple: false,
  },
})
