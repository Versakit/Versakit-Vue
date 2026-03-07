export type TimeSelectProps = {
    modelValue?: string;
    disabled?: boolean;
    readonly?: boolean;
    placeholder?: string;
    options?: string[];
    start?: string;
    end?: string;
    step?: number;
    format?: '12h' | '24h';
    clearable?: boolean;
    unstyled?: boolean;
    pt?: TimeSelectPT;
};
export type TimeSelectPT = {
    root?: string;
    input?: string;
    inputWrapper?: string;
    clearButton?: string;
    dropdown?: string;
    optionsList?: string;
    option?: string;
    optionSelected?: string;
};
export declare const TimeSelectEmits: {
    'update:modelValue': (value: string | null) => boolean;
    change: (value: string | null) => boolean;
    focus: (e: FocusEvent) => boolean;
    blur: (e: FocusEvent) => boolean;
    clear: () => boolean;
};
export type ITimeSelectEmits = typeof TimeSelectEmits;
