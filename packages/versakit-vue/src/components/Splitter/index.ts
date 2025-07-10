import { withInstall } from '@versakit/shared'
import _Splitter from './src/index.vue'
import _SplitterPanel from './src/SplitterPanel.vue'

export const Splitter = withInstall(_Splitter)
export const SplitterPanel = withInstall(_SplitterPanel)

export * from './src/type'

export default Splitter
