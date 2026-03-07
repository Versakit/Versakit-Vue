export type DateTimePickerProps = {
    modelValue?: Date;
    min?: Date;
    max?: Date;
    disabled?: boolean;
    readonly?: boolean;
    placeholder?: string;
    dateFormat?: string;
    timeFormat?: '12h' | '24h';
    firstDayOfWeek?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
    locale?: string;
    hourStep?: number;
    minuteStep?: number;
    secondStep?: number;
    showSeconds?: boolean;
    clearable?: boolean;
    unstyled?: boolean;
    pt?: DateTimePickerPT;
};
export type DateTimePickerPT = {
    root?: string;
    input?: string;
    inputWrapper?: string;
    clearButton?: string;
    dropdown?: string;
    tabs?: string;
    tab?: string;
    activeTab?: string;
    tabContent?: string;
    datePicker?: DateTimePickerDatePT;
    timePicker?: DateTimePickerTimePT;
};
export type DateTimePickerDatePT = {
    root?: string;
    calendar?: Record<string, string>;
};
export type DateTimePickerTimePT = {
    root?: string;
    timeSelector?: string;
    column?: string;
    item?: string;
    itemSelected?: string;
};
export declare const DateTimePickerEmits: {
    'update:modelValue': (date: Date | null) => boolean;
    change: (date: Date | null) => boolean;
    focus: (e: FocusEvent) => boolean;
    blur: (e: FocusEvent) => boolean;
    clear: () => boolean;
};
export type IDateTimePickerEmits = typeof DateTimePickerEmits;
