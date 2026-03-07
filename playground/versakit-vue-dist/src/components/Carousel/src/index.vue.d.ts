import { CarouselProps } from './type';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: Partial<Record<`item-${number}`, (_: {}) => any>> & {
        'prev-icon'?(_: {}): any;
        'next-icon'?(_: {}): any;
    };
    refs: {
        rootRef: HTMLDivElement;
    };
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<CarouselProps, {
    next: () => void;
    prev: () => void;
    goToSlide: (index: number) => void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    change: (currentIndex: number, prevIndex: number) => void;
    "update:active-index": (index: number) => void;
}, string, import('vue').PublicProps, Readonly<CarouselProps> & Readonly<{
    onChange?: ((currentIndex: number, prevIndex: number) => any) | undefined;
    "onUpdate:active-index"?: ((index: number) => any) | undefined;
}>, {
    size: import('./type').CarouselSize;
    unstyled: boolean;
    disabled: boolean;
    variant: import('./type').CarouselVariant;
    autoplay: boolean;
    interval: number;
    loop: boolean;
    indicators: boolean;
    navigation: boolean;
    keyboardNavigation: boolean;
    touchSwipe: boolean;
    initialIndex: number;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    rootRef: HTMLDivElement;
}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
