export declare function useRate(props: {
    modelValue?: number;
    max?: number;
    allowHalf?: boolean;
    readonly?: boolean;
    disabled?: boolean;
    onChange?: (val: number) => void;
    onHoverChange?: (val: number) => void;
}): {
    currentValue: import('vue').Ref<number, number>;
    hoverValue: import('vue').Ref<number, number>;
    isHovering: import('vue').Ref<boolean, boolean>;
    getStarValue: (index: number) => 0 | 1 | 0.5;
    handleClick: (index: number, isHalf: boolean) => void;
    handleMouseMove: (event: MouseEvent, index: number) => void;
    handleMouseLeave: () => void;
};
