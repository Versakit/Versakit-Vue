import { SliderProps } from './type';
declare const _default: import('vue').DefineComponent<SliderProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    change: (value: number) => any;
    "update:modelValue": (value: number) => any;
}, string, import('vue').PublicProps, Readonly<SliderProps> & Readonly<{
    onChange?: ((value: number) => any) | undefined;
    "onUpdate:modelValue"?: ((value: number) => any) | undefined;
}>, {
    unstyled: boolean;
    pt: import('./type').SliderPT;
    disabled: boolean;
    max: number;
    orientation: "horizontal" | "vertical";
    min: number;
    step: number;
    showTooltip: boolean;
    showMarks: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    trackRef: HTMLDivElement;
    thumbRef: HTMLDivElement;
}, HTMLDivElement>;
export default _default;
