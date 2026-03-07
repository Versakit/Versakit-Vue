import { RateProps } from './type';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        character?(_: {}): any;
        character?(_: {}): any;
        character?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<RateProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    change: (value: number) => void;
    "update:modelValue": (value: number) => void;
    "hover-change": (value: number) => void;
}, string, import('vue').PublicProps, Readonly<RateProps> & Readonly<{
    onChange?: ((value: number) => any) | undefined;
    "onUpdate:modelValue"?: ((value: number) => any) | undefined;
    "onHover-change"?: ((value: number) => any) | undefined;
}>, {
    size: "small" | "default" | "large";
    unstyled: boolean;
    color: "yellow" | "blue" | "green" | "red" | "purple";
    modelValue: number;
    disabled: boolean;
    max: number;
    readonly: boolean;
    allowHalf: boolean;
    showScore: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
