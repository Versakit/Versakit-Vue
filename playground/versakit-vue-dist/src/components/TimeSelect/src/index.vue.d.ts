import { TimeSelectProps } from './type';
declare const _default: import('vue').DefineComponent<TimeSelectProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    blur: (e: FocusEvent) => void;
    change: (value: string | null) => void;
    focus: (e: FocusEvent) => void;
    "update:modelValue": (value: string | null) => void;
    clear: () => void;
}, string, import('vue').PublicProps, Readonly<TimeSelectProps> & Readonly<{
    onBlur?: ((e: FocusEvent) => any) | undefined;
    onChange?: ((value: string | null) => any) | undefined;
    onFocus?: ((e: FocusEvent) => any) | undefined;
    "onUpdate:modelValue"?: ((value: string | null) => any) | undefined;
    onClear?: (() => any) | undefined;
}>, {
    unstyled: boolean;
    disabled: boolean;
    step: number;
    start: string;
    end: string;
    placeholder: string;
    readonly: boolean;
    clearable: boolean;
    format: "12h" | "24h";
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    inputRef: HTMLInputElement;
    dropdownRef: HTMLDivElement;
}, HTMLDivElement>;
export default _default;
