export declare const Button: import('@versakit/shared').SFCWithInstall<{
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./src/type').ButtonProps> & Readonly<{
        onClick?: ((evt: MouseEvent) => any) | undefined;
    }>, {
        _ref: import('vue').Ref<HTMLButtonElement | null, HTMLButtonElement | null>;
        handleClick: (e: MouseEvent) => void;
    }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        click: (evt: MouseEvent) => void;
    }, import('vue').PublicProps, {
        size: import('./src/type').ButtonSize;
        unstyled: boolean;
        type: "button" | "submit" | "reset";
        disabled: boolean;
        variant: import('./src/type').ButtonVariant;
        rounded: boolean;
        fullWidth: boolean;
        loading: boolean;
    }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {
        _ref: HTMLButtonElement;
    }, HTMLButtonElement, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('./src/type').ButtonProps> & Readonly<{
        onClick?: ((evt: MouseEvent) => any) | undefined;
    }>, {
        _ref: import('vue').Ref<HTMLButtonElement | null, HTMLButtonElement | null>;
        handleClick: (e: MouseEvent) => void;
    }, {}, {}, {}, {
        size: import('./src/type').ButtonSize;
        unstyled: boolean;
        type: "button" | "submit" | "reset";
        disabled: boolean;
        variant: import('./src/type').ButtonVariant;
        rounded: boolean;
        fullWidth: boolean;
        loading: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('./src/type').ButtonProps> & Readonly<{
    onClick?: ((evt: MouseEvent) => any) | undefined;
}>, {
    _ref: import('vue').Ref<HTMLButtonElement | null, HTMLButtonElement | null>;
    handleClick: (e: MouseEvent) => void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    click: (evt: MouseEvent) => void;
}, string, {
    size: import('./src/type').ButtonSize;
    unstyled: boolean;
    type: "button" | "submit" | "reset";
    disabled: boolean;
    variant: import('./src/type').ButtonVariant;
    rounded: boolean;
    fullWidth: boolean;
    loading: boolean;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: {
        loading?(_: {}): any;
        icon?(_: {}): any;
        default?(_: {}): any;
    };
})> & Record<string, any>;
