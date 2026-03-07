export declare const Select: import('@versakit/shared').SFCWithInstall<import('vue').DefineComponent<import('.').SelectProps, {
    open: () => void;
    close: () => void;
    clear: (e?: Event) => void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    search: (...args: any[]) => void;
    blur: (...args: any[]) => void;
    change: (...args: any[]) => void;
    focus: (...args: any[]) => void;
    "update:modelValue": (...args: any[]) => void;
    clear: (...args: any[]) => void;
    "dropdown-visible-change": (...args: any[]) => void;
    "option-select": (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<import('.').SelectProps> & Readonly<{
    onSearch?: ((...args: any[]) => any) | undefined;
    onBlur?: ((...args: any[]) => any) | undefined;
    onChange?: ((...args: any[]) => any) | undefined;
    onFocus?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onClear?: ((...args: any[]) => any) | undefined;
    "onDropdown-visible-change"?: ((...args: any[]) => any) | undefined;
    "onOption-select"?: ((...args: any[]) => any) | undefined;
}>, {
    size: "small" | "default" | "large";
    unstyled: boolean;
    required: boolean;
    disabled: boolean;
    options: import('.').SelectOption[];
    placeholder: string;
    readonly: boolean;
    clearable: boolean;
    multiple: boolean;
    filterable: boolean;
    noMatchText: string;
    maxDropdownHeight: number;
    showLabel: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    triggerRef: HTMLDivElement;
    dropdownRef: HTMLDivElement;
    searchInputRef: HTMLInputElement;
}, HTMLDivElement>> & Record<string, any>;
export * from './src/type';
