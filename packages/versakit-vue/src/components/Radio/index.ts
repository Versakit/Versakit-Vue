import { withInstall } from '@versakit/shared'
import RadioComponent from './src/index.vue'
import type { RadioProps, RadioEmits } from './src/type'

export const Radio = withInstall(RadioComponent)
export type { RadioProps, RadioEmits }
export default Radio
