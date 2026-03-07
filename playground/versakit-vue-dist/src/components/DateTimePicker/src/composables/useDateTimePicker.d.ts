import { SetupContext } from 'vue';
import { DateTimePickerProps, IDateTimePickerEmits } from '../type';
export declare const useDateTimePicker: (props: DateTimePickerProps, emit: SetupContext<IDateTimePickerEmits>["emit"]) => {
    isOpen: import('vue').Ref<boolean, boolean>;
    activeTab: import('vue').Ref<"time" | "date", "time" | "date">;
    inputRef: import('vue').Ref<HTMLInputElement | null, HTMLInputElement | null>;
    dropdownRef: import('vue').Ref<HTMLDivElement | null, HTMLDivElement | null>;
    currentDateTime: import('vue').Ref<Date, Date>;
    formattedValue: import('vue').ComputedRef<string>;
    toggleDropdown: () => void;
    closeDropdown: () => void;
    switchTab: (tab: "date" | "time") => void;
    handleDateChange: (date: Date | null) => void;
    handleTimeChange: (time: string | Date | null) => void;
    handleClear: (e: MouseEvent) => void;
    handleFocus: (e: FocusEvent) => void;
    handleBlur: (e: FocusEvent) => void;
};
