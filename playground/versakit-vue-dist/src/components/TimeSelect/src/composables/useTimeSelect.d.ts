import { SetupContext } from 'vue';
import { TimeSelectProps, ITimeSelectEmits } from '../type';
export declare const useTimeSelect: (props: TimeSelectProps, emit: SetupContext<ITimeSelectEmits>["emit"]) => {
    isOpen: import('vue').Ref<boolean, boolean>;
    inputRef: import('vue').Ref<HTMLInputElement | null, HTMLInputElement | null>;
    dropdownRef: import('vue').Ref<HTMLDivElement | null, HTMLDivElement | null>;
    timeOptions: import('vue').ComputedRef<string[]>;
    toggleDropdown: () => void;
    selectOption: (option: string) => void;
    handleClear: (e: MouseEvent) => void;
    handleFocus: (e: FocusEvent) => void;
    handleBlur: (e: FocusEvent) => void;
};
