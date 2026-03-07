import { TimePickerProps } from './type';
declare const _default: import('vue').DefineComponent<TimePickerProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    blur: (e: FocusEvent) => void;
    change: (value: string | Date | null) => void;
    focus: (e: FocusEvent) => void;
    "update:modelValue": (value: string | Date | null) => void;
    clear: () => void;
}, string, import('vue').PublicProps, Readonly<TimePickerProps> & Readonly<{
    onBlur?: ((e: FocusEvent) => any) | undefined;
    onChange?: ((value: string | Date | null) => any) | undefined;
    onFocus?: ((e: FocusEvent) => any) | undefined;
    "onUpdate:modelValue"?: ((value: string | Date | null) => any) | undefined;
    onClear?: (() => any) | undefined;
}>, {
    unstyled: boolean;
    disabled: boolean;
    placeholder: string;
    readonly: boolean;
    clearable: boolean;
    format: "12h" | "24h";
    hourStep: number;
    minuteStep: number;
    secondStep: number;
    showSeconds: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    inputRef: HTMLInputElement;
    dropdownRef: HTMLDivElement;
    hourRef: HTMLDivElement;
    minuteRef: HTMLDivElement;
    secondRef: HTMLDivElement;
    ampmRef: HTMLDivElement;
}, HTMLDivElement>;
export default _default;
