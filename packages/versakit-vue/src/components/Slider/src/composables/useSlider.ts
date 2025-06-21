// composables/useSlider.ts
import { ref, computed, watch } from 'vue'

export function useSlider(props: {
  min?: number
  max?: number
  step?: number
  orientation?: 'horizontal' | 'vertical'
  modelValue?: number
  onChange?: (val: number) => void
}) {
  const trackRef = ref<HTMLElement | null>(null)
  const thumbRef = ref<HTMLElement | null>(null)

  const min = props.min ?? 0
  const max = props.max ?? 100
  const step = props.step ?? 1
  const orientation = props.orientation ?? 'horizontal'

  const value = ref(props.modelValue ?? min)

  const percent = computed(() => ((value.value - min) / (max - min)) * 100)

  const setValue = (newVal: number) => {
    const stepped = Math.round(newVal / step) * step
    const clamped = Math.min(max, Math.max(min, stepped))
    value.value = clamped
    props.onChange?.(clamped)
  }

  const onTrackClick = (e: MouseEvent) => {
    const track = trackRef.value
    if (!track) return

    const rect = track.getBoundingClientRect()
    const pos =
      orientation === 'horizontal'
        ? (e.clientX - rect.left) / rect.width
        : 1 - (e.clientY - rect.top) / rect.height

    setValue(min + pos * (max - min))
  }

  const onThumbKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
      e.preventDefault()
      setValue(value.value + step)
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') {
      e.preventDefault()
      setValue(value.value - step)
    }
  }

  const onThumbMouseDown = (e: MouseEvent) => {
    e.preventDefault()
    const moveHandler = (moveEvent: MouseEvent) => {
      const track = trackRef.value
      if (!track) return

      const rect = track.getBoundingClientRect()
      const pos =
        orientation === 'horizontal'
          ? (moveEvent.clientX - rect.left) / rect.width
          : 1 - (moveEvent.clientY - rect.top) / rect.height

      setValue(min + pos * (max - min))
    }

    const upHandler = () => {
      window.removeEventListener('mousemove', moveHandler)
      window.removeEventListener('mouseup', upHandler)
    }

    window.addEventListener('mousemove', moveHandler)
    window.addEventListener('mouseup', upHandler)
  }

  // Sync with external v-model
  watch(
    () => props.modelValue,
    (val) => {
      if (val != null) value.value = val
    },
  )

  return {
    value,
    percent,
    trackRef,
    thumbRef,
    onTrackClick,
    onThumbKeyDown,
    onThumbMouseDown,
  }
}
