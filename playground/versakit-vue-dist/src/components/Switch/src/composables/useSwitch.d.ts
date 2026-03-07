export declare function useSwitch(props: {
    modelValue?: boolean;
    disabled?: boolean;
    onChange?: (val: boolean) => void;
}): {
    checked: import('vue').ComputedRef<boolean>;
    disabled: import('vue').ComputedRef<boolean>;
    toggle: () => void;
    onKeyDown: (e: KeyboardEvent) => void;
};
