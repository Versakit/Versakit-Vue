import { Ref } from 'vue';
interface UseSegmentedReturn<T extends string | number> {
    selected: Ref<T>;
    isSelected: (val: T) => boolean;
    select: (val: T) => void;
    onKeydown: (e: KeyboardEvent) => void;
}
export declare function useSegmented<T extends string | number>(options: Array<T>, props: {
    modelValue?: T;
    onChange?: (val: T) => void;
}): UseSegmentedReturn<T>;
export {};
