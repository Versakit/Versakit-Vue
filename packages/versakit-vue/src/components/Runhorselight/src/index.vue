<script setup lang="ts">
import {
  computed,
  nextTick,
  onBeforeUnmount,
  onMounted,
  ref,
  useSlots,
  watch,
} from 'vue'
import type { CSSProperties } from 'vue'
import { runhorselightStyle } from './index.variants'
import { useRunhorselight } from './composables/useRunhorselight'
import type {
  RunhorselightAffix,
  RunhorselightAffixClickPayload,
  RunhorselightNormalizedItem,
  RunhorselightProps,
} from './type'

defineOptions({ name: 'Runhorselight' })

const props = withDefaults(defineProps<RunhorselightProps>(), {
  items: () => [],
  direction: 'left',
  duration: 20,
  height: '3rem',
  backgroundColor: 'transparent',
  textColor: '#111827',
  borderRadius: '0.75rem',
  gap: '1rem',
  pauseOnHover: true,
  loop: true,
  autofill: false,
  unstyled: false,
})

const slots = useSlots()
const styles = runhorselightStyle()

const viewportRef = ref<HTMLElement | null>(null)
const trackRef = ref<HTMLElement | null>(null)
const groupRef = ref<HTMLElement | null>(null)
const slotMeasureRef = ref<HTMLElement | null>(null)
const groupWidth = ref(0)
const slotWidth = ref(0)
const repeatCount = ref(1)
const isPaused = ref(false)
const isReady = ref(false)

let frameId: number | null = null
let lastTimestamp = 0
let currentOffset = 0
let resizeObserver: ResizeObserver | null = null
const imageElements = new Set<HTMLImageElement>()

const {
  coreItems,
  rootStyles,
  trackStyles,
  groupStyles,
  itemStyles,
  cardStyle,
  imageStyle,
  duration,
} = useRunhorselight(props)

const hasDefaultSlot = computed(() => Boolean(slots.default))
const shouldLoop = computed(() => props.loop && groupWidth.value > 0)
const renderedGroups = computed(() => (shouldLoop.value ? 2 : 1))
const repeatedDisplayItems = computed(() =>
  Array.from({ length: repeatCount.value }, (_, repeatIndex) =>
    coreItems.value.map((item) => ({
      ...item,
      id: `${item.id}-repeat-${repeatIndex}`,
    })),
  ).flat(),
)
const slotRepeatCount = computed(() => {
  if (!hasDefaultSlot.value || !props.loop) return 1
  if (slotWidth.value <= 0) return 4
  const viewportWidth = viewportRef.value?.getBoundingClientRect().width ?? 0
  const needed = Math.ceil((viewportWidth * 2.2) / slotWidth.value) + 1
  return Math.max(4, Math.min(12, needed))
})

const rootClasses = computed(() =>
  props.unstyled
    ? props.pt?.root || ''
    : styles.root({ class: props.pt?.root }),
)
const viewportClasses = computed(() =>
  props.unstyled
    ? props.pt?.viewport || ''
    : styles.viewport({ class: props.pt?.viewport }),
)
const trackClasses = computed(() =>
  props.unstyled
    ? props.pt?.track || ''
    : styles.track({ class: props.pt?.track }),
)
const groupClasses = computed(() =>
  props.unstyled
    ? props.pt?.group || ''
    : styles.group({ class: props.pt?.group }),
)
const itemClasses = computed(() =>
  props.unstyled
    ? props.pt?.item || ''
    : styles.item({ class: props.pt?.item }),
)
const imageClasses = computed(() =>
  props.unstyled
    ? props.pt?.image || ''
    : styles.image({ class: props.pt?.image }),
)
const cardClasses = computed(() =>
  props.unstyled
    ? props.pt?.card || ''
    : styles.card({ class: props.pt?.card }),
)
const cardTitleClasses = computed(() =>
  props.unstyled
    ? props.pt?.cardTitle || ''
    : styles.cardTitle({ class: props.pt?.cardTitle }),
)
const cardDescriptionClasses = computed(() =>
  props.unstyled
    ? props.pt?.cardDescription || ''
    : styles.cardDescription({ class: props.pt?.cardDescription }),
)
const textClasses = computed(() =>
  props.unstyled
    ? props.pt?.text || ''
    : styles.text({ class: props.pt?.text }),
)

const mergedTrackStyles = computed<CSSProperties>(() => ({
  ...trackStyles.value,
  visibility: isReady.value ? 'visible' : 'hidden',
}))

const setTrackOffset = (value: number) => {
  if (!trackRef.value) return
  if (!groupWidth.value || !shouldLoop.value) {
    trackRef.value.style.transform = 'translate3d(0, 0, 0)'
    return
  }

  const normalizedOffset =
    ((value % groupWidth.value) + groupWidth.value) % groupWidth.value
  const translateX =
    props.direction === 'right'
      ? -groupWidth.value + normalizedOffset
      : -normalizedOffset
  trackRef.value.style.transform = `translate3d(${translateX}px, 0, 0)`
}

const measure = () => {
  const nextGroupWidth = groupRef.value?.getBoundingClientRect().width ?? 0
  const nextSlotWidth = slotMeasureRef.value?.getBoundingClientRect().width ?? 0

  if (!nextGroupWidth) {
    groupWidth.value = 0
    slotWidth.value = 0
    isReady.value = false
    return
  }

  const viewportWidth = viewportRef.value?.getBoundingClientRect().width ?? 0
  const measuredBaseWidth = hasDefaultSlot.value
    ? nextSlotWidth || nextGroupWidth
    : nextGroupWidth / Math.max(1, repeatCount.value)
  const targetWidth = viewportWidth * 2.2
  const nextRepeat =
    !props.loop || measuredBaseWidth <= 0
      ? 1
      : Math.min(6, Math.max(1, Math.ceil(targetWidth / measuredBaseWidth)))

  if (!hasDefaultSlot.value && nextRepeat !== repeatCount.value) {
    repeatCount.value = nextRepeat
    nextTick(measure)
    return
  }

  groupWidth.value = nextGroupWidth
  slotWidth.value = hasDefaultSlot.value ? nextSlotWidth : 0
  currentOffset = nextGroupWidth ? currentOffset % nextGroupWidth : 0
  isReady.value = true
  setTrackOffset(currentOffset)
}

const stopAnimation = () => {
  if (frameId !== null) cancelAnimationFrame(frameId)
  frameId = null
  lastTimestamp = 0
}

const animate = (timestamp: number) => {
  if (!lastTimestamp) lastTimestamp = timestamp
  const delta = Math.min(timestamp - lastTimestamp, 64)
  lastTimestamp = timestamp

  if (!isPaused.value && shouldLoop.value && groupWidth.value > 0) {
    currentOffset += (groupWidth.value / (duration.value * 1000)) * delta
    while (currentOffset >= groupWidth.value) currentOffset -= groupWidth.value
    setTrackOffset(currentOffset)
  }

  frameId = requestAnimationFrame(animate)
}

const startAnimation = () => {
  stopAnimation()
  frameId = requestAnimationFrame(animate)
}

const onImageLoad = () => nextTick(measure)

const cleanupImageListeners = () => {
  imageElements.forEach((image) => {
    image.removeEventListener('load', onImageLoad)
    image.removeEventListener('error', onImageLoad)
  })
  imageElements.clear()
}

const bindImageListeners = () => {
  cleanupImageListeners()
  if (!trackRef.value) return
  trackRef.value.querySelectorAll('img').forEach((image) => {
    image.addEventListener('load', onImageLoad)
    image.addEventListener('error', onImageLoad)
    imageElements.add(image)
  })
}

const refresh = async () => {
  await nextTick()
  bindImageListeners()
  measure()
}

const pause = () => {
  if (props.pauseOnHover) isPaused.value = true
}

const resume = () => {
  if (props.pauseOnHover) isPaused.value = false
}

const normalizeAffixItem = (
  affix: RunhorselightAffix | undefined,
  target: 'prefix' | 'suffix',
) => {
  if (!affix) return null
  const item =
    typeof affix === 'string'
      ? { type: 'text' as const, content: affix }
      : affix
  return {
    id: `${target}-fixed`,
    type: item.type ?? (item.src ? 'image' : 'text'),
    content: item.content ?? item.title ?? item.src ?? '',
    src: item.src,
    alt: item.alt,
    title: item.title,
    description: item.description,
    backgroundColor: item.backgroundColor,
    textColor: item.textColor,
    borderRadius: item.borderRadius,
  } as RunhorselightNormalizedItem
}

const prefixItem = computed(() => normalizeAffixItem(props.prefix, 'prefix'))
const suffixItem = computed(() => normalizeAffixItem(props.suffix, 'suffix'))

const emitAffixClick = (
  target: 'prefix' | 'suffix',
  item: RunhorselightNormalizedItem,
) => {
  const payload: RunhorselightAffixClickPayload = { target, item }
  if (target === 'prefix') props.onPrefixClick?.(payload)
  else props.onSuffixClick?.(payload)
}

const renderImageAlt = (item: RunhorselightNormalizedItem) =>
  item.alt || item.content || 'Runhorselight image'

onMounted(() => {
  refresh()
  if (typeof ResizeObserver !== 'undefined') {
    resizeObserver = new ResizeObserver(() => measure())
    if (viewportRef.value) resizeObserver.observe(viewportRef.value)
    if (groupRef.value) resizeObserver.observe(groupRef.value)
    if (slotMeasureRef.value) resizeObserver.observe(slotMeasureRef.value)
  } else {
    window.addEventListener('resize', measure)
  }
  startAnimation()
})

onBeforeUnmount(() => {
  stopAnimation()
  cleanupImageListeners()
  resizeObserver?.disconnect()
  resizeObserver = null
  window.removeEventListener('resize', measure)
})

watch(
  [
    () => props.items,
    () => props.gap,
    () => props.height,
    () => props.loop,
    () => props.direction,
    () => props.autofill,
    () => hasDefaultSlot.value,
    () => props.prefix,
    () => props.suffix,
  ],
  () => {
    repeatCount.value = 1
    currentOffset = 0
    refresh()
  },
  { deep: true },
)

watch(
  () => props.pauseOnHover,
  (pauseOnHover) => {
    if (!pauseOnHover) isPaused.value = false
  },
)
</script>

<template>
  <div
    :class="[rootClasses, 'flex items-center gap-4']"
    :style="rootStyles"
    @mouseenter="pause"
    @mouseleave="resume"
  >
    <div
      v-if="prefixItem"
      :class="[itemClasses, 'shrink-0 px-2']"
      :style="itemStyles"
      @click="emitAffixClick('prefix', prefixItem)"
    >
      <slot name="prefix" :item="prefixItem" target="prefix">
        <img
          v-if="prefixItem.type === 'image'"
          :src="prefixItem.src"
          :alt="renderImageAlt(prefixItem)"
          :class="imageClasses"
          :style="imageStyle(prefixItem)"
          draggable="false"
        />
        <div
          v-else-if="prefixItem.type === 'card'"
          :class="cardClasses"
          :style="cardStyle(prefixItem)"
        >
          <div :class="cardTitleClasses">
            {{ prefixItem.title || prefixItem.content }}
          </div>
          <div v-if="prefixItem.description" :class="cardDescriptionClasses">
            {{ prefixItem.description }}
          </div>
        </div>
        <span
          v-else
          :class="textClasses"
          :style="{ color: prefixItem.textColor || props.textColor }"
        >
          {{ prefixItem.content }}
        </span>
      </slot>
    </div>

    <div ref="viewportRef" :class="viewportClasses">
      <div
        v-if="hasDefaultSlot"
        ref="slotMeasureRef"
        class="pointer-events-none absolute -z-10 whitespace-nowrap opacity-0"
        :style="itemStyles"
        aria-hidden="true"
      >
        <slot />
      </div>
      <div ref="trackRef" :class="trackClasses" :style="mergedTrackStyles">
        <div
          v-for="groupIndex in renderedGroups"
          :key="groupIndex"
          :ref="
            groupIndex === 1
              ? (el) => (groupRef = el as HTMLElement)
              : undefined
          "
          :class="groupClasses"
          :style="groupStyles"
          :aria-hidden="groupIndex > 1"
        >
          <template v-if="hasDefaultSlot">
            <div
              v-for="repeatIndex in slotRepeatCount"
              :key="`slot-${groupIndex}-${repeatIndex}`"
              :class="itemClasses"
              :style="itemStyles"
            >
              <slot />
            </div>
          </template>
          <template v-else>
            <div
              v-for="item in repeatedDisplayItems"
              :key="`${groupIndex}-${item.id}`"
              :class="itemClasses"
              :style="itemStyles"
            >
              <slot name="item" :item="item">
                <img
                  v-if="item.type === 'image'"
                  :src="item.src"
                  :alt="renderImageAlt(item)"
                  :class="imageClasses"
                  :style="imageStyle(item)"
                  draggable="false"
                />
                <div
                  v-else-if="item.type === 'card'"
                  :class="cardClasses"
                  :style="cardStyle(item)"
                >
                  <div :class="cardTitleClasses">
                    {{ item.title || item.content }}
                  </div>
                  <div v-if="item.description" :class="cardDescriptionClasses">
                    {{ item.description }}
                  </div>
                </div>
                <span
                  v-else
                  :class="textClasses"
                  :style="{ color: item.textColor || props.textColor }"
                >
                  {{ item.content }}
                </span>
              </slot>
            </div>
          </template>
        </div>
      </div>
    </div>

    <div
      v-if="suffixItem"
      :class="[itemClasses, 'shrink-0 px-2']"
      :style="itemStyles"
      @click="emitAffixClick('suffix', suffixItem)"
    >
      <slot name="suffix" :item="suffixItem" target="suffix">
        <img
          v-if="suffixItem.type === 'image'"
          :src="suffixItem.src"
          :alt="renderImageAlt(suffixItem)"
          :class="imageClasses"
          :style="imageStyle(suffixItem)"
          draggable="false"
        />
        <div
          v-else-if="suffixItem.type === 'card'"
          :class="cardClasses"
          :style="cardStyle(suffixItem)"
        >
          <div :class="cardTitleClasses">
            {{ suffixItem.title || suffixItem.content }}
          </div>
          <div v-if="suffixItem.description" :class="cardDescriptionClasses">
            {{ suffixItem.description }}
          </div>
        </div>
        <span
          v-else
          :class="textClasses"
          :style="{ color: suffixItem.textColor || props.textColor }"
        >
          {{ suffixItem.content }}
        </span>
      </slot>
    </div>
  </div>
</template>

<style scoped>
.runhorselight-root {
  transform: translateZ(0);
}

.runhorselight-track {
  backface-visibility: hidden;
  contain: layout paint;
}
</style>
