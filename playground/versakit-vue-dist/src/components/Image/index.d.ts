export declare const Image: import('@versakit/shared').SFCWithInstall<{
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('.').ImageProps> & Readonly<{
        onError?: ((evt: Event) => any) | undefined;
        onLoad?: ((evt: Event) => any) | undefined;
        onZoom?: ((isZoomed: boolean) => any) | undefined;
    }>, {
        imageRef: import('vue').Ref<HTMLImageElement | null, HTMLImageElement | null>;
        isLoading: import('vue').Ref<boolean, boolean>;
        isError: import('vue').Ref<boolean, boolean>;
        isZoomed: import('vue').Ref<boolean, boolean>;
    }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        error: (evt: Event) => void;
        load: (evt: Event) => void;
        zoom: (isZoomed: boolean) => void;
    }, import('vue').PublicProps, {
        unstyled: boolean;
        width: string | number;
        height: string | number;
        alt: string;
        radius: string;
        loading: import('.').ImageLoadingStrategy;
        fit: import('.').ImageFit;
        isZoomable: boolean;
        isZoomed: boolean;
        blurred: boolean;
        blurAmount: number;
        zoomScale: number;
        skeleton: boolean;
    }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {
        imageRef: HTMLImageElement;
    }, HTMLDivElement, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('.').ImageProps> & Readonly<{
        onError?: ((evt: Event) => any) | undefined;
        onLoad?: ((evt: Event) => any) | undefined;
        onZoom?: ((isZoomed: boolean) => any) | undefined;
    }>, {
        imageRef: import('vue').Ref<HTMLImageElement | null, HTMLImageElement | null>;
        isLoading: import('vue').Ref<boolean, boolean>;
        isError: import('vue').Ref<boolean, boolean>;
        isZoomed: import('vue').Ref<boolean, boolean>;
    }, {}, {}, {}, {
        unstyled: boolean;
        width: string | number;
        height: string | number;
        alt: string;
        radius: string;
        loading: import('.').ImageLoadingStrategy;
        fit: import('.').ImageFit;
        isZoomable: boolean;
        isZoomed: boolean;
        blurred: boolean;
        blurAmount: number;
        zoomScale: number;
        skeleton: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('.').ImageProps> & Readonly<{
    onError?: ((evt: Event) => any) | undefined;
    onLoad?: ((evt: Event) => any) | undefined;
    onZoom?: ((isZoomed: boolean) => any) | undefined;
}>, {
    imageRef: import('vue').Ref<HTMLImageElement | null, HTMLImageElement | null>;
    isLoading: import('vue').Ref<boolean, boolean>;
    isError: import('vue').Ref<boolean, boolean>;
    isZoomed: import('vue').Ref<boolean, boolean>;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    error: (evt: Event) => void;
    load: (evt: Event) => void;
    zoom: (isZoomed: boolean) => void;
}, string, {
    unstyled: boolean;
    width: string | number;
    height: string | number;
    alt: string;
    radius: string;
    loading: import('.').ImageLoadingStrategy;
    fit: import('.').ImageFit;
    isZoomable: boolean;
    isZoomed: boolean;
    blurred: boolean;
    blurAmount: number;
    zoomScale: number;
    skeleton: boolean;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: {
        'zoom-icon'?(_: {}): any;
        error?(_: {}): any;
    };
})> & Record<string, any>;
export * from './src/type';
export default Image;
