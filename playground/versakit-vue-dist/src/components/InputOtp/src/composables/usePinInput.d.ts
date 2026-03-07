export declare function usePinInput(length?: number): {
    values: import('vue').Ref<string[], string[]>;
    setRef: (el: HTMLInputElement | null, idx: number) => void;
    onInput: (e: Event, idx: number) => void;
    onKeydown: (e: KeyboardEvent, idx: number) => void;
};
