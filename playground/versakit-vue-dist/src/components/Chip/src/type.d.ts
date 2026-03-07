export type ChipVariant = 'solid' | 'bordered' | 'light' | 'flat' | 'faded' | 'shadow' | 'dot';
export type ChipColor = 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
export type ChipSize = 'sm' | 'md' | 'lg';
export type ChipRadius = 'none' | 'sm' | 'md' | 'lg' | 'full';
export interface ChipProps {
    modelValue?: boolean;
    disabled?: boolean;
    selectable?: boolean;
    closable?: boolean;
    onClose?: () => void;
    variant?: ChipVariant;
    color?: ChipColor;
    size?: ChipSize;
    radius?: ChipRadius;
    avatar?: any;
    startContent?: any;
    endContent?: any;
    unstyled?: boolean;
    pt?: ChipPT;
}
export type ChipPT = {
    root?: string;
    dot?: string;
    avatar?: string;
    startContent?: string;
    content?: string;
    endContent?: string;
    closeButton?: string;
};
