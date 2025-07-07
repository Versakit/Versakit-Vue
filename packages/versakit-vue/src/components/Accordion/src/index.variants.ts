import { tv } from 'tailwind-variants'

/**
 * Accordion 根元素样式
 */
export const accordionStyle = tv({
  base: 'w-full',
  variants: {
    variant: {
      default: '',
      bordered: 'border border-gray-200 divide-y divide-gray-200',
      elevated: 'shadow-md divide-y divide-gray-200',
    },
    radius: {
      none: 'rounded-none',
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg',
      full: 'rounded-xl',
    },
    bordered: {
      true: 'border border-gray-200',
      false: '',
    },
  },
  defaultVariants: {
    variant: 'default',
    radius: 'md',
    bordered: true,
  },
})

/**
 * AccordionItem 根元素样式
 */
export const accordionItemStyle = tv({
  base: 'w-full',
})

/**
 * AccordionItem 头部样式
 */
export const accordionItemHeaderStyle = tv({
  base: '',
})

/**
 * AccordionItem 触发器样式
 */
export const accordionItemTriggerStyle = tv({
  base: 'flex w-full items-center justify-between py-4 px-5 text-left text-base font-medium focus:outline-none',
  variants: {
    disabled: {
      true: 'cursor-not-allowed opacity-50',
      false: 'cursor-pointer',
    },
  },
  defaultVariants: {
    disabled: false,
  },
})

/**
 * AccordionItem 标题样式
 */
export const accordionItemTitleStyle = tv({
  base: 'text-base font-medium',
})

/**
 * AccordionItem 图标样式
 */
export const accordionItemIconStyle = tv({
  base: 'text-gray-500 transition-transform duration-200',
  variants: {
    expanded: {
      true: 'rotate-180',
      false: '',
    },
  },
  defaultVariants: {
    expanded: false,
  },
})

/**
 * AccordionItem 内容容器样式
 */
export const accordionItemContentStyle = tv({
  base: 'overflow-hidden',
  variants: {
    animated: {
      true: 'transition-all duration-300 ease-out',
      false: '',
    },
    expanded: {
      true: '',
      false: 'h-0',
    },
  },
  defaultVariants: {
    animated: true,
    expanded: false,
  },
})

/**
 * AccordionItem 内容区域样式
 */
export const accordionItemContentInnerStyle = tv({
  base: 'py-4 px-5',
})
