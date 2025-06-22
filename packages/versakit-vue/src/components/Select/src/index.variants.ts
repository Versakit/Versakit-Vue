import { tv } from 'tailwind-variants'

export const selectStyles = tv({
  slots: {
    base: 'group inline-flex flex-col w-full outline-none border-none',
    label: 'block text-sm font-medium text-foreground pb-1.5',
    mainWrapper: 'w-full flex flex-col',
    trigger: [
      'flex w-full appearance-none items-center justify-between',
      'rounded-md border border-input bg-background px-3 py-2',
      'text-sm ring-offset-background placeholder:text-muted-foreground',
      'focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
      'disabled:cursor-not-allowed disabled:opacity-50',
      'transition-colors data-[invalid=true]:border-danger data-[invalid=true]:ring-danger',
    ],
    innerWrapper: 'flex h-full items-center gap-1.5',
    selectorIcon: [
      'text-large text-default-400',
      'transition-transform duration-150',
      'data-[open=true]:rotate-180',
    ],
    value: 'w-full outline-none bg-transparent',
    listboxWrapper: 'w-full',
    listbox: [
      'max-h-64 w-full overflow-auto rounded-md bg-popover p-1',
      'text-popover-foreground shadow-md',
      'data-[empty=true]:py-6 data-[empty=true]:text-center data-[empty=true]:text-muted-foreground',
    ],
    popoverContent: [
      'w-full p-1 overflow-hidden',
      'border border-border shadow-sm rounded-md bg-popover',
    ],
    helperWrapper: 'flex flex-col gap-1.5 pt-1',
    description: 'text-xs text-default-400',
    errorMessage: 'text-xs text-danger',
    spinner: 'text-default-500',
  },
  variants: {
    size: {
      sm: {
        trigger: 'h-8 text-xs',
        label: 'text-xs',
      },
      md: {
        trigger: 'h-10',
      },
      lg: {
        trigger: 'h-12 text-medium',
        label: 'text-medium',
      },
    },
    radius: {
      none: {
        trigger: 'rounded-none',
        popoverContent: 'rounded-none',
      },
      sm: {
        trigger: 'rounded-sm',
        popoverContent: 'rounded-sm',
      },
      md: {
        trigger: 'rounded-md',
        popoverContent: 'rounded-md',
      },
      lg: {
        trigger: 'rounded-lg',
        popoverContent: 'rounded-lg',
      },
      full: {
        trigger: 'rounded-full',
        popoverContent: 'rounded-md',
      },
    },
    variant: {
      flat: {
        trigger: 'border-transparent bg-default-100 hover:bg-default-200',
      },
      bordered: {
        trigger: 'bg-transparent',
      },
      underlined: {
        trigger:
          'rounded-none border-b-medium border-t-0 border-x-0 bg-transparent px-1 py-0',
      },
    },
    color: {
      default: {},
      primary: {
        trigger:
          'data-[focus=true]:border-blue-500 data-[focus=true]:ring-blue-500',
      },
      secondary: {
        trigger:
          'data-[focus=true]:border-gray-500 data-[focus=true]:ring-gray-500',
      },
      success: {
        trigger:
          'data-[focus=true]:border-green-500 data-[focus=true]:ring-green-500',
      },
      warning: {
        trigger:
          'data-[focus=true]:border-yellow-500 data-[focus=true]:ring-yellow-500',
      },
      danger: {
        trigger:
          'data-[focus=true]:border-red-500 data-[focus=true]:ring-red-500',
      },
    },
    labelPlacement: {
      inside: {},
      outside: {
        mainWrapper: 'mt-1',
      },
      'outside-left': {
        base: 'flex-row items-center gap-2',
        label: 'w-[30%] text-right',
        mainWrapper: 'w-[70%]',
      },
    },
    isDisabled: {
      true: {
        base: 'opacity-disabled',
        trigger: 'pointer-events-none',
      },
    },
    isInvalid: {
      true: {
        trigger:
          'border-red-500 data-[focus=true]:border-red-500 data-[focus=true]:ring-red-500',
      },
    },
    isRequired: {
      true: {
        label: 'after:content-["*"] after:text-red-500 after:ml-0.5',
      },
    },
    isMultiline: {
      true: {
        value: 'flex flex-wrap gap-1',
      },
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'bordered',
    color: 'default',
    radius: 'md',
    labelPlacement: 'inside',
  },
})

export const selectItemStyles = tv({
  slots: {
    base: [
      'flex w-full items-center gap-2 p-2 data-[hover=true]:bg-default-100',
      'cursor-pointer rounded-md outline-none',
      'data-[focus-visible=true]:ring-2 data-[focus-visible=true]:ring-focus data-[focus-visible=true]:ring-offset-2',
      'data-[pressed=true]:opacity-70',
      'data-[selected=true]:bg-primary-500/20',
      'data-[disabled=true]:cursor-not-allowed data-[disabled=true]:opacity-disabled',
    ],
    wrapper: 'flex w-full flex-col',
    label: 'text-sm font-normal truncate',
    description: 'text-xs text-foreground-400 truncate',
    selectedIcon: 'text-primary',
  },
})
