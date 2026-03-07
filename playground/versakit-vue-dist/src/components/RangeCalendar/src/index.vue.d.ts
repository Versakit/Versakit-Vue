import { RangeCalendarProps } from './type';
declare const _default: import('vue').DefineComponent<RangeCalendarProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    change: (dates: [Date | null, Date | null]) => void;
    "update:modelValue": (dates: [Date | null, Date | null]) => void;
}, string, import('vue').PublicProps, Readonly<RangeCalendarProps> & Readonly<{
    onChange?: ((dates: [Date | null, Date | null]) => any) | undefined;
    "onUpdate:modelValue"?: ((dates: [Date | null, Date | null]) => any) | undefined;
}>, {
    unstyled: boolean;
    disabled: boolean;
    readonly: boolean;
    firstDayOfWeek: 0 | 1 | 2 | 3 | 4 | 5 | 6;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
