import { ChipProps } from './type';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        avatar?(_: {
            class: string;
        }): any;
        avatarFallback?(_: {
            class: string;
        }): any;
        startContent?(_: {
            class: string;
        }): any;
        startContentFallback?(_: {
            class: string;
        }): any;
        default?(_: {}): any;
        endContent?(_: {
            class: string;
        }): any;
        endContentFallback?(_: {
            class: string;
        }): any;
    };
    refs: {};
    rootEl: HTMLSpanElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<ChipProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    close: (...args: any[]) => void;
    "update:modelValue": (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<ChipProps> & Readonly<{
    onClose?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}>, {
    size: import('./type').ChipSize;
    unstyled: boolean;
    color: import('./type').ChipColor;
    modelValue: boolean;
    disabled: boolean;
    variant: import('./type').ChipVariant;
    radius: import('./type').ChipRadius;
    selectable: boolean;
    closable: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLSpanElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
