import { tv } from 'tailwind-variants'

export const chipStyle = tv({
  base: 'inline-flex items-center justify-center gap-1 text-sm transition-colors duration-200',
  variants: {
    variant: {
      solid: 'border-transparent',
      bordered: 'bg-transparent border',
      light: 'border-transparent',
      flat: 'border-transparent',
      faded: 'border-transparent bg-opacity-20',
      shadow: 'border-transparent shadow-md',
      dot: 'pl-2', // 使用更小的左内边距，为dot预留空间
    },
    color: {
      default: 'bg-zinc-100 text-zinc-800 border-zinc-200',
      primary: 'bg-blue-100 text-blue-800 border-blue-300',
      secondary: 'bg-purple-100 text-purple-800 border-purple-300',
      success: 'bg-green-100 text-green-800 border-green-300',
      warning: 'bg-yellow-100 text-yellow-800 border-yellow-300',
      danger: 'bg-red-100 text-red-800 border-red-300',
    },
    size: {
      sm: 'text-xs py-0.5 px-2 h-5',
      md: 'py-1 px-2.5 h-7',
      lg: 'text-base py-1.5 px-3 h-9',
    },
    radius: {
      none: 'rounded-none',
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg',
      full: 'rounded-full',
    },
    selected: {
      true: '',
      false: '',
    },
    disabled: {
      true: 'opacity-50 cursor-not-allowed pointer-events-none',
      false: '',
    },
  },
  compoundVariants: [
    // 默认/未选中状态
    {
      variant: 'solid',
      color: 'default',
      selected: false,
      class: 'bg-gray-100 text-gray-800',
    },
    {
      variant: 'solid',
      color: 'primary',
      selected: false,
      class: 'bg-blue-100 text-blue-800',
    },
    {
      variant: 'solid',
      color: 'secondary',
      selected: false,
      class: 'bg-purple-100 text-purple-800',
    },
    {
      variant: 'solid',
      color: 'success',
      selected: false,
      class: 'bg-green-100 text-green-800',
    },
    {
      variant: 'solid',
      color: 'warning',
      selected: false,
      class: 'bg-yellow-100 text-yellow-800',
    },
    {
      variant: 'solid',
      color: 'danger',
      selected: false,
      class: 'bg-red-100 text-red-800',
    },

    // 选中状态
    {
      variant: 'solid',
      color: 'default',
      selected: true,
      class: 'bg-gray-200 text-gray-900',
    },
    {
      variant: 'solid',
      color: 'primary',
      selected: true,
      class: 'bg-blue-200 text-blue-900',
    },
    {
      variant: 'solid',
      color: 'secondary',
      selected: true,
      class: 'bg-purple-200 text-purple-900',
    },
    {
      variant: 'solid',
      color: 'success',
      selected: true,
      class: 'bg-green-200 text-green-900',
    },
    {
      variant: 'solid',
      color: 'warning',
      selected: true,
      class: 'bg-yellow-200 text-yellow-900',
    },
    {
      variant: 'solid',
      color: 'danger',
      selected: true,
      class: 'bg-red-200 text-red-900',
    },

    // Bordered 变体
    {
      variant: 'bordered',
      color: 'default',
      class: 'border-gray-300 text-gray-800',
    },
    {
      variant: 'bordered',
      color: 'primary',
      class: 'border-blue-400 text-blue-600',
    },
    {
      variant: 'bordered',
      color: 'secondary',
      class: 'border-purple-400 text-purple-600',
    },
    {
      variant: 'bordered',
      color: 'success',
      class: 'border-green-400 text-green-600',
    },
    {
      variant: 'bordered',
      color: 'warning',
      class: 'border-yellow-400 text-yellow-600',
    },
    {
      variant: 'bordered',
      color: 'danger',
      class: 'border-red-400 text-red-600',
    },

    // Light 变体
    {
      variant: 'light',
      color: 'default',
      class: 'bg-gray-50 text-gray-600',
    },
    {
      variant: 'light',
      color: 'primary',
      class: 'bg-blue-50 text-blue-600',
    },
    {
      variant: 'light',
      color: 'secondary',
      class: 'bg-purple-50 text-purple-600',
    },
    {
      variant: 'light',
      color: 'success',
      class: 'bg-green-50 text-green-600',
    },
    {
      variant: 'light',
      color: 'warning',
      class: 'bg-yellow-50 text-yellow-600',
    },
    {
      variant: 'light',
      color: 'danger',
      class: 'bg-red-50 text-red-600',
    },

    // Flat 变体
    {
      variant: 'flat',
      color: 'default',
      class: 'bg-gray-200 text-gray-800',
    },
    {
      variant: 'flat',
      color: 'primary',
      class: 'bg-blue-200 text-blue-800',
    },
    {
      variant: 'flat',
      color: 'secondary',
      class: 'bg-purple-200 text-purple-800',
    },
    {
      variant: 'flat',
      color: 'success',
      class: 'bg-green-200 text-green-800',
    },
    {
      variant: 'flat',
      color: 'warning',
      class: 'bg-yellow-200 text-yellow-800',
    },
    {
      variant: 'flat',
      color: 'danger',
      class: 'bg-red-200 text-red-800',
    },

    // Faded 变体
    {
      variant: 'faded',
      color: 'default',
      class: 'bg-gray-500 bg-opacity-20 text-gray-800',
    },
    {
      variant: 'faded',
      color: 'primary',
      class: 'bg-blue-500 bg-opacity-20 text-blue-800',
    },
    {
      variant: 'faded',
      color: 'secondary',
      class: 'bg-purple-500 bg-opacity-20 text-purple-800',
    },
    {
      variant: 'faded',
      color: 'success',
      class: 'bg-green-500 bg-opacity-20 text-green-800',
    },
    {
      variant: 'faded',
      color: 'warning',
      class: 'bg-yellow-500 bg-opacity-20 text-yellow-800',
    },
    {
      variant: 'faded',
      color: 'danger',
      class: 'bg-red-500 bg-opacity-20 text-red-800',
    },

    // Shadow 变体
    {
      variant: 'shadow',
      color: 'default',
      class: 'bg-white text-gray-800 shadow-gray-200/50',
    },
    {
      variant: 'shadow',
      color: 'primary',
      class: 'bg-white text-blue-800 shadow-blue-200/50',
    },
    {
      variant: 'shadow',
      color: 'secondary',
      class: 'bg-white text-purple-800 shadow-purple-200/50',
    },
    {
      variant: 'shadow',
      color: 'success',
      class: 'bg-white text-green-800 shadow-green-200/50',
    },
    {
      variant: 'shadow',
      color: 'warning',
      class: 'bg-white text-yellow-800 shadow-yellow-200/50',
    },
    {
      variant: 'shadow',
      color: 'danger',
      class: 'bg-white text-red-800 shadow-red-200/50',
    },
  ],
  defaultVariants: {
    variant: 'solid',
    color: 'default',
    size: 'md',
    radius: 'full',
    selected: false,
    disabled: false,
  },
})
