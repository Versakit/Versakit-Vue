export declare const Skeleton: import('@versakit/shared').SFCWithInstall<{
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./src/type').SkeletonProps> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {
        unstyled: boolean;
        rounded: boolean;
        loading: boolean;
        animation: import('./src/type').SkeletonAnimation;
    }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('./src/type').SkeletonProps> & Readonly<{}>, {}, {}, {}, {}, {
        unstyled: boolean;
        rounded: boolean;
        loading: boolean;
        animation: import('./src/type').SkeletonAnimation;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('./src/type').SkeletonProps> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {
    unstyled: boolean;
    rounded: boolean;
    loading: boolean;
    animation: import('./src/type').SkeletonAnimation;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: {
        skeleton?(_: {}): any;
        default?(_: {}): any;
    };
})> & Record<string, any>;
export declare const SkeletonText: import('@versakit/shared').SFCWithInstall<import('vue').DefineComponent<import('./src/type').SkeletonTextProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('./src/type').SkeletonTextProps> & Readonly<{}>, {
    unstyled: boolean;
    rounded: boolean;
    animation: import('./src/type').SkeletonAnimation;
    lines: number;
    widths: (string | number)[] | string | number;
    lineHeight: string | number;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>> & Record<string, any>;
export declare const SkeletonAvatar: import('@versakit/shared').SFCWithInstall<import('vue').DefineComponent<import('./src/type').SkeletonAvatarProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('./src/type').SkeletonAvatarProps> & Readonly<{}>, {
    size: "xs" | "sm" | "md" | "lg" | "xl";
    unstyled: boolean;
    circle: boolean;
    animation: import('./src/type').SkeletonAnimation;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>> & Record<string, any>;
