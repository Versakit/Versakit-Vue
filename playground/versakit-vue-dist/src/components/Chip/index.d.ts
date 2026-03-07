export declare const Chip: import('@versakit/shared').SFCWithInstall<{
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./src/type').ChipProps> & Readonly<{
        onClose?: ((...args: any[]) => any) | undefined;
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        close: (...args: any[]) => void;
        "update:modelValue": (...args: any[]) => void;
    }, import('vue').PublicProps, {
        size: import('./src/type').ChipSize;
        unstyled: boolean;
        color: import('./src/type').ChipColor;
        modelValue: boolean;
        disabled: boolean;
        variant: import('./src/type').ChipVariant;
        radius: import('./src/type').ChipRadius;
        selectable: boolean;
        closable: boolean;
    }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLSpanElement, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('./src/type').ChipProps> & Readonly<{
        onClose?: ((...args: any[]) => any) | undefined;
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    }>, {}, {}, {}, {}, {
        size: import('./src/type').ChipSize;
        unstyled: boolean;
        color: import('./src/type').ChipColor;
        modelValue: boolean;
        disabled: boolean;
        variant: import('./src/type').ChipVariant;
        radius: import('./src/type').ChipRadius;
        selectable: boolean;
        closable: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('./src/type').ChipProps> & Readonly<{
    onClose?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    close: (...args: any[]) => void;
    "update:modelValue": (...args: any[]) => void;
}, string, {
    size: import('./src/type').ChipSize;
    unstyled: boolean;
    color: import('./src/type').ChipColor;
    modelValue: boolean;
    disabled: boolean;
    variant: import('./src/type').ChipVariant;
    radius: import('./src/type').ChipRadius;
    selectable: boolean;
    closable: boolean;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: {
        avatar?(_: {
            class: string;
        }): any;
        avatarFallback?(_: {
            class: string;
        }): any;
        startContent?(_: {
            class: string;
        }): any;
        startContentFallback?(_: {
            class: string;
        }): any;
        default?(_: {}): any;
        endContent?(_: {
            class: string;
        }): any;
        endContentFallback?(_: {
            class: string;
        }): any;
    };
})> & Record<string, any>;
