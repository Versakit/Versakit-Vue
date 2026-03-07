import { SwapProps } from './type';
export declare const useSwap: (props: SwapProps, emit: Function) => {
    isActive: import('vue').WritableComputedRef<boolean, boolean>;
    toggle: () => void;
    handleTrigger: (_event?: Event) => void;
};
