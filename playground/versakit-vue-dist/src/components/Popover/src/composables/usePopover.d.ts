export type Placement = 'top' | 'right' | 'bottom' | 'left';
export interface PopoverOptions {
    openDelay?: number;
    closeDelay?: number;
    placement?: Placement;
    offset?: number;
    onClose?: () => void;
    followCursor?: boolean;
    unbound?: boolean;
}
export interface PopoverReturn {
    isOpen: import('vue').Ref<boolean>;
    open: () => Promise<void>;
    close: () => void;
    toggle: () => Promise<void>;
    triggerRef: import('vue').Ref<HTMLElement | null>;
    popoverRef: import('vue').Ref<HTMLElement | null>;
    popoverId: string;
    updatePosition: () => void;
    onMouseEnter: (e: MouseEvent) => void;
    onFocus: () => void;
    onMouseLeave: () => void;
    onBlur: () => void;
    setIsOpen: (value: boolean) => void;
}
export declare function usePopover(options?: PopoverOptions): PopoverReturn;
