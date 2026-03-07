export declare const Input: import('@versakit/shared').SFCWithInstall<import('vue').DefineComponent<import('./src/type').InputProps, {
    focus: () => void;
    blur: () => void;
    inputRef: import('vue').Ref<HTMLInputElement | null, HTMLInputElement | null>;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    blur: (...args: any[]) => void;
    focus: (...args: any[]) => void;
    "update:modelValue": (...args: any[]) => void;
    clear: (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<import('./src/type').InputProps> & Readonly<{
    onBlur?: ((...args: any[]) => any) | undefined;
    onFocus?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onClear?: ((...args: any[]) => any) | undefined;
}>, {
    size: import('./src/type').InputSize;
    unstyled: boolean;
    type: import('./src/type').InputType;
    modelValue: string | number;
    disabled: boolean;
    readonly: boolean;
    showCount: boolean;
    clearable: boolean;
    autofocus: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    inputRef: HTMLInputElement;
}, HTMLDivElement>> & Record<string, any>;
