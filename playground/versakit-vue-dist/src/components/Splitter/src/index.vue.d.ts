import { SplitterProps } from './type';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: Partial<Record<`panel-${number}`, (_: {}) => any>> & Partial<Record<`panel-${number}-content`, (_: {}) => any>> & Partial<Record<`gutter-${number}`, (_: {}) => any>> & Partial<Record<`gutter-${number}-handle`, (_: {}) => any>>;
    refs: {
        rootRef: HTMLDivElement;
    };
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<SplitterProps, {
    toggleCollapse: (index: number) => void;
    initPanelSizes: () => void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    resize: (sizes: import('./type').SplitterPanelSize[]) => void;
    collapse: (index: number, collapsed: boolean) => void;
    "update:panels": (panels: import('./type').SplitterPanelSize[]) => void;
    "resize-start": (event: MouseEvent | TouchEvent) => void;
    "resize-end": (sizes: import('./type').SplitterPanelSize[]) => void;
    expand: (index: number, collapsed: boolean) => void;
}, string, import('vue').PublicProps, Readonly<SplitterProps> & Readonly<{
    onResize?: ((sizes: import('./type').SplitterPanelSize[]) => any) | undefined;
    onCollapse?: ((index: number, collapsed: boolean) => any) | undefined;
    "onUpdate:panels"?: ((panels: import('./type').SplitterPanelSize[]) => any) | undefined;
    "onResize-start"?: ((event: MouseEvent | TouchEvent) => any) | undefined;
    "onResize-end"?: ((sizes: import('./type').SplitterPanelSize[]) => any) | undefined;
    onExpand?: ((index: number, collapsed: boolean) => any) | undefined;
}>, {
    size: import('./type').SplitterSize;
    unstyled: boolean;
    solid: boolean;
    dashed: boolean;
    dotted: boolean;
    direction: import('./type').SplitterDirection;
    resizable: boolean;
    panels: import('./type').SplitterPanelSize[];
    showIndicator: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    rootRef: HTMLDivElement;
}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
