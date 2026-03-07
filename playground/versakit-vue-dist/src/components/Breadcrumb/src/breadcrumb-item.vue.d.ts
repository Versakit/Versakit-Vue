import { BreadcrumbItemProps } from './type';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        separator?(_: {}): any;
        default?(_: {}): any;
        default?(_: {}): any;
    };
    refs: {
        _ref: HTMLLIElement;
    };
    rootEl: HTMLLIElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<BreadcrumbItemProps, {
    _ref: import('vue').Ref<HTMLElement | null, HTMLElement | null>;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    click: (evt: MouseEvent) => void;
}, string, import('vue').PublicProps, Readonly<BreadcrumbItemProps> & Readonly<{
    onClick?: ((evt: MouseEvent) => any) | undefined;
}>, {
    unstyled: boolean;
    disabled: boolean;
    active: boolean;
    href: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    _ref: HTMLLIElement;
}, HTMLLIElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
