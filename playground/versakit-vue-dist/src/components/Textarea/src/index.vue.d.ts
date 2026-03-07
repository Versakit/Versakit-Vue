import { TextareaProps } from './type';
declare const _default: import('vue').DefineComponent<TextareaProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<TextareaProps> & Readonly<{
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}>, {
    size: "sm" | "md" | "lg";
    unstyled: boolean;
    resize: "none" | "both" | "horizontal" | "vertical";
    modelValue: string;
    disabled: boolean;
    status: "error" | "warning" | "success";
    placeholder: string;
    readonly: boolean;
    rows: number;
    maxLength: number;
    minLength: number;
    autosize: boolean;
    showCount: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
