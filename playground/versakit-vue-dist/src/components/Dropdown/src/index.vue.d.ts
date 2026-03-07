import { DropdownProps } from './type';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        trigger?(_: {}): any;
        default?(_: {}): any;
    };
    refs: {
        triggerRef: HTMLDivElement;
        contentRef: HTMLDivElement;
    };
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<DropdownProps, {
    show: () => void;
    hide: () => void;
    toggle: () => void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    select: (_value: string | number, _event: MouseEvent) => void;
    show: () => void;
    hide: () => void;
    "update:visible": (visible: boolean) => void;
}, string, import('vue').PublicProps, Readonly<DropdownProps> & Readonly<{
    onSelect?: ((_value: string | number, _event: MouseEvent) => any) | undefined;
    onShow?: (() => any) | undefined;
    onHide?: (() => any) | undefined;
    "onUpdate:visible"?: ((visible: boolean) => any) | undefined;
}>, {
    size: import('./type').DropdownSize;
    unstyled: boolean;
    disabled: boolean;
    visible: boolean;
    placement: import('./type').DropdownPlacement;
    options: import('./type').DropdownOption[];
    trigger: import('./type').DropdownTrigger;
    arrow: boolean;
    showDelay: number;
    hideDelay: number;
    closeOnClickOutside: boolean;
    closeOnSelect: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    triggerRef: HTMLDivElement;
    contentRef: HTMLDivElement;
}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
