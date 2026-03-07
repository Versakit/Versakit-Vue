export declare const Carousel: import('@versakit/shared').SFCWithInstall<{
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('.').CarouselProps> & Readonly<{
        onChange?: ((currentIndex: number, prevIndex: number) => any) | undefined;
        "onUpdate:active-index"?: ((index: number) => any) | undefined;
    }>, {
        next: () => void;
        prev: () => void;
        goToSlide: (index: number) => void;
    }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        change: (currentIndex: number, prevIndex: number) => void;
        "update:active-index": (index: number) => void;
    }, import('vue').PublicProps, {
        size: import('.').CarouselSize;
        unstyled: boolean;
        disabled: boolean;
        variant: import('.').CarouselVariant;
        autoplay: boolean;
        interval: number;
        loop: boolean;
        indicators: boolean;
        navigation: boolean;
        keyboardNavigation: boolean;
        touchSwipe: boolean;
        initialIndex: number;
    }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {
        rootRef: HTMLDivElement;
    }, HTMLDivElement, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('.').CarouselProps> & Readonly<{
        onChange?: ((currentIndex: number, prevIndex: number) => any) | undefined;
        "onUpdate:active-index"?: ((index: number) => any) | undefined;
    }>, {
        next: () => void;
        prev: () => void;
        goToSlide: (index: number) => void;
    }, {}, {}, {}, {
        size: import('.').CarouselSize;
        unstyled: boolean;
        disabled: boolean;
        variant: import('.').CarouselVariant;
        autoplay: boolean;
        interval: number;
        loop: boolean;
        indicators: boolean;
        navigation: boolean;
        keyboardNavigation: boolean;
        touchSwipe: boolean;
        initialIndex: number;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('.').CarouselProps> & Readonly<{
    onChange?: ((currentIndex: number, prevIndex: number) => any) | undefined;
    "onUpdate:active-index"?: ((index: number) => any) | undefined;
}>, {
    next: () => void;
    prev: () => void;
    goToSlide: (index: number) => void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    change: (currentIndex: number, prevIndex: number) => void;
    "update:active-index": (index: number) => void;
}, string, {
    size: import('.').CarouselSize;
    unstyled: boolean;
    disabled: boolean;
    variant: import('.').CarouselVariant;
    autoplay: boolean;
    interval: number;
    loop: boolean;
    indicators: boolean;
    navigation: boolean;
    keyboardNavigation: boolean;
    touchSwipe: boolean;
    initialIndex: number;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: Partial<Record<`item-${number}`, (_: {}) => any>> & {
        'prev-icon'?(_: {}): any;
        'next-icon'?(_: {}): any;
    };
})> & Record<string, any>;
export default Carousel;
export * from './src/type';
