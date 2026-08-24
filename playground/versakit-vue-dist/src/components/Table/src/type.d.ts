export interface TableColumn {
    key: string;
    title: string;
    width?: string | number;
    align?: 'left' | 'center' | 'right';
    sortable?: boolean;
    icon?: string;
}
export interface TableProps {
    data?: any[];
    columns?: TableColumn[];
    stripe?: boolean;
    border?: boolean;
    dense?: boolean;
    emptyText?: string;
    searchable?: boolean;
    searchPlaceholder?: string;
    pagination?: boolean;
    pageSize?: number;
    initialPage?: number;
    exportable?: boolean;
}
