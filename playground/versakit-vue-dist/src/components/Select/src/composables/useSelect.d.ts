import { SelectOption } from '../type';
export interface UseSelectProps {
    modelValue?: string | number | Array<string | number>;
    options?: SelectOption[];
    multiple?: boolean;
    filterable?: boolean;
    disabled?: boolean;
    readonly?: boolean;
    onChange?: (val: any) => void;
    onSearch?: (val: string) => void;
    onDropdownVisibleChange?: (visible: boolean) => void;
}
export declare function useSelect(props: UseSelectProps): {
    isOpen: import('vue').Ref<boolean, boolean>;
    searchValue: import('vue').Ref<string, string>;
    activeIndex: import('vue').Ref<number, number>;
    triggerRef: import('vue').Ref<HTMLElement | null, HTMLElement | null>;
    dropdownRef: import('vue').Ref<HTMLElement | null, HTMLElement | null>;
    selectedValues: import('vue').ComputedRef<(string | number | (string | number)[])[]>;
    selectedOptions: import('vue').ComputedRef<SelectOption[]>;
    getOptionLabel: import('vue').ComputedRef<string>;
    filteredOptions: import('vue').ComputedRef<SelectOption[]>;
    groupedOptions: import('vue').ComputedRef<{
        groups: Record<string, SelectOption[]>;
        noGroup: SelectOption[];
    }>;
    selectOption: (option: SelectOption) => void;
    clearSelection: (e?: Event) => void;
    toggleDropdown: () => void;
    openDropdown: () => void;
    closeDropdown: () => void;
    isSelected: (value: string | number) => boolean;
    onKeyDown: (e: KeyboardEvent) => void;
    onSearchInput: (value: string) => void;
    cleanup: () => void;
};
