export type DatePickerProps = {
    modelValue?: Date;
    min?: Date;
    max?: Date;
    disabled?: boolean;
    readonly?: boolean;
    placeholder?: string;
    format?: string;
    firstDayOfWeek?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
    locale?: string;
    clearable?: boolean;
    unstyled?: boolean;
    pt?: DatePickerPT;
};
export type DatePickerPT = {
    root?: string;
    input?: string;
    inputWrapper?: string;
    clearButton?: string;
    dropdown?: string;
    calendar?: Record<string, string>;
};
export declare const DatePickerEmits: {
    'update:modelValue': (date: Date | null) => boolean;
    change: (date: Date | null) => boolean;
    focus: (e: FocusEvent) => boolean;
    blur: (e: FocusEvent) => boolean;
    clear: () => boolean;
};
export type IDatePickerEmits = typeof DatePickerEmits;
