export declare const DatePicker: import('@versakit/shared').SFCWithInstall<import('vue').DefineComponent<import('./src/type').DatePickerProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    blur: (e: FocusEvent) => void;
    change: (date: Date | null) => void;
    focus: (e: FocusEvent) => void;
    "update:modelValue": (date: Date | null) => void;
    clear: () => void;
}, string, import('vue').PublicProps, Readonly<import('./src/type').DatePickerProps> & Readonly<{
    onBlur?: ((e: FocusEvent) => any) | undefined;
    onChange?: ((date: Date | null) => any) | undefined;
    onFocus?: ((e: FocusEvent) => any) | undefined;
    "onUpdate:modelValue"?: ((date: Date | null) => any) | undefined;
    onClear?: (() => any) | undefined;
}>, {
    unstyled: boolean;
    disabled: boolean;
    placeholder: string;
    readonly: boolean;
    clearable: boolean;
    firstDayOfWeek: 0 | 1 | 2 | 3 | 4 | 5 | 6;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    inputRef: HTMLInputElement;
    dropdownRef: HTMLDivElement;
}, HTMLDivElement>> & Record<string, any>;
