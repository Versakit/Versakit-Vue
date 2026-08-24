import { RunhorselightNormalizedItem, RunhorselightProps } from '../type';
export declare function useRunhorselight(props: RunhorselightProps): {
    displayItems: import('vue').ComputedRef<RunhorselightNormalizedItem[]>;
    coreItems: import('vue').ComputedRef<RunhorselightNormalizedItem[]>;
    prefixItems: import('vue').ComputedRef<RunhorselightNormalizedItem[]>;
    suffixItems: import('vue').ComputedRef<RunhorselightNormalizedItem[]>;
    rootStyles: import('vue').ComputedRef<{
        height: string | undefined;
        backgroundColor: string | undefined;
        color: string | undefined;
        borderRadius: string | undefined;
    }>;
    trackStyles: import('vue').ComputedRef<{}>;
    groupStyles: import('vue').ComputedRef<{
        gap: string | undefined;
        paddingInlineEnd: string | undefined;
    }>;
    itemStyles: import('vue').ComputedRef<{
        minWidth: string;
    }>;
    cardStyle: (item: RunhorselightNormalizedItem) => {
        backgroundColor: string;
        color: string | undefined;
        borderRadius: string | undefined;
        padding: string;
    };
    imageStyle: (item: RunhorselightNormalizedItem) => {
        borderRadius: string | undefined;
    };
    duration: import('vue').ComputedRef<number>;
};
