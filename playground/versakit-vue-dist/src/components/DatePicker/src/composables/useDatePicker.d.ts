import { SetupContext } from 'vue';
import { DatePickerProps, IDatePickerEmits } from '../type';
export declare const useDatePicker: (props: DatePickerProps, emit: SetupContext<IDatePickerEmits>["emit"]) => {
    isOpen: import('vue').Ref<boolean, boolean>;
    inputRef: import('vue').Ref<HTMLInputElement | null, HTMLInputElement | null>;
    dropdownRef: import('vue').Ref<HTMLDivElement | null, HTMLDivElement | null>;
    formattedValue: import('vue').ComputedRef<string>;
    toggleDropdown: () => void;
    closeDropdown: () => void;
    handleDateChange: (date: Date | null) => void;
    handleClear: (e: MouseEvent) => void;
    handleFocus: (e: FocusEvent) => void;
    handleBlur: (e: FocusEvent) => void;
};
