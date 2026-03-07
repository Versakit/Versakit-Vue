import { ToastOptions } from './type';
export declare const Toast: {
    success: (message: string, options?: Omit<ToastOptions, "message" | "type">) => string;
    error: (message: string, options?: Omit<ToastOptions, "message" | "type">) => string;
    warning: (message: string, options?: Omit<ToastOptions, "message" | "type">) => string;
    info: (message: string, options?: Omit<ToastOptions, "message" | "type">) => string;
    show: (options: ToastOptions) => string;
    remove: (id: string) => void;
    removeAll: () => void;
};
