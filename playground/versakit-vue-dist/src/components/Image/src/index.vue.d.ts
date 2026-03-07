import { ImageProps } from './type';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        'zoom-icon'?(_: {}): any;
        error?(_: {}): any;
    };
    refs: {
        imageRef: HTMLImageElement;
    };
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<ImageProps, {
    imageRef: import('vue').Ref<HTMLImageElement | null, HTMLImageElement | null>;
    isLoading: import('vue').Ref<boolean, boolean>;
    isError: import('vue').Ref<boolean, boolean>;
    isZoomed: import('vue').Ref<boolean, boolean>;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    error: (evt: Event) => void;
    load: (evt: Event) => void;
    zoom: (isZoomed: boolean) => void;
}, string, import('vue').PublicProps, Readonly<ImageProps> & Readonly<{
    onError?: ((evt: Event) => any) | undefined;
    onLoad?: ((evt: Event) => any) | undefined;
    onZoom?: ((isZoomed: boolean) => any) | undefined;
}>, {
    unstyled: boolean;
    width: string | number;
    height: string | number;
    alt: string;
    radius: string;
    loading: import('./type').ImageLoadingStrategy;
    fit: import('./type').ImageFit;
    isZoomable: boolean;
    isZoomed: boolean;
    blurred: boolean;
    blurAmount: number;
    zoomScale: number;
    skeleton: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    imageRef: HTMLImageElement;
}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
