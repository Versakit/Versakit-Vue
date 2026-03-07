import { SwapProps } from './type';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        on?(_: {}): any;
        off?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<SwapProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    change: () => any;
    "update:active": () => any;
}, string, import('vue').PublicProps, Readonly<SwapProps> & Readonly<{
    onChange?: (() => any) | undefined;
    "onUpdate:active"?: (() => any) | undefined;
}>, {
    size: import('./type').SwapSize;
    unstyled: boolean;
    disabled: boolean;
    active: boolean;
    trigger: import('./type').SwapTrigger;
    variant: import('./type').SwapVariant;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
