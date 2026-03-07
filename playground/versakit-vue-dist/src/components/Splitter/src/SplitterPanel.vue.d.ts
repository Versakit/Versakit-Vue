import { SplitterPanelProps } from './type';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {
        panelRef: HTMLDivElement;
    };
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<SplitterPanelProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:collapsed": (collapsed: boolean) => void;
    "update:size": (size: string) => void;
}, string, import('vue').PublicProps, Readonly<SplitterPanelProps> & Readonly<{
    "onUpdate:collapsed"?: ((collapsed: boolean) => any) | undefined;
    "onUpdate:size"?: ((size: string) => any) | undefined;
}>, {
    size: string;
    collapsible: boolean;
    collapsed: boolean;
    minSize: string;
    maxSize: string;
    resizable: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    panelRef: HTMLDivElement;
}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
