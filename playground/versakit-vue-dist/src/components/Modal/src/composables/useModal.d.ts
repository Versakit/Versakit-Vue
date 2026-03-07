export interface UseModalOptions {
    onClose?: () => void;
    closeOnEsc?: boolean;
    closeOnOverlayClick?: boolean;
}
export declare function useModal(options?: UseModalOptions): {
    isOpen: import('vue').Ref<boolean, boolean>;
    open: () => void;
    close: () => void;
    modalRef: import('vue').Ref<HTMLElement | null, HTMLElement | null>;
    overlayRef: import('vue').Ref<HTMLElement | null, HTMLElement | null>;
    onOverlayClick: (e: MouseEvent) => void;
};
