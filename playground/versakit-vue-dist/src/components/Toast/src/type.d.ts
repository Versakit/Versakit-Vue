export type ToastType = 'success' | 'warning' | 'info' | 'error';
export type ToastPosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'top-center' | 'bottom-center';
export interface ToastProps {
    id: string;
    message: string;
    type?: ToastType;
    duration?: number;
    position?: ToastPosition;
    onClose?: (id: string) => void;
}
export type ToastOptions = Omit<ToastProps, 'id'>;
export interface ToastInstance extends ToastProps {
    visible: boolean;
}
