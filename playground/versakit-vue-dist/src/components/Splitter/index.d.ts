export declare const Splitter: import('@versakit/shared').SFCWithInstall<{
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('.').SplitterProps> & Readonly<{
        onResize?: ((sizes: import('.').SplitterPanelSize[]) => any) | undefined;
        onCollapse?: ((index: number, collapsed: boolean) => any) | undefined;
        "onUpdate:panels"?: ((panels: import('.').SplitterPanelSize[]) => any) | undefined;
        "onResize-start"?: ((event: MouseEvent | TouchEvent) => any) | undefined;
        "onResize-end"?: ((sizes: import('.').SplitterPanelSize[]) => any) | undefined;
        onExpand?: ((index: number, collapsed: boolean) => any) | undefined;
    }>, {
        toggleCollapse: (index: number) => void;
        initPanelSizes: () => void;
    }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        resize: (sizes: import('.').SplitterPanelSize[]) => void;
        collapse: (index: number, collapsed: boolean) => void;
        "update:panels": (panels: import('.').SplitterPanelSize[]) => void;
        "resize-start": (event: MouseEvent | TouchEvent) => void;
        "resize-end": (sizes: import('.').SplitterPanelSize[]) => void;
        expand: (index: number, collapsed: boolean) => void;
    }, import('vue').PublicProps, {
        size: import('.').SplitterSize;
        unstyled: boolean;
        solid: boolean;
        dashed: boolean;
        dotted: boolean;
        direction: import('.').SplitterDirection;
        resizable: boolean;
        panels: import('.').SplitterPanelSize[];
        showIndicator: boolean;
    }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {
        rootRef: HTMLDivElement;
    }, HTMLDivElement, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('.').SplitterProps> & Readonly<{
        onResize?: ((sizes: import('.').SplitterPanelSize[]) => any) | undefined;
        onCollapse?: ((index: number, collapsed: boolean) => any) | undefined;
        "onUpdate:panels"?: ((panels: import('.').SplitterPanelSize[]) => any) | undefined;
        "onResize-start"?: ((event: MouseEvent | TouchEvent) => any) | undefined;
        "onResize-end"?: ((sizes: import('.').SplitterPanelSize[]) => any) | undefined;
        onExpand?: ((index: number, collapsed: boolean) => any) | undefined;
    }>, {
        toggleCollapse: (index: number) => void;
        initPanelSizes: () => void;
    }, {}, {}, {}, {
        size: import('.').SplitterSize;
        unstyled: boolean;
        solid: boolean;
        dashed: boolean;
        dotted: boolean;
        direction: import('.').SplitterDirection;
        resizable: boolean;
        panels: import('.').SplitterPanelSize[];
        showIndicator: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('.').SplitterProps> & Readonly<{
    onResize?: ((sizes: import('.').SplitterPanelSize[]) => any) | undefined;
    onCollapse?: ((index: number, collapsed: boolean) => any) | undefined;
    "onUpdate:panels"?: ((panels: import('.').SplitterPanelSize[]) => any) | undefined;
    "onResize-start"?: ((event: MouseEvent | TouchEvent) => any) | undefined;
    "onResize-end"?: ((sizes: import('.').SplitterPanelSize[]) => any) | undefined;
    onExpand?: ((index: number, collapsed: boolean) => any) | undefined;
}>, {
    toggleCollapse: (index: number) => void;
    initPanelSizes: () => void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    resize: (sizes: import('.').SplitterPanelSize[]) => void;
    collapse: (index: number, collapsed: boolean) => void;
    "update:panels": (panels: import('.').SplitterPanelSize[]) => void;
    "resize-start": (event: MouseEvent | TouchEvent) => void;
    "resize-end": (sizes: import('.').SplitterPanelSize[]) => void;
    expand: (index: number, collapsed: boolean) => void;
}, string, {
    size: import('.').SplitterSize;
    unstyled: boolean;
    solid: boolean;
    dashed: boolean;
    dotted: boolean;
    direction: import('.').SplitterDirection;
    resizable: boolean;
    panels: import('.').SplitterPanelSize[];
    showIndicator: boolean;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: Partial<Record<`panel-${number}`, (_: {}) => any>> & Partial<Record<`panel-${number}-content`, (_: {}) => any>> & Partial<Record<`gutter-${number}`, (_: {}) => any>> & Partial<Record<`gutter-${number}-handle`, (_: {}) => any>>;
})> & Record<string, any>;
export declare const SplitterPanel: import('@versakit/shared').SFCWithInstall<{
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('.').SplitterPanelProps> & Readonly<{
        "onUpdate:collapsed"?: ((collapsed: boolean) => any) | undefined;
        "onUpdate:size"?: ((size: string) => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        "update:collapsed": (collapsed: boolean) => void;
        "update:size": (size: string) => void;
    }, import('vue').PublicProps, {
        size: string;
        collapsible: boolean;
        collapsed: boolean;
        minSize: string;
        maxSize: string;
        resizable: boolean;
    }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {
        panelRef: HTMLDivElement;
    }, HTMLDivElement, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('.').SplitterPanelProps> & Readonly<{
        "onUpdate:collapsed"?: ((collapsed: boolean) => any) | undefined;
        "onUpdate:size"?: ((size: string) => any) | undefined;
    }>, {}, {}, {}, {}, {
        size: string;
        collapsible: boolean;
        collapsed: boolean;
        minSize: string;
        maxSize: string;
        resizable: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('.').SplitterPanelProps> & Readonly<{
    "onUpdate:collapsed"?: ((collapsed: boolean) => any) | undefined;
    "onUpdate:size"?: ((size: string) => any) | undefined;
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:collapsed": (collapsed: boolean) => void;
    "update:size": (size: string) => void;
}, string, {
    size: string;
    collapsible: boolean;
    collapsed: boolean;
    minSize: string;
    maxSize: string;
    resizable: boolean;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: {
        default?(_: {}): any;
    };
})> & Record<string, any>;
export * from './src/type';
export default Splitter;
