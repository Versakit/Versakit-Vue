export interface UseDrawerOptions {
    onClose?: () => void;
    onOpen?: () => void;
    closeOnEsc?: boolean;
    closeOnOverlayClick?: boolean;
}
export declare function useDrawer(options?: UseDrawerOptions): {
    isOpen: import('vue').Ref<boolean, boolean>;
    open: () => void;
    close: () => void;
    overlayRef: import('vue').Ref<HTMLElement | null, HTMLElement | null>;
    drawerRef: import('vue').Ref<HTMLElement | null, HTMLElement | null>;
    onOverlayClick: (e: MouseEvent) => void;
};
