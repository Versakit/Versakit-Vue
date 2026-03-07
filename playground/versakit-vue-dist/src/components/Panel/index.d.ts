export declare const Panel: import('@versakit/shared').SFCWithInstall<{
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./src/type').PanelProps> & Readonly<{
        "onUpdate:collapsed"?: ((value: boolean) => any) | undefined;
        onCollapse?: ((value: boolean) => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        "update:collapsed": (value: boolean) => void;
        collapse: (value: boolean) => void;
    }, import('vue').PublicProps, {
        unstyled: boolean;
        variant: import('./src/type').PanelVariant;
        bordered: boolean;
        radius: import('./src/type').PanelRadius;
        padding: import('./src/type').PanelPadding;
        collapsible: boolean;
        defaultCollapsed: boolean;
    }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLDivElement, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('./src/type').PanelProps> & Readonly<{
        "onUpdate:collapsed"?: ((value: boolean) => any) | undefined;
        onCollapse?: ((value: boolean) => any) | undefined;
    }>, {}, {}, {}, {}, {
        unstyled: boolean;
        variant: import('./src/type').PanelVariant;
        bordered: boolean;
        radius: import('./src/type').PanelRadius;
        padding: import('./src/type').PanelPadding;
        collapsible: boolean;
        defaultCollapsed: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('./src/type').PanelProps> & Readonly<{
    "onUpdate:collapsed"?: ((value: boolean) => any) | undefined;
    onCollapse?: ((value: boolean) => any) | undefined;
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:collapsed": (value: boolean) => void;
    collapse: (value: boolean) => void;
}, string, {
    unstyled: boolean;
    variant: import('./src/type').PanelVariant;
    bordered: boolean;
    radius: import('./src/type').PanelRadius;
    padding: import('./src/type').PanelPadding;
    collapsible: boolean;
    defaultCollapsed: boolean;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: {
        title?(_: {}): any;
        icon?(_: {}): any;
        default?(_: {}): any;
    };
})> & Record<string, any>;
