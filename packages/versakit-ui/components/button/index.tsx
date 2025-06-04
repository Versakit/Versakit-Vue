import { defineComponent } from 'vue'
import { tv, type VariantProps } from 'tailwind-variants'

// 1. 定义按钮样式变体
const button = tv({
  base: 'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none disabled:opacity-50 disabled:pointer-events-none',
  variants: {
    variant: {
      default: 'bg-blue-600 text-white hover:bg-blue-700',
      outline: 'border border-gray-300 text-gray-700 hover:bg-gray-100',
      ghost: 'text-gray-600 hover:bg-gray-100',
      destructive: 'bg-red-600 text-white hover:bg-red-700',
    },
    size: {
      sm: 'h-8 px-3 text-xs',
      md: 'h-10 px-4 text-sm',
      lg: 'h-12 px-6 text-base',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'md',
  },
})

// 2. TS 类型辅助
type ButtonVariants = VariantProps<typeof button>

export default defineComponent({
  name: 'VKButton',
  props: {
    variant: {
      type: String as () => ButtonVariants['variant'],
      default: 'default',
    },
    size: {
      type: String as () => ButtonVariants['size'],
      default: 'md',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['click'],
  setup(props, { emit, slots }) {
    return () => (
      <button
        class={button({ variant: props.variant, size: props.size })}
        disabled={props.disabled}
        onClick={(e) => emit('click', e)}
      >
        {slots.default ? slots.default() : 'Button'}
      </button>
    )
  },
})
