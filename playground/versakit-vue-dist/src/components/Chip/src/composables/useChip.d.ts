export interface UseChipProps {
    modelValue?: boolean;
    selectable?: boolean;
    disabled?: boolean;
    closable?: boolean;
    onClose?: (event: Event) => void;
    onChange?: (val: boolean) => void;
}
export declare function useChip(props: UseChipProps): {
    isSelected: import('vue').ComputedRef<boolean>;
    isClosable: import('vue').ComputedRef<boolean>;
    toggle: () => void;
    handleClose: (event: Event) => void;
};
