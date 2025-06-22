import { withInstall } from '@versakit/shared'
import SelectComponent from './src/Select.vue'
import SelectItemComponent from './src/SelectItem.vue'

export const Select = withInstall(SelectComponent)
export const SelectItem = withInstall(SelectItemComponent)

export * from './src/type'
