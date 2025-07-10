import { withInstall } from '@versakit/shared'
import _Splitter from './src/index.vue'
import _SplitterPane from './src/splitter-pane.vue'

export const Splitter = withInstall(_Splitter, {
  SplitterPane: _SplitterPane,
})

export const SplitterPane = Splitter.SplitterPane

export * from './src/type'
