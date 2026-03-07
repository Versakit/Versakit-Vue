export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'link' | 'danger' | 'success' | 'warning' | 'info';
export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg';
export type ButtonProps = {
    variant?: ButtonVariant;
    size?: ButtonSize;
    disabled?: boolean;
    loading?: boolean;
    fullWidth?: boolean;
    rounded?: boolean;
    type?: 'button' | 'submit' | 'reset';
    unstyled?: boolean;
    pt?: ButtonPT;
};
export type ButtonPT = {
    root?: string;
    loader?: string;
    icon?: string;
};
export declare const ButtonEmits: {
    click: (evt: MouseEvent) => boolean;
};
export type IButtonEmits = typeof ButtonEmits;
