export type SplitterDirection = 'horizontal' | 'vertical';
export type SplitterSize = 'sm' | 'md' | 'lg';
export interface SplitterPanelSize {
    /**
     * 面板的大小，可以是像素值或百分比
     */
    size?: string;
    /**
     * 最小大小，可以是像素值或百分比
     */
    minSize?: string;
    /**
     * 最大大小，可以是像素值或百分比
     */
    maxSize?: string;
    /**
     * 是否可调整大小
     */
    resizable?: boolean;
    /**
     * 是否可折叠
     */
    collapsible?: boolean;
    /**
     * 是否已折叠
     */
    collapsed?: boolean;
    /**
     * 保存折叠前的尺寸（内部使用）
     * @internal
     */
    _savedSize?: string;
}
export type SplitterProps = {
    /**
     * 分割方向
     * @default 'horizontal'
     */
    direction?: SplitterDirection;
    /**
     * 分割条大小
     * @default 'md'
     */
    size?: SplitterSize;
    /**
     * 面板初始大小配置
     */
    panels?: SplitterPanelSize[];
    /**
     * 分割条是否为实线
     * @default false
     */
    solid?: boolean;
    /**
     * 分割条是否可以拖动
     * @default true
     */
    resizable?: boolean;
    /**
     * 分割条是否为点状线
     * @default false
     */
    dotted?: boolean;
    /**
     * 分割条是否为虚线
     * @default false
     */
    dashed?: boolean;
    /**
     * 鼠标悬停时是否显示分割条指示器
     * @default true
     */
    showIndicator?: boolean;
    /**
     * 是否无样式
     * @default false
     */
    unstyled?: boolean;
    /**
     * 自定义样式
     */
    pt?: SplitterPT;
};
export type SplitterPT = {
    root?: string;
    wrapper?: string;
    panel?: string;
    gutter?: string;
    gutterHandle?: string;
    gutterIcon?: string;
};
export declare const SplitterEmits: {
    'update:panels': (panels: SplitterPanelSize[]) => boolean;
    'resize-start': (event: MouseEvent | TouchEvent) => boolean;
    resize: (sizes: SplitterPanelSize[]) => boolean;
    'resize-end': (sizes: SplitterPanelSize[]) => boolean;
    collapse: (index: number, collapsed: boolean) => boolean;
    expand: (index: number, collapsed: boolean) => boolean;
};
export type SplitterPanelProps = {
    /**
     * 面板大小
     * @default '1fr'
     */
    size?: string;
    /**
     * 最小大小
     * @default '0'
     */
    minSize?: string;
    /**
     * 最大大小
     * @default '1fr'
     */
    maxSize?: string;
    /**
     * 是否可调整大小
     * @default true
     */
    resizable?: boolean;
    /**
     * 是否可折叠
     * @default false
     */
    collapsible?: boolean;
    /**
     * 是否已折叠
     * @default false
     */
    collapsed?: boolean;
    /**
     * 是否无样式
     * @default false
     */
    unstyled?: boolean;
    /**
     * 自定义样式
     */
    pt?: SplitterPanelPT;
};
export type SplitterPanelPT = {
    root?: string;
    content?: string;
};
export declare const SplitterPanelEmits: {
    'update:size': (size: string) => boolean;
    'update:collapsed': (collapsed: boolean) => boolean;
};
