export interface TableColumn {
  key: string
  title: string
  width?: string | number
  align?: 'left' | 'center' | 'right'
}

export interface TableProps {
  data?: any[]
  columns?: TableColumn[]
  stripe?: boolean
  border?: boolean
  dense?: boolean
  emptyText?: string
}
