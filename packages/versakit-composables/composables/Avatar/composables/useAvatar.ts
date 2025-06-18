import { ref } from 'vue'

export function useAvatar() {
  const isLoaded = ref(false)
  const isError = ref(false)

  const onLoad = () => {
    isLoaded.value = true
    isError.value = false
  }

  const onError = () => {
    isError.value = true
    isLoaded.value = false
  }

  return {
    isLoaded,
    isError,
    onLoad,
    onError,
  }
}
