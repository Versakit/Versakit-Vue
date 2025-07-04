import { withInstall } from '@versakit/shared'
import SkeletonComponent from './src/index.vue'
import SkeletonTextComponent from './src/SkeletonText.vue'
import SkeletonAvatarComponent from './src/SkeletonAvatar.vue'

export const Skeleton = withInstall(SkeletonComponent)
export const SkeletonText = withInstall(SkeletonTextComponent)
export const SkeletonAvatar = withInstall(SkeletonAvatarComponent)
