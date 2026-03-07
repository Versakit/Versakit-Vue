import { AccordionItemProps } from './type';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        header?(_: {}): any;
        icon?(_: {}): any;
        default?(_: {}): any;
    };
    refs: {
        contentEl: HTMLDivElement;
    };
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<AccordionItemProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    click: (e: MouseEvent) => void;
    toggle: (expanded: boolean) => void;
}, string, import('vue').PublicProps, Readonly<AccordionItemProps> & Readonly<{
    onClick?: ((e: MouseEvent) => any) | undefined;
    onToggle?: ((expanded: boolean) => any) | undefined;
}>, {
    unstyled: boolean;
    disabled: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    contentEl: HTMLDivElement;
}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
