import { SetupContext } from 'vue';
import { ButtonProps, IButtonEmits } from './type';
export declare const useButton: (props: ButtonProps, emit: SetupContext<IButtonEmits>["emit"]) => {
    _ref: import('vue').Ref<HTMLButtonElement | null, HTMLButtonElement | null>;
    handleClick: (e: MouseEvent) => void;
};
