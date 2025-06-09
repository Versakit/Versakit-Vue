import { tv } from 'tailwind-variants'

// 进度条容器
export const progress = tv({
  base: 'w-full overflow-hidden',
  variants: {
    type: {
      line: 'relative',
      circle: 'inline-flex items-center justify-center',
    },
    size: {
      xs: 'h-1',
      sm: 'h-2',
      md: 'h-3',
      lg: 'h-4',
      xl: 'h-5',
    },
    unstyled: {
      true: 'bg-transparent border-none shadow-none',
    },
  },
  defaultVariants: {
    type: 'line',
    size: 'md',
    unstyled: false,
  },
})

// 进度条轨道
export const progressTrack = tv({
  base: 'w-full bg-gray-200 dark:bg-gray-700 rounded-full',
  variants: {
    type: {
      line: '',
      circle: 'rounded-full',
    },
    size: {
      xs: 'h-1',
      sm: 'h-2',
      md: 'h-3',
      lg: 'h-4',
      xl: 'h-5',
    },
  },
  defaultVariants: {
    type: 'line',
    size: 'md',
  },
})

// 进度条
export const progressBar = tv({
  base: 'h-full rounded-full flex items-center justify-center transition-all ease-in-out duration-300',
  variants: {
    variant: {
      default: 'bg-blue-500',
      success: 'bg-green-500',
      info: 'bg-blue-500',
      warning: 'bg-yellow-500',
      danger: 'bg-red-500',
    },
    striped: {
      true: 'bg-gradient-to-r from-transparent via-white/20 bg-[length:30px_30px]',
    },
    animated: {
      true: 'animate-[progress-animation_2s_linear_infinite]',
    },
    indeterminate: {
      true: 'relative overflow-hidden w-3/4 animate-[indeterminate-animation_2s_ease-in-out_infinite]',
    },
  },
  defaultVariants: {
    variant: 'default',
    striped: false,
    animated: false,
    indeterminate: false,
  },
})

// 进度文本
export const progressText = tv({
  base: 'text-xs font-medium',
  variants: {
    size: {
      xs: 'text-[0.6rem]',
      sm: 'text-xs',
      md: 'text-sm',
      lg: 'text-base',
      xl: 'text-lg',
    },
    type: {
      line: 'absolute right-1 top-1/2 transform -translate-y-1/2 text-white',
      circle: 'absolute text-center',
    },
  },
  defaultVariants: {
    size: 'md',
    type: 'line',
  },
})

// 圆环进度条
export const progressCircle = tv({
  base: 'relative inline-flex items-center justify-center',
  variants: {
    size: {
      xs: 'w-16 h-16',
      sm: 'w-24 h-24',
      md: 'w-32 h-32',
      lg: 'w-40 h-40',
      xl: 'w-48 h-48',
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

// 添加动画关键帧
const style = document.createElement('style')
style.textContent = `
@keyframes progress-animation {
  0% { background-position: 0 0; }
  100% { background-position: 30px 0; }
}

@keyframes indeterminate-animation {
  0% { left: -35%; }
  50% { left: 100%; }
  100% { left: 100%; }
}
`
document.head.appendChild(style)
