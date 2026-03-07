export declare const Modal: import('@versakit/shared').SFCWithInstall<{
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./src/type').ModalProps> & Readonly<{
        onClose?: (() => any) | undefined;
        "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
        close: () => any;
        "update:modelValue": (value: boolean) => any;
    }, import('vue').PublicProps, {
        size: import('./src/type').ModalSize;
        unstyled: boolean;
        modelValue: boolean;
        closeOnEsc: boolean;
        closeOnOverlayClick: boolean;
        hideCloseButton: boolean;
    }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {
        overlayRef: HTMLDivElement;
        modalRef: HTMLDivElement;
    }, any, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('./src/type').ModalProps> & Readonly<{
        onClose?: (() => any) | undefined;
        "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
    }>, {}, {}, {}, {}, {
        size: import('./src/type').ModalSize;
        unstyled: boolean;
        modelValue: boolean;
        closeOnEsc: boolean;
        closeOnOverlayClick: boolean;
        hideCloseButton: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('./src/type').ModalProps> & Readonly<{
    onClose?: (() => any) | undefined;
    "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    close: () => any;
    "update:modelValue": (value: boolean) => any;
}, string, {
    size: import('./src/type').ModalSize;
    unstyled: boolean;
    modelValue: boolean;
    closeOnEsc: boolean;
    closeOnOverlayClick: boolean;
    hideCloseButton: boolean;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: {
        header?(_: {}): any;
        'close-icon'?(_: {}): any;
        default?(_: {}): any;
        footer?(_: {}): any;
    };
})> & Record<string, any>;
