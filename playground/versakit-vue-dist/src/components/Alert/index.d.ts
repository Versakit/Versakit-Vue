export declare const Alert: import('@versakit/shared').SFCWithInstall<{
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./src/type').AlertProps> & Readonly<{
        onClose?: (() => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
        close: () => any;
    }, import('vue').PublicProps, {
        size: import('./src/type').AlertSize;
        unstyled: boolean;
        variant: import('./src/type').AlertVariant;
        shadow: boolean;
        closable: boolean;
        border: boolean;
        rounded: import('./src/type').AlertRounded;
        icon: boolean;
    }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('./src/type').AlertProps> & Readonly<{
        onClose?: (() => any) | undefined;
    }>, {}, {}, {}, {}, {
        size: import('./src/type').AlertSize;
        unstyled: boolean;
        variant: import('./src/type').AlertVariant;
        shadow: boolean;
        closable: boolean;
        border: boolean;
        rounded: import('./src/type').AlertRounded;
        icon: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('./src/type').AlertProps> & Readonly<{
    onClose?: (() => any) | undefined;
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    close: () => any;
}, string, {
    size: import('./src/type').AlertSize;
    unstyled: boolean;
    variant: import('./src/type').AlertVariant;
    shadow: boolean;
    closable: boolean;
    border: boolean;
    rounded: import('./src/type').AlertRounded;
    icon: boolean;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: {
        icon?(_: {}): any;
        title?(_: {}): any;
        default?(_: {}): any;
        'close-icon'?(_: {}): any;
    };
})> & Record<string, any>;
