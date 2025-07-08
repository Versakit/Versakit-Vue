import { withInstall } from '@versakit/shared'
import DropdownComponent from './src/index.vue'
import DropdownItemComponent from './src/dropdown-item.vue'

export const Dropdown = withInstall(DropdownComponent)
export const DropdownItem = withInstall(DropdownItemComponent)

export * from './src/type'

export default Dropdown
