import { DefaultTheme } from 'vitepress'

export const getComposables = (): DefaultTheme.Sidebar => {
  return [
    {
      text: 'Composables',
      items: [
        { text: 'useTabs', link: '/composables/tabs/' },
        { text: 'useDialog', link: '/composables/dialog/' },
        { text: 'useDrawer', link: '/composables/drawer/' },
        { text: 'usePinInput', link: '/composables/pininput/' },
        { text: 'useSwitch', link: '/composables/switch/' },
        { text: 'useSlider', link: '/composables/slider/' },
        { text: 'useSegmented', link: '/composables/segmented/' },
      ],
    },
  ]
}
