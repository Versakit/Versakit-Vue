export declare const Paginator: import('@versakit/shared').SFCWithInstall<{
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./src/type').PaginatorProps> & Readonly<{
        onChange?: ((value: number) => any) | undefined;
        "onUpdate:modelValue"?: ((value: number) => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        change: (value: number) => void;
        "update:modelValue": (value: number) => void;
    }, import('vue').PublicProps, {
        size: import('./src/type').PaginatorSize;
        unstyled: boolean;
        modelValue: number;
        disabled: boolean;
        shape: import('./src/type').PaginatorShape;
        variant: import('./src/type').PaginatorVariant;
        visiblePageCount: number;
        showEndButtons: boolean;
        showPrevNextButtons: boolean;
        showJumper: boolean;
    }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLElement, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('./src/type').PaginatorProps> & Readonly<{
        onChange?: ((value: number) => any) | undefined;
        "onUpdate:modelValue"?: ((value: number) => any) | undefined;
    }>, {}, {}, {}, {}, {
        size: import('./src/type').PaginatorSize;
        unstyled: boolean;
        modelValue: number;
        disabled: boolean;
        shape: import('./src/type').PaginatorShape;
        variant: import('./src/type').PaginatorVariant;
        visiblePageCount: number;
        showEndButtons: boolean;
        showPrevNextButtons: boolean;
        showJumper: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('./src/type').PaginatorProps> & Readonly<{
    onChange?: ((value: number) => any) | undefined;
    "onUpdate:modelValue"?: ((value: number) => any) | undefined;
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    change: (value: number) => void;
    "update:modelValue": (value: number) => void;
}, string, {
    size: import('./src/type').PaginatorSize;
    unstyled: boolean;
    modelValue: number;
    disabled: boolean;
    shape: import('./src/type').PaginatorShape;
    variant: import('./src/type').PaginatorVariant;
    visiblePageCount: number;
    showEndButtons: boolean;
    showPrevNextButtons: boolean;
    showJumper: boolean;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: {
        'first-button'?(_: {}): any;
        'prev-button'?(_: {}): any;
        'next-button'?(_: {}): any;
        'last-button'?(_: {}): any;
    };
})> & Record<string, any>;
