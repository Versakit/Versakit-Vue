import { SetupContext } from 'vue';
import { ImageProps, ImageEmits } from './type';
export declare const useImage: (props: ImageProps, emit: SetupContext<ImageEmits>["emit"]) => {
    imageRef: import('vue').Ref<HTMLImageElement | null, HTMLImageElement | null>;
    isLoading: import('vue').Ref<boolean, boolean>;
    isError: import('vue').Ref<boolean, boolean>;
    isZoomed: import('vue').Ref<boolean, boolean>;
    handleLoad: (event: Event) => void;
    handleError: (event: Event) => void;
    toggleZoom: () => void;
};
