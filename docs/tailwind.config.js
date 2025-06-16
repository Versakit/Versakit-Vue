/** @type {import('tailwindcss').Config} */
export default {
  // 由于Tailwind 4会自动检测内容，这里可以不指定content
  // 但如果需要，也可以明确指定
  content: [
    './.vitepress/**/*.{js,ts,vue}',
    './components/**/*.{js,ts,vue}',
    '../components/**/*.{js,ts,vue}',
    './**/*.md',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
