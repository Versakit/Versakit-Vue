export declare const Runhorselight: import('@versakit/shared').SFCWithInstall<{
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('.').RunhorselightProps> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {
        unstyled: boolean;
        duration: number | string;
        height: string;
        direction: import('.').RunhorselightDirection;
        backgroundColor: string;
        loop: boolean;
        pauseOnHover: boolean;
        items: import('.').RunhorselightItem[];
        textColor: string;
        borderRadius: string;
        gap: string;
        autofill: boolean;
    }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {
        viewportRef: HTMLDivElement;
        slotMeasureRef: HTMLDivElement;
        trackRef: HTMLDivElement;
    }, HTMLDivElement, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('.').RunhorselightProps> & Readonly<{}>, {}, {}, {}, {}, {
        unstyled: boolean;
        duration: number | string;
        height: string;
        direction: import('.').RunhorselightDirection;
        backgroundColor: string;
        loop: boolean;
        pauseOnHover: boolean;
        items: import('.').RunhorselightItem[];
        textColor: string;
        borderRadius: string;
        gap: string;
        autofill: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('.').RunhorselightProps> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {
    unstyled: boolean;
    duration: number | string;
    height: string;
    direction: import('.').RunhorselightDirection;
    backgroundColor: string;
    loop: boolean;
    pauseOnHover: boolean;
    items: import('.').RunhorselightItem[];
    textColor: string;
    borderRadius: string;
    gap: string;
    autofill: boolean;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: {
        prefix?(_: {
            item: import('.').RunhorselightNormalizedItem;
            target: string;
        }): any;
        default?(_: {}): any;
        default?(_: {}): any;
        item?(_: {
            item: {
                id: string;
                type: import('.').RunhorselightItemType;
                content: string;
                src?: string;
                alt?: string;
                title?: string;
                description?: string;
                backgroundColor?: string;
                textColor?: string;
                borderRadius?: string;
            };
        }): any;
        suffix?(_: {
            item: import('.').RunhorselightNormalizedItem;
            target: string;
        }): any;
    };
})> & Record<string, any>;
export default Runhorselight;
export * from './src/type';
