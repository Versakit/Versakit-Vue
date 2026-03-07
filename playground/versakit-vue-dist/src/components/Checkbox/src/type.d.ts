import { Ref } from 'vue';
export type CheckboxSize = 'small' | 'default' | 'large';
export type CheckboxColor = 'blue' | 'green' | 'red' | 'yellow' | 'purple';
export type CheckboxDirection = 'horizontal' | 'vertical';
export interface CheckboxProps {
    /**
     * 复选框状态值
     * @default false
     */
    modelValue?: boolean | string | number | any[];
    /**
     * 复选框的值（用于 CheckboxGroup）
     */
    value?: string | number | boolean;
    /**
     * 是否禁用
     * @default false
     */
    disabled?: boolean;
    /**
     * 复选框尺寸
     * @default 'default'
     */
    size?: CheckboxSize;
    /**
     * 复选框颜色
     * @default 'blue'
     */
    color?: CheckboxColor;
    /**
     * 复选框的标签
     */
    label?: string;
    /**
     * 是否使用无样式模式
     * @default false
     */
    unstyled?: boolean;
    /**
     * 传递模板样式
     */
    pt?: CheckboxPT;
}
export interface CheckboxGroupProps {
    modelValue?: (string | number | boolean)[];
    disabled?: boolean;
    size?: CheckboxSize;
    color?: CheckboxColor;
    direction?: CheckboxDirection;
    min?: number;
    max?: number;
}
export interface CheckboxGroupContext {
    modelValue: Ref<(string | number | boolean)[]>;
    disabled: Ref<boolean>;
    size: Ref<CheckboxSize>;
    color: Ref<CheckboxColor>;
    min: Ref<number | undefined>;
    max: Ref<number | undefined>;
    changeEvent: (val: any) => void;
}
export type CheckboxPT = {
    root?: string;
    checkbox?: string;
    icon?: string;
    label?: string;
};
