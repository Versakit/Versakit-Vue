import { withInstall } from '@versakit/shared'
import CheckboxComponent from './src/index.vue'
import CheckboxGroupComponent from './src/CheckboxGroup.vue'

export const Checkbox = withInstall(CheckboxComponent)
export const CheckboxGroup = withInstall(CheckboxGroupComponent)

export * from './src/type'
