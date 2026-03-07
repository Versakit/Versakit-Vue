export declare const Link: import('@versakit/shared').SFCWithInstall<{
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('.').LinkProps> & Readonly<{
        onClick?: ((evt: MouseEvent) => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        click: (evt: MouseEvent) => void;
    }, import('vue').PublicProps, {
        size: import('.').LinkSize;
        unstyled: boolean;
        disabled: boolean;
        variant: import('.').LinkVariant;
        underline: boolean;
        href: string;
        external: boolean;
        iconPosition: "left" | "right";
    }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLAnchorElement, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('.').LinkProps> & Readonly<{
        onClick?: ((evt: MouseEvent) => any) | undefined;
    }>, {}, {}, {}, {}, {
        size: import('.').LinkSize;
        unstyled: boolean;
        disabled: boolean;
        variant: import('.').LinkVariant;
        underline: boolean;
        href: string;
        external: boolean;
        iconPosition: "left" | "right";
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('.').LinkProps> & Readonly<{
    onClick?: ((evt: MouseEvent) => any) | undefined;
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    click: (evt: MouseEvent) => void;
}, string, {
    size: import('.').LinkSize;
    unstyled: boolean;
    disabled: boolean;
    variant: import('.').LinkVariant;
    underline: boolean;
    href: string;
    external: boolean;
    iconPosition: "left" | "right";
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: {
        'icon-left'?(_: {}): any;
        'icon-left'?(_: {}): any;
        default?(_: {}): any;
        'icon-right'?(_: {}): any;
        'icon-right'?(_: {}): any;
    };
})> & Record<string, any>;
export * from './src/type';
export default Link;
