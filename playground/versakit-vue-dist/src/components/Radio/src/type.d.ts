import { Ref } from 'vue';
export type RadioSize = 'sm' | 'md' | 'lg';
export type RadioDirection = 'horizontal' | 'vertical';
export interface RadioProps {
    value?: string | number | boolean;
    label?: string | number | boolean;
    disabled?: boolean;
    size?: RadioSize;
}
export interface RadioGroupProps {
    modelValue?: string | number | boolean;
    disabled?: boolean;
    size?: RadioSize;
    direction?: RadioDirection;
}
export interface RadioContext {
    modelValue: Ref<string | number | boolean | undefined>;
    disabled: Ref<boolean>;
    size: Ref<RadioSize>;
    changeEvent: (value: string | number | boolean) => void;
}
