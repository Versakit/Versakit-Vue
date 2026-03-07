export type TimePickerProps = {
    modelValue?: string | Date;
    disabled?: boolean;
    readonly?: boolean;
    placeholder?: string;
    format?: '12h' | '24h';
    hourStep?: number;
    minuteStep?: number;
    secondStep?: number;
    showSeconds?: boolean;
    clearable?: boolean;
    unstyled?: boolean;
    pt?: TimePickerPT;
};
export type TimePickerPT = {
    root?: string;
    input?: string;
    inputWrapper?: string;
    clearButton?: string;
    dropdown?: string;
    timeSelector?: string;
    column?: string;
    item?: string;
    itemSelected?: string;
};
export declare const TimePickerEmits: {
    'update:modelValue': (value: string | Date | null) => boolean;
    change: (value: string | Date | null) => boolean;
    focus: (e: FocusEvent) => boolean;
    blur: (e: FocusEvent) => boolean;
    clear: () => boolean;
};
export type ITimePickerEmits = typeof TimePickerEmits;
