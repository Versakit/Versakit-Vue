import { postcssIsolateStyles } from 'vitepress'
import tailwindcss from '@tailwindcss/postcss'

export default {
  plugins: [
    tailwindcss(),
    postcssIsolateStyles({
      includeFiles: [/vp-doc\.css/, /base\.css/],
    }),
  ],
}
