export declare const Dropdown: import('@versakit/shared').SFCWithInstall<{
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('.').DropdownProps> & Readonly<{
        onSelect?: ((_value: string | number, _event: MouseEvent) => any) | undefined;
        onShow?: (() => any) | undefined;
        onHide?: (() => any) | undefined;
        "onUpdate:visible"?: ((visible: boolean) => any) | undefined;
    }>, {
        show: () => void;
        hide: () => void;
        toggle: () => void;
    }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        select: (_value: string | number, _event: MouseEvent) => void;
        show: () => void;
        hide: () => void;
        "update:visible": (visible: boolean) => void;
    }, import('vue').PublicProps, {
        size: import('.').DropdownSize;
        unstyled: boolean;
        disabled: boolean;
        visible: boolean;
        placement: import('.').DropdownPlacement;
        options: import('.').DropdownOption[];
        trigger: import('.').DropdownTrigger;
        arrow: boolean;
        showDelay: number;
        hideDelay: number;
        closeOnClickOutside: boolean;
        closeOnSelect: boolean;
    }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {
        triggerRef: HTMLDivElement;
        contentRef: HTMLDivElement;
    }, HTMLDivElement, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('.').DropdownProps> & Readonly<{
        onSelect?: ((_value: string | number, _event: MouseEvent) => any) | undefined;
        onShow?: (() => any) | undefined;
        onHide?: (() => any) | undefined;
        "onUpdate:visible"?: ((visible: boolean) => any) | undefined;
    }>, {
        show: () => void;
        hide: () => void;
        toggle: () => void;
    }, {}, {}, {}, {
        size: import('.').DropdownSize;
        unstyled: boolean;
        disabled: boolean;
        visible: boolean;
        placement: import('.').DropdownPlacement;
        options: import('.').DropdownOption[];
        trigger: import('.').DropdownTrigger;
        arrow: boolean;
        showDelay: number;
        hideDelay: number;
        closeOnClickOutside: boolean;
        closeOnSelect: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('.').DropdownProps> & Readonly<{
    onSelect?: ((_value: string | number, _event: MouseEvent) => any) | undefined;
    onShow?: (() => any) | undefined;
    onHide?: (() => any) | undefined;
    "onUpdate:visible"?: ((visible: boolean) => any) | undefined;
}>, {
    show: () => void;
    hide: () => void;
    toggle: () => void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    select: (_value: string | number, _event: MouseEvent) => void;
    show: () => void;
    hide: () => void;
    "update:visible": (visible: boolean) => void;
}, string, {
    size: import('.').DropdownSize;
    unstyled: boolean;
    disabled: boolean;
    visible: boolean;
    placement: import('.').DropdownPlacement;
    options: import('.').DropdownOption[];
    trigger: import('.').DropdownTrigger;
    arrow: boolean;
    showDelay: number;
    hideDelay: number;
    closeOnClickOutside: boolean;
    closeOnSelect: boolean;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: {
        trigger?(_: {}): any;
        default?(_: {}): any;
    };
})> & Record<string, any>;
export declare const DropdownItem: import('@versakit/shared').SFCWithInstall<{
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('.').DropdownItemProps> & Readonly<{
        onClick?: ((event: MouseEvent) => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        click: (event: MouseEvent) => void;
    }, import('vue').PublicProps, {
        unstyled: boolean;
        disabled: boolean;
        active: boolean;
        divider: boolean;
    }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('.').DropdownItemProps> & Readonly<{
        onClick?: ((event: MouseEvent) => any) | undefined;
    }>, {}, {}, {}, {}, {
        unstyled: boolean;
        disabled: boolean;
        active: boolean;
        divider: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('.').DropdownItemProps> & Readonly<{
    onClick?: ((event: MouseEvent) => any) | undefined;
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    click: (event: MouseEvent) => void;
}, string, {
    unstyled: boolean;
    disabled: boolean;
    active: boolean;
    divider: boolean;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: {
        icon?(_: {}): any;
        default?(_: {}): any;
    };
})> & Record<string, any>;
export declare const DropdownDivider: import('@versakit/shared').SFCWithInstall<import('vue').DefineComponent<import('.').DropdownDividerProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('.').DropdownDividerProps> & Readonly<{}>, {
    unstyled: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>> & Record<string, any>;
export * from './src/type';
export default Dropdown;
