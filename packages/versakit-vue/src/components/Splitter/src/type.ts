export type SplitterProps = {
  layout?: 'horizontal' | 'vertical'
  gutterSize?: number
  minSize?: number | number[]
  unstyled?: boolean
  pt?: SplitterPT
}

export type SplitterPT = {
  root?: string
  gutter?: string
  gutterHandler?: string
}

export type SplitterItemProps = {
  size?: number
  minSize?: number
  unstyled?: boolean
  pt?: SplitterItemPT
}

export type SplitterItemPT = {
  root?: string
}

export const SplitterEmits = {
  resize: (sizes: number[]) => Array.isArray(sizes),
  resizeStart: (e: MouseEvent | TouchEvent) =>
    e instanceof MouseEvent || e instanceof TouchEvent,
  resizeEnd: (sizes: number[]) => Array.isArray(sizes),
}

export type ISplitterEmits = typeof SplitterEmits
