import { withInstall } from '@versakit/shared'
import _Dropdown from './src/index.vue'
import _DropdownItem from './src/DropdownItem.vue'
import _DropdownDivider from './src/DropdownDivider.vue'

export const Dropdown = withInstall(_Dropdown)
export const DropdownItem = withInstall(_DropdownItem)
export const DropdownDivider = withInstall(_DropdownDivider)

export * from './src/type'

export default Dropdown
