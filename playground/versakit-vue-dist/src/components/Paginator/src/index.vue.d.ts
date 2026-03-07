import { PaginatorProps } from './type';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        'first-button'?(_: {}): any;
        'prev-button'?(_: {}): any;
        'next-button'?(_: {}): any;
        'last-button'?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<PaginatorProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    change: (value: number) => void;
    "update:modelValue": (value: number) => void;
}, string, import('vue').PublicProps, Readonly<PaginatorProps> & Readonly<{
    onChange?: ((value: number) => any) | undefined;
    "onUpdate:modelValue"?: ((value: number) => any) | undefined;
}>, {
    size: import('./type').PaginatorSize;
    unstyled: boolean;
    modelValue: number;
    disabled: boolean;
    shape: import('./type').PaginatorShape;
    variant: import('./type').PaginatorVariant;
    visiblePageCount: number;
    showEndButtons: boolean;
    showPrevNextButtons: boolean;
    showJumper: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
