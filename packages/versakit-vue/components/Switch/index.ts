import { withInstall } from '@versakit/shared'
import SwitchComponent from './src/index.vue'
import type { SwitchProps, SwitchEmits } from './src/type'

export const Switch = withInstall(SwitchComponent)
export type { SwitchProps, SwitchEmits }

export default Switch
