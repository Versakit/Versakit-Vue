import { AccordionProps } from './type';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<AccordionProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    change: (value: string | string[] | undefined) => void;
    "update:modelValue": (value: string | string[] | undefined) => void;
}, string, import('vue').PublicProps, Readonly<AccordionProps> & Readonly<{
    onChange?: ((value: string | string[] | undefined) => any) | undefined;
    "onUpdate:modelValue"?: ((value: string | string[] | undefined) => any) | undefined;
}>, {
    unstyled: boolean;
    disabled: boolean;
    variant: import('./type').AccordionVariant;
    bordered: boolean;
    radius: import('./type').AccordionRadius;
    multiple: boolean;
    animated: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
