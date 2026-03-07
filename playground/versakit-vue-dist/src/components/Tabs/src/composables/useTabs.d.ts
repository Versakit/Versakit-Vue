import { Ref } from 'vue';
interface UseTabsOptions {
    modelValue?: string | number;
    onChange?: (value: string | number) => void;
}
interface UseTabsReturn {
    activeTab: Ref<string | number>;
    isActive: (name: string | number) => boolean;
    activate: (name: string | number) => void;
    onKeydown: (e: KeyboardEvent, tabs: Array<string | number>) => void;
}
export declare function useTabs(options?: UseTabsOptions): UseTabsReturn;
export {};
