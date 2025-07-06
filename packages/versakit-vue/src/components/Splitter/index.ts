import { withInstall } from '@versakit/shared'
import SplitterComponent from './src/splitter.vue'
import SplitterItemComponent from './src/splitter-item.vue'

export const Splitter = withInstall(SplitterComponent, {
  SplitterItem: SplitterItemComponent,
})

export const SplitterItem = Splitter.SplitterItem

export * from './src/type'
