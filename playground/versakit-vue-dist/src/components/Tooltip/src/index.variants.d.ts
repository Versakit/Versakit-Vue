/**
 * Tooltip 容器样式
 */
export declare const tooltipContainer: import('tailwind-variants').TVReturnType<{} | {} | {}, undefined, "inline-block", {} | {}, undefined, import('tailwind-variants').TVReturnType<unknown, undefined, "inline-block", unknown, unknown, undefined>>;
/**
 * Tooltip 内容样式
 */
export declare const tooltipContent: import('tailwind-variants').TVReturnType<{
    color: {
        default: string;
        primary: string;
        success: string;
        warning: string;
        danger: string;
    };
    visible: {
        true: string;
        false: string;
    };
}, undefined, "px-2 py-1 text-xs font-medium rounded shadow-md pointer-events-none max-w-xs", {
    color: {
        default: string;
        primary: string;
        success: string;
        warning: string;
        danger: string;
    };
    visible: {
        true: string;
        false: string;
    };
}, undefined, import('tailwind-variants').TVReturnType<{
    color: {
        default: string;
        primary: string;
        success: string;
        warning: string;
        danger: string;
    };
    visible: {
        true: string;
        false: string;
    };
}, undefined, "px-2 py-1 text-xs font-medium rounded shadow-md pointer-events-none max-w-xs", unknown, unknown, undefined>>;
/**
 * Tooltip 箭头样式
 * 注意：箭头位置通过JS动态计算，样式中只定义基本样式和颜色
 */
export declare const tooltipArrow: import('tailwind-variants').TVReturnType<{
    color: {
        default: string;
        primary: string;
        success: string;
        warning: string;
        danger: string;
    };
    placement: {
        top: string;
        right: string;
        bottom: string;
        left: string;
    };
}, undefined, "absolute w-2 h-2 rotate-45", {
    color: {
        default: string;
        primary: string;
        success: string;
        warning: string;
        danger: string;
    };
    placement: {
        top: string;
        right: string;
        bottom: string;
        left: string;
    };
}, undefined, import('tailwind-variants').TVReturnType<{
    color: {
        default: string;
        primary: string;
        success: string;
        warning: string;
        danger: string;
    };
    placement: {
        top: string;
        right: string;
        bottom: string;
        left: string;
    };
}, undefined, "absolute w-2 h-2 rotate-45", unknown, unknown, undefined>>;
