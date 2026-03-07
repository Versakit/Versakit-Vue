import { ProgressProps } from './type';
export declare const useProgress: (props: ProgressProps) => {
    percentage: import('vue').ComputedRef<number>;
    formattedPercentage: import('vue').ComputedRef<string>;
    progressWidth: import('vue').ComputedRef<string | undefined>;
};
