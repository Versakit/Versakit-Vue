import { ToastInstance, ToastOptions } from './type';
export declare const toasts: import('vue').Ref<{
    visible: boolean;
    id: string;
    message: string;
    type?: import('./type').ToastType | undefined;
    duration?: number | undefined;
    position?: import('./type').ToastPosition | undefined;
    onClose?: (() => void) | undefined;
}[], ToastInstance[] | {
    visible: boolean;
    id: string;
    message: string;
    type?: import('./type').ToastType | undefined;
    duration?: number | undefined;
    position?: import('./type').ToastPosition | undefined;
    onClose?: (() => void) | undefined;
}[]>;
export declare const add: (options: ToastOptions) => string;
export declare const remove: (id: string) => void;
export declare const removeAll: () => void;
