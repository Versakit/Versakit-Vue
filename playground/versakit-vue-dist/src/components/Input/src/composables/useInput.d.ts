export declare function useInput(props: {
    modelValue?: string | number;
    type?: string;
    disabled?: boolean;
    readonly?: boolean;
    maxlength?: number;
    onChange?: (val: string) => void;
}): {
    inputValue: import('vue').Ref<string, string>;
    inputRef: import('vue').Ref<HTMLInputElement | null, HTMLInputElement | null>;
    updateValue: (val: string) => void;
    clearInput: () => void;
    focus: () => void;
    blur: () => void;
};
