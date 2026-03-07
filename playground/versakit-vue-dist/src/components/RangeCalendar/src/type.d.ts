export type RangeCalendarProps = {
    modelValue?: [Date | null, Date | null];
    min?: Date;
    max?: Date;
    disabled?: boolean;
    readonly?: boolean;
    firstDayOfWeek?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
    locale?: string;
    unstyled?: boolean;
    pt?: RangeCalendarPT;
};
export type RangeCalendarPT = {
    root?: string;
    header?: string;
    title?: string;
    navigation?: string;
    navButton?: string;
    weekdays?: string;
    weekday?: string;
    days?: string;
    day?: string;
    today?: string;
    selected?: string;
    inRange?: string;
    rangeStart?: string;
    rangeEnd?: string;
    disabled?: string;
    adjacent?: string;
};
export declare const RangeCalendarEmits: {
    'update:modelValue': (dates: [Date | null, Date | null]) => boolean;
    change: (dates: [Date | null, Date | null]) => boolean;
};
export type IRangeCalendarEmits = typeof RangeCalendarEmits;
