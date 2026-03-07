import { SetupContext } from 'vue';
import { DropdownProps, DropdownOption } from './type';
export declare const useDropdown: (props: DropdownProps, emit: SetupContext<{
    "update:visible": [boolean];
    show: [];
    hide: [];
    select: [string | number, MouseEvent];
}>["emit"]) => {
    isVisible: import('vue').Ref<boolean, boolean>;
    triggerRef: import('vue').Ref<HTMLElement | null, HTMLElement | null>;
    contentRef: import('vue').Ref<HTMLElement | null, HTMLElement | null>;
    dropdownId: string;
    show: () => void;
    hide: () => void;
    toggle: () => void;
    handleItemClick: (value: string | number, event: MouseEvent) => void;
    handleOptionClick: (option: DropdownOption, event: MouseEvent) => void;
};
