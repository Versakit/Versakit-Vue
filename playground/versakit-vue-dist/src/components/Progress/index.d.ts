export declare const Progress: import('@versakit/shared').SFCWithInstall<{
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./src/type').ProgressProps> & Readonly<{
        "onUpdate:value"?: ((value: number) => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        "update:value": (value: number) => void;
    }, import('vue').PublicProps, {
        size: import('./src/type').ProgressSize;
        unstyled: boolean;
        value: number;
        shape: import('./src/type').ProgressShape;
        max: number;
        variant: import('./src/type').ProgressVariant;
        striped: boolean;
        animated: boolean;
        indeterminate: boolean;
        showText: boolean;
    }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLDivElement, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('./src/type').ProgressProps> & Readonly<{
        "onUpdate:value"?: ((value: number) => any) | undefined;
    }>, {}, {}, {}, {}, {
        size: import('./src/type').ProgressSize;
        unstyled: boolean;
        value: number;
        shape: import('./src/type').ProgressShape;
        max: number;
        variant: import('./src/type').ProgressVariant;
        striped: boolean;
        animated: boolean;
        indeterminate: boolean;
        showText: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('./src/type').ProgressProps> & Readonly<{
    "onUpdate:value"?: ((value: number) => any) | undefined;
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:value": (value: number) => void;
}, string, {
    size: import('./src/type').ProgressSize;
    unstyled: boolean;
    value: number;
    shape: import('./src/type').ProgressShape;
    max: number;
    variant: import('./src/type').ProgressVariant;
    striped: boolean;
    animated: boolean;
    indeterminate: boolean;
    showText: boolean;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: {
        text?(_: {}): any;
    };
})> & Record<string, any>;
