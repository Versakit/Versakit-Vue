export declare const Checkbox: import('@versakit/shared').SFCWithInstall<{
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('.').CheckboxProps> & Readonly<{
        onChange?: ((...args: any[]) => any) | undefined;
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        change: (...args: any[]) => void;
        "update:modelValue": (...args: any[]) => void;
    }, import('vue').PublicProps, {
        size: import('.').CheckboxSize;
        unstyled: boolean;
        color: import('.').CheckboxColor;
        modelValue: boolean | string | number | any[];
        disabled: boolean;
    }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLLabelElement, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('.').CheckboxProps> & Readonly<{
        onChange?: ((...args: any[]) => any) | undefined;
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    }>, {}, {}, {}, {}, {
        size: import('.').CheckboxSize;
        unstyled: boolean;
        color: import('.').CheckboxColor;
        modelValue: boolean | string | number | any[];
        disabled: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('.').CheckboxProps> & Readonly<{
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    change: (...args: any[]) => void;
    "update:modelValue": (...args: any[]) => void;
}, string, {
    size: import('.').CheckboxSize;
    unstyled: boolean;
    color: import('.').CheckboxColor;
    modelValue: boolean | string | number | any[];
    disabled: boolean;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: {
        default?(_: {}): any;
    };
})> & Record<string, any>;
export declare const CheckboxGroup: import('@versakit/shared').SFCWithInstall<{
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<{
        modelValue?: (string | number | boolean)[];
        disabled?: boolean;
        size?: import('.').CheckboxSize;
        color?: import('.').CheckboxColor;
        direction?: import('.').CheckboxDirection;
        min?: number;
        max?: number;
    }> & Readonly<{
        onChange?: ((value: (string | number | boolean)[]) => any) | undefined;
        "onUpdate:modelValue"?: ((value: (string | number | boolean)[]) => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
        change: (value: (string | number | boolean)[]) => any;
        "update:modelValue": (value: (string | number | boolean)[]) => any;
    }, import('vue').PublicProps, {
        size: import('.').CheckboxSize;
        color: import('.').CheckboxColor;
        modelValue: (string | number | boolean)[];
        disabled: boolean;
        direction: import('.').CheckboxDirection;
    }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLDivElement, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<{
        modelValue?: (string | number | boolean)[];
        disabled?: boolean;
        size?: import('.').CheckboxSize;
        color?: import('.').CheckboxColor;
        direction?: import('.').CheckboxDirection;
        min?: number;
        max?: number;
    }> & Readonly<{
        onChange?: ((value: (string | number | boolean)[]) => any) | undefined;
        "onUpdate:modelValue"?: ((value: (string | number | boolean)[]) => any) | undefined;
    }>, {}, {}, {}, {}, {
        size: import('.').CheckboxSize;
        color: import('.').CheckboxColor;
        modelValue: (string | number | boolean)[];
        disabled: boolean;
        direction: import('.').CheckboxDirection;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<{
    modelValue?: (string | number | boolean)[];
    disabled?: boolean;
    size?: import('.').CheckboxSize;
    color?: import('.').CheckboxColor;
    direction?: import('.').CheckboxDirection;
    min?: number;
    max?: number;
}> & Readonly<{
    onChange?: ((value: (string | number | boolean)[]) => any) | undefined;
    "onUpdate:modelValue"?: ((value: (string | number | boolean)[]) => any) | undefined;
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    change: (value: (string | number | boolean)[]) => any;
    "update:modelValue": (value: (string | number | boolean)[]) => any;
}, string, {
    size: import('.').CheckboxSize;
    color: import('.').CheckboxColor;
    modelValue: (string | number | boolean)[];
    disabled: boolean;
    direction: import('.').CheckboxDirection;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: {
        default?(_: {}): any;
    };
})> & Record<string, any>;
export * from './src/type';
