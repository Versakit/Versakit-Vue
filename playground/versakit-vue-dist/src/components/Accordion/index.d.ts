export declare const Accordion: import('@versakit/shared').SFCWithInstall<{
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./src/type').AccordionProps> & Readonly<{
        onChange?: ((value: string | string[] | undefined) => any) | undefined;
        "onUpdate:modelValue"?: ((value: string | string[] | undefined) => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        change: (value: string | string[] | undefined) => void;
        "update:modelValue": (value: string | string[] | undefined) => void;
    }, import('vue').PublicProps, {
        unstyled: boolean;
        disabled: boolean;
        variant: import('./src/type').AccordionVariant;
        bordered: boolean;
        radius: import('./src/type').AccordionRadius;
        multiple: boolean;
        animated: boolean;
    }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLDivElement, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('./src/type').AccordionProps> & Readonly<{
        onChange?: ((value: string | string[] | undefined) => any) | undefined;
        "onUpdate:modelValue"?: ((value: string | string[] | undefined) => any) | undefined;
    }>, {}, {}, {}, {}, {
        unstyled: boolean;
        disabled: boolean;
        variant: import('./src/type').AccordionVariant;
        bordered: boolean;
        radius: import('./src/type').AccordionRadius;
        multiple: boolean;
        animated: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('./src/type').AccordionProps> & Readonly<{
    onChange?: ((value: string | string[] | undefined) => any) | undefined;
    "onUpdate:modelValue"?: ((value: string | string[] | undefined) => any) | undefined;
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    change: (value: string | string[] | undefined) => void;
    "update:modelValue": (value: string | string[] | undefined) => void;
}, string, {
    unstyled: boolean;
    disabled: boolean;
    variant: import('./src/type').AccordionVariant;
    bordered: boolean;
    radius: import('./src/type').AccordionRadius;
    multiple: boolean;
    animated: boolean;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: {
        default?(_: {}): any;
    };
})> & Record<string, any>;
export declare const AccordionItem: import('@versakit/shared').SFCWithInstall<{
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./src/type').AccordionItemProps> & Readonly<{
        onClick?: ((e: MouseEvent) => any) | undefined;
        onToggle?: ((expanded: boolean) => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        click: (e: MouseEvent) => void;
        toggle: (expanded: boolean) => void;
    }, import('vue').PublicProps, {
        unstyled: boolean;
        disabled: boolean;
    }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {
        contentEl: HTMLDivElement;
    }, HTMLDivElement, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('./src/type').AccordionItemProps> & Readonly<{
        onClick?: ((e: MouseEvent) => any) | undefined;
        onToggle?: ((expanded: boolean) => any) | undefined;
    }>, {}, {}, {}, {}, {
        unstyled: boolean;
        disabled: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('./src/type').AccordionItemProps> & Readonly<{
    onClick?: ((e: MouseEvent) => any) | undefined;
    onToggle?: ((expanded: boolean) => any) | undefined;
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    click: (e: MouseEvent) => void;
    toggle: (expanded: boolean) => void;
}, string, {
    unstyled: boolean;
    disabled: boolean;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: {
        header?(_: {}): any;
        icon?(_: {}): any;
        default?(_: {}): any;
    };
})> & Record<string, any>;
