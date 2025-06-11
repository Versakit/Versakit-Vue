import { withInstall } from '@versakit/shared'
import ColorPicker from './src/index.vue'

export const VKColorPicker = withInstall(ColorPicker)

export type { ColorPickerProps, ColorFormat } from './src/type'
