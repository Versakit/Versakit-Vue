export declare const Drawer: import('@versakit/shared').SFCWithInstall<{
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./src/type').DrawerProps> & Readonly<{
        onClose?: (() => any) | undefined;
        "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
        onOpen?: (() => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
        close: () => any;
        "update:modelValue": (value: boolean) => any;
        open: () => any;
    }, import('vue').PublicProps, {
        size: string | number;
        unstyled: boolean;
        closeOnEsc: boolean;
        closeOnOverlayClick: boolean;
        hideCloseButton: boolean;
        placement: import('./src/type').DrawerPlacement;
        showOverlay: boolean;
        preventScroll: boolean;
        zIndex: number;
    }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {
        overlayRef: HTMLDivElement;
        drawerRef: HTMLDivElement;
    }, any, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('./src/type').DrawerProps> & Readonly<{
        onClose?: (() => any) | undefined;
        "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
        onOpen?: (() => any) | undefined;
    }>, {}, {}, {}, {}, {
        size: string | number;
        unstyled: boolean;
        closeOnEsc: boolean;
        closeOnOverlayClick: boolean;
        hideCloseButton: boolean;
        placement: import('./src/type').DrawerPlacement;
        showOverlay: boolean;
        preventScroll: boolean;
        zIndex: number;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('./src/type').DrawerProps> & Readonly<{
    onClose?: (() => any) | undefined;
    "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
    onOpen?: (() => any) | undefined;
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    close: () => any;
    "update:modelValue": (value: boolean) => any;
    open: () => any;
}, string, {
    size: string | number;
    unstyled: boolean;
    closeOnEsc: boolean;
    closeOnOverlayClick: boolean;
    hideCloseButton: boolean;
    placement: import('./src/type').DrawerPlacement;
    showOverlay: boolean;
    preventScroll: boolean;
    zIndex: number;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: {
        header?(_: {}): any;
        'close-icon'?(_: {}): any;
        default?(_: {}): any;
        footer?(_: {}): any;
    };
})> & Record<string, any>;
