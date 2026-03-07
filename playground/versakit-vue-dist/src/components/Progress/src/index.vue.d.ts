import { ProgressProps } from './type';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        text?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<ProgressProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:value": (value: number) => void;
}, string, import('vue').PublicProps, Readonly<ProgressProps> & Readonly<{
    "onUpdate:value"?: ((value: number) => any) | undefined;
}>, {
    size: import('./type').ProgressSize;
    unstyled: boolean;
    value: number;
    shape: import('./type').ProgressShape;
    max: number;
    variant: import('./type').ProgressVariant;
    striped: boolean;
    animated: boolean;
    indeterminate: boolean;
    showText: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
