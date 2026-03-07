import { RadioSize } from './type';
type __VLS_Props = {
    modelValue?: string | number | boolean;
    label?: string | number | boolean;
    disabled?: boolean;
    size?: RadioSize;
};
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLLabelElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    change: (value: string | number | boolean) => any;
    "update:modelValue": (value: string | number | boolean) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onChange?: ((value: string | number | boolean) => any) | undefined;
    "onUpdate:modelValue"?: ((value: string | number | boolean) => any) | undefined;
}>, {
    disabled: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLLabelElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
