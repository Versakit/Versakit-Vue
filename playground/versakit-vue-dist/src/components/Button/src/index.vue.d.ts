import { ButtonProps } from './type';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        loading?(_: {}): any;
        icon?(_: {}): any;
        default?(_: {}): any;
    };
    refs: {
        _ref: HTMLButtonElement;
    };
    rootEl: HTMLButtonElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<ButtonProps, {
    _ref: import('vue').Ref<HTMLButtonElement | null, HTMLButtonElement | null>;
    handleClick: (e: MouseEvent) => void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    click: (evt: MouseEvent) => void;
}, string, import('vue').PublicProps, Readonly<ButtonProps> & Readonly<{
    onClick?: ((evt: MouseEvent) => any) | undefined;
}>, {
    size: import('./type').ButtonSize;
    unstyled: boolean;
    type: "button" | "submit" | "reset";
    disabled: boolean;
    variant: import('./type').ButtonVariant;
    rounded: boolean;
    fullWidth: boolean;
    loading: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    _ref: HTMLButtonElement;
}, HTMLButtonElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
