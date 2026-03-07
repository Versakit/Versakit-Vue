export declare const Popover: import('@versakit/shared').SFCWithInstall<{
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./src/type').PopoverProps> & Readonly<{
        "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
    }>, {
        show: () => void;
        hide: () => void;
        toggle: () => void;
        updatePosition: () => void;
    }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
        "update:modelValue": (value: boolean) => any;
    }, import('vue').PublicProps, {
        unstyled: boolean;
        pt: import('./src/type').PopoverPT;
        color: "default" | "primary" | "success" | "warning" | "danger";
        modelValue: boolean;
        transition: string;
        placement: "top" | "right" | "bottom" | "left";
        zIndex: number;
        openDelay: number;
        closeDelay: number;
        offset: number;
        followCursor: boolean;
        unbound: boolean;
        trigger: "click" | "hover" | "manual";
        showArrow: boolean;
        teleport: boolean | string;
    }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {
        triggerRef: HTMLDivElement;
        popoverRef: HTMLDivElement;
    }, HTMLDivElement, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('./src/type').PopoverProps> & Readonly<{
        "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
    }>, {
        show: () => void;
        hide: () => void;
        toggle: () => void;
        updatePosition: () => void;
    }, {}, {}, {}, {
        unstyled: boolean;
        pt: import('./src/type').PopoverPT;
        color: "default" | "primary" | "success" | "warning" | "danger";
        modelValue: boolean;
        transition: string;
        placement: "top" | "right" | "bottom" | "left";
        zIndex: number;
        openDelay: number;
        closeDelay: number;
        offset: number;
        followCursor: boolean;
        unbound: boolean;
        trigger: "click" | "hover" | "manual";
        showArrow: boolean;
        teleport: boolean | string;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('./src/type').PopoverProps> & Readonly<{
    "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
}>, {
    show: () => void;
    hide: () => void;
    toggle: () => void;
    updatePosition: () => void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    "update:modelValue": (value: boolean) => any;
}, string, {
    unstyled: boolean;
    pt: import('./src/type').PopoverPT;
    color: "default" | "primary" | "success" | "warning" | "danger";
    modelValue: boolean;
    transition: string;
    placement: "top" | "right" | "bottom" | "left";
    zIndex: number;
    openDelay: number;
    closeDelay: number;
    offset: number;
    followCursor: boolean;
    unbound: boolean;
    trigger: "click" | "hover" | "manual";
    showArrow: boolean;
    teleport: boolean | string;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: {
        trigger?(_: {}): any;
        default?(_: {}): any;
    };
})> & Record<string, any>;
