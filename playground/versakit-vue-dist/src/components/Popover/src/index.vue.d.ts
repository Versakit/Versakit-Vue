import { PopoverProps } from './type';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        trigger?(_: {}): any;
        default?(_: {}): any;
    };
    refs: {
        triggerRef: HTMLDivElement;
        popoverRef: HTMLDivElement;
    };
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<PopoverProps, {
    show: () => void;
    hide: () => void;
    toggle: () => void;
    updatePosition: () => void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    "update:modelValue": (value: boolean) => any;
}, string, import('vue').PublicProps, Readonly<PopoverProps> & Readonly<{
    "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
}>, {
    unstyled: boolean;
    pt: import('./type').PopoverPT;
    color: "default" | "primary" | "success" | "warning" | "danger";
    modelValue: boolean;
    transition: string;
    placement: "top" | "right" | "bottom" | "left";
    zIndex: number;
    openDelay: number;
    closeDelay: number;
    offset: number;
    followCursor: boolean;
    unbound: boolean;
    trigger: "click" | "hover" | "manual";
    showArrow: boolean;
    teleport: boolean | string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    triggerRef: HTMLDivElement;
    popoverRef: HTMLDivElement;
}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
