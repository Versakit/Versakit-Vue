export declare function useSlider(props: {
    min?: number;
    max?: number;
    step?: number;
    orientation?: 'horizontal' | 'vertical';
    modelValue?: number;
    onChange?: (val: number) => void;
}): {
    value: import('vue').Ref<number, number>;
    percent: import('vue').ComputedRef<number>;
    trackRef: import('vue').Ref<HTMLElement | null, HTMLElement | null>;
    thumbRef: import('vue').Ref<HTMLElement | null, HTMLElement | null>;
    onTrackClick: (e: MouseEvent) => void;
    onThumbKeyDown: (e: KeyboardEvent) => void;
    onThumbMouseDown: (e: MouseEvent) => void;
};
