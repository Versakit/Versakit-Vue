import { BadgePosition } from '../type';
export declare function useBadge(props: {
    content?: string | number;
    dot?: boolean;
    show?: boolean;
    position?: BadgePosition;
}): {
    visible: import('vue').ComputedRef<boolean>;
    positionClass: import('vue').ComputedRef<"top-0 left-0 -translate-x-1/2 -translate-y-1/2" | "bottom-0 right-0 translate-x-1/2 translate-y-1/2" | "bottom-0 left-0 -translate-x-1/2 translate-y-1/2" | "top-0 right-0 translate-x-1/2 -translate-y-1/2">;
};
