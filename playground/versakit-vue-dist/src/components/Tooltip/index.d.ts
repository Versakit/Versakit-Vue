export declare const Tooltip: import('@versakit/shared').SFCWithInstall<{
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('.').TooltipProps> & Readonly<{
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
        color: "default" | "primary" | "success" | "warning" | "danger";
        modelValue: boolean;
        disabled: boolean;
        placement: "top" | "right" | "bottom" | "left";
        openDelay: number;
        closeDelay: number;
        offset: number;
        followCursor: boolean;
        unbound: boolean;
        trigger: "hover" | "focus" | "both";
        arrow: boolean;
    }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {
        triggerRef: HTMLSpanElement;
        tooltipRef: HTMLDivElement;
    }, any, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('.').TooltipProps> & Readonly<{
        "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
    }>, {
        show: () => void;
        hide: () => void;
        toggle: () => void;
        updatePosition: () => void;
    }, {}, {}, {}, {
        unstyled: boolean;
        color: "default" | "primary" | "success" | "warning" | "danger";
        modelValue: boolean;
        disabled: boolean;
        placement: "top" | "right" | "bottom" | "left";
        openDelay: number;
        closeDelay: number;
        offset: number;
        followCursor: boolean;
        unbound: boolean;
        trigger: "hover" | "focus" | "both";
        arrow: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('.').TooltipProps> & Readonly<{
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
    color: "default" | "primary" | "success" | "warning" | "danger";
    modelValue: boolean;
    disabled: boolean;
    placement: "top" | "right" | "bottom" | "left";
    openDelay: number;
    closeDelay: number;
    offset: number;
    followCursor: boolean;
    unbound: boolean;
    trigger: "hover" | "focus" | "both";
    arrow: boolean;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: {
        default?(_: {}): any;
        content?(_: {}): any;
    };
})> & Record<string, any>;
export type { TooltipProps } from './src/type';
