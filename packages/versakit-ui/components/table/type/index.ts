export interface TableColumns {
  title: string
  dataIndex: string
  key: string
}

export interface TableProps {
  data: Record<string, any>[]
  columns: TableColumns[]
  border?: boolean
  stripe?: boolean
}
