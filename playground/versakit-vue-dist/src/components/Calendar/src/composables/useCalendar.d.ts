import { SetupContext } from 'vue';
import { CalendarProps, ICalendarEmits } from '../type';
export declare const useCalendar: (props: CalendarProps, emit: SetupContext<ICalendarEmits>["emit"]) => {
    currentDate: import('vue').Ref<Date, Date>;
    currentMonth: import('vue').Ref<number, number>;
    currentYear: import('vue').Ref<number, number>;
    weekdays: import('vue').ComputedRef<string[]>;
    daysInMonth: import('vue').ComputedRef<{
        date: Date;
        day: number;
        isCurrentMonth: boolean;
        isToday: boolean;
        isSelected: boolean | undefined;
        isDisabled: boolean | undefined;
    }[]>;
    monthName: import('vue').ComputedRef<string>;
    prevMonth: () => void;
    nextMonth: () => void;
    selectDate: (date: Date) => void;
};
