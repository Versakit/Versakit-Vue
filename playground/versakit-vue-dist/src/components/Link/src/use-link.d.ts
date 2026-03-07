import { SetupContext } from 'vue';
import { LinkProps, LinkEmits } from './type';
export declare const useLink: (props: LinkProps, emit: SetupContext<LinkEmits>["emit"]) => {
    handleClick: (event: MouseEvent) => void;
    linkAttributes: import('vue').ComputedRef<Record<string, string | boolean | undefined>>;
};
