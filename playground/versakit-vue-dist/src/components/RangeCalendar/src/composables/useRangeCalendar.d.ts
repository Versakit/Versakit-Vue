import { SetupContext } from 'vue';
import { RangeCalendarProps, IRangeCalendarEmits } from '../type';
export declare const useRangeCalendar: (props: RangeCalendarProps, emit: SetupContext<IRangeCalendarEmits>["emit"]) => {
    startDate: import('vue').Ref<Date | null, Date | null>;
    endDate: import('vue').Ref<Date | null, Date | null>;
    currentMonth: import('vue').Ref<number, number>;
    currentYear: import('vue').Ref<number, number>;
    selectionMode: import('vue').Ref<"start" | "end", "start" | "end">;
    weekdays: import('vue').ComputedRef<string[]>;
    daysInMonth: import('vue').ComputedRef<{
        date: Date;
        day: number;
        isCurrentMonth: boolean;
        isToday: boolean;
        isSelected: boolean | null;
        isRangeStart: boolean | null;
        isRangeEnd: boolean | null;
        isInRange: boolean | null;
        isDisabled: boolean | undefined;
    }[]>;
    monthName: import('vue').ComputedRef<string>;
    prevMonth: () => void;
    nextMonth: () => void;
    selectDate: (date: Date) => void;
    resetSelection: () => void;
};
