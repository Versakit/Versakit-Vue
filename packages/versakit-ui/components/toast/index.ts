import { withInstall } from '@versakit/shared'
import Toast from './src/index.vue'
import ToastProvider from './src/toast-provider.vue'

export const VKToast = withInstall(Toast)
export const VKToastProvider = withInstall(ToastProvider)
