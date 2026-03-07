export interface UseTooltipOptions {
    openDelay?: number;
    closeDelay?: number;
    placement?: 'top' | 'right' | 'bottom' | 'left';
    offset?: number;
    followCursor?: boolean;
    unbound?: boolean;
}
export declare function useTooltip(options?: UseTooltipOptions): {
    isOpen: import('vue').Ref<boolean, boolean>;
    triggerRef: import('vue').Ref<HTMLElement | null, HTMLElement | null>;
    tooltipRef: import('vue').Ref<HTMLElement | null, HTMLElement | null>;
    tooltipId: string;
    updatePosition: () => void;
    onMouseEnter: (e: MouseEvent) => void;
    onFocus: () => void;
    onMouseLeave: () => void;
    onBlur: () => void;
    setIsOpen: (value: boolean) => void;
};
