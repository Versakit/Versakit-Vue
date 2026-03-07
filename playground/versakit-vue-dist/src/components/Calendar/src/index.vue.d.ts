import { CalendarProps } from './type';
declare const _default: import('vue').DefineComponent<CalendarProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    change: (date: Date | null) => void;
    "update:modelValue": (date: Date | null) => void;
}, string, import('vue').PublicProps, Readonly<CalendarProps> & Readonly<{
    onChange?: ((date: Date | null) => any) | undefined;
    "onUpdate:modelValue"?: ((date: Date | null) => any) | undefined;
}>, {
    unstyled: boolean;
    disabled: boolean;
    readonly: boolean;
    firstDayOfWeek: 0 | 1 | 2 | 3 | 4 | 5 | 6;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
