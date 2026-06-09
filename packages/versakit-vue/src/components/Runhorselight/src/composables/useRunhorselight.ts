import { computed } from 'vue'
import type {
  RunhorselightAffix,
  RunhorselightItem,
  RunhorselightItemType,
  RunhorselightNormalizedItem,
  RunhorselightProps,
} from '../type'

const getItemType = (
  item: Exclude<RunhorselightItem, string>,
): RunhorselightItemType => {
  if (item.type) return item.type
  if (item.src) return 'image'
  if (item.title || item.description) return 'card'
  return 'text'
}

const normalizeItem = (
  item: RunhorselightItem,
  index: number | string,
): RunhorselightNormalizedItem => {
  if (typeof item === 'string') {
    return {
      id: `item-${index}`,
      type: 'text',
      content: item,
    }
  }

  return {
    id: `item-${index}`,
    type: getItemType(item),
    content: item.content ?? item.title ?? item.src ?? '',
    src: item.src,
    alt: item.alt,
    title: item.title,
    description: item.description,
    backgroundColor: item.backgroundColor,
    textColor: item.textColor,
    borderRadius: item.borderRadius,
  }
}

const toPositiveNumber = (
  value: number | string | undefined,
  fallback: number,
) => {
  const numericValue = typeof value === 'string' ? Number(value) : value

  if (
    typeof numericValue !== 'number' ||
    Number.isNaN(numericValue) ||
    numericValue <= 0
  ) {
    return fallback
  }

  return numericValue
}

const normalizeAffix = (
  affix: RunhorselightAffix | undefined,
  key: 'prefix' | 'suffix',
): RunhorselightNormalizedItem[] => {
  if (!affix) return []
  return [normalizeItem(affix, key)]
}

export function useRunhorselight(props: RunhorselightProps) {
  const normalizedItems = computed(() => {
    return (props.items ?? []).map((item, index) => normalizeItem(item, index))
  })

  const prefixItems = computed(() => normalizeAffix(props.prefix, 'prefix'))
  const suffixItems = computed(() => normalizeAffix(props.suffix, 'suffix'))
  const coreItems = computed(() => {
    const base = normalizedItems.value
    if (!base.length) return []

    const needsAutofill =
      props.autofill && base.some((item) => item.type === 'image')
    const minimum = needsAutofill ? Math.max(4, base.length) : base.length
    const repeated: RunhorselightNormalizedItem[] = []

    for (let cycle = 0; repeated.length < minimum; cycle += 1) {
      for (const item of base) {
        repeated.push({
          ...item,
          id: `${item.id}-copy-${cycle}-${repeated.length}`,
        })
      }
    }

    return repeated
  })

  const displayItems = computed(() => {
    return [...prefixItems.value, ...coreItems.value, ...suffixItems.value]
  })

  const rootStyles = computed(() => ({
    height: props.height,
    backgroundColor: props.backgroundColor,
    color: props.textColor,
    borderRadius: props.borderRadius,
  }))

  const trackStyles = computed(() => ({}))

  const groupStyles = computed(() => ({
    gap: props.gap,
    paddingInlineEnd: props.gap,
  }))

  const itemStyles = computed(() => ({
    minWidth: 'max-content',
  }))

  const cardStyle = (item: RunhorselightNormalizedItem) => ({
    backgroundColor: item.backgroundColor ?? 'rgba(255, 255, 255, 0.86)',
    color: item.textColor ?? props.textColor,
    borderRadius: item.borderRadius ?? props.borderRadius,
    padding: '0.75rem 1rem',
  })

  const imageStyle = (item: RunhorselightNormalizedItem) => ({
    borderRadius: item.borderRadius ?? props.borderRadius,
  })

  const duration = computed(() => toPositiveNumber(props.duration, 20))

  return {
    displayItems,
    coreItems,
    prefixItems,
    suffixItems,
    rootStyles,
    trackStyles,
    groupStyles,
    itemStyles,
    cardStyle,
    imageStyle,
    duration,
  }
}
