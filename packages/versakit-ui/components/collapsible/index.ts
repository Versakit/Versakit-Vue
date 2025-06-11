import { withInstall } from '@versakit/shared'
import Collapsible from './src/index.vue'
import CollapsibleTrigger from './src/trigger.vue'
import CollapsibleContent from './src/content.vue'

export const VKCollapsible = withInstall(Collapsible, {
  Trigger: CollapsibleTrigger,
  Content: CollapsibleContent,
})

export type {
  CollapsibleProps,
  CollapsibleTriggerProps,
  CollapsibleContentProps,
} from './src/type'
