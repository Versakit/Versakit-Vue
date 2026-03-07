import { PanelProps } from './type';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        title?(_: {}): any;
        icon?(_: {}): any;
        default?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<PanelProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:collapsed": (value: boolean) => void;
    collapse: (value: boolean) => void;
}, string, import('vue').PublicProps, Readonly<PanelProps> & Readonly<{
    "onUpdate:collapsed"?: ((value: boolean) => any) | undefined;
    onCollapse?: ((value: boolean) => any) | undefined;
}>, {
    unstyled: boolean;
    variant: import('./type').PanelVariant;
    bordered: boolean;
    radius: import('./type').PanelRadius;
    padding: import('./type').PanelPadding;
    collapsible: boolean;
    defaultCollapsed: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
