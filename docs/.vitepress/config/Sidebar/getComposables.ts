import { DefaultTheme } from 'vitepress'

export const getComposables = (): DefaultTheme.Sidebar => {
  return [
    {
      text: 'Composables',
      items: [
        { text: 'useAvatar', link: '/composables/avatar/' },
        { text: 'useBadge', link: '/composables/badge/' },
        { text: 'useDialog', link: '/composables/dialog/' },
        { text: 'useDrawer', link: '/composables/drawer/' },
        { text: 'usePinInput', link: '/composables/pininput/' },
        { text: 'usePopover', link: '/composables/popover/' },
        { text: 'useSegmented', link: '/composables/segmented/' },
        { text: 'useSlider', link: '/composables/slider/' },
        { text: 'useSwitch', link: '/composables/switch/' },
        { text: 'useTabs', link: '/composables/tabs/' },
        { text: 'useTooltip', link: '/composables/tooltip/' },
      ],
    },
  ]
}
