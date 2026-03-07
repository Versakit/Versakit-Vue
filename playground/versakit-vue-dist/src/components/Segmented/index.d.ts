export declare const Segmented: import('@versakit/shared').SFCWithInstall<(<T extends string | number>(__VLS_props: NonNullable<Awaited<typeof __VLS_setup>>["props"], __VLS_ctx?: {
    slots: {};
    attrs: any;
    emit: {
        (e: "update:modelValue", value: T): void;
        (e: "change", value: T): void;
    };
}, __VLS_expose?: NonNullable<Awaited<typeof __VLS_setup>>["expose"], __VLS_setup?: Promise<{
    props: {
        readonly onChange?: ((value: T) => any) | undefined;
        readonly "onUpdate:modelValue"?: ((value: T) => any) | undefined;
        modelValue?: T | undefined;
        options: (T | {
            value: T;
            label: string;
            disabled?: boolean;
        })[];
        size?: ("sm" | "md" | "lg") | undefined;
        disabled?: boolean | undefined;
        block?: boolean | undefined;
        unstyled?: boolean | undefined;
        pt?: import('./src/type').SegmentedPT | undefined;
    } & import('vue').PublicProps;
    expose(exposed: import('vue').ShallowUnwrapRef<{}>): void;
    attrs: any;
    slots: {};
    emit: {
        (e: "update:modelValue", value: T): void;
        (e: "change", value: T): void;
    };
}>) => import('vue').VNode<import('vue').RendererNode, import('vue').RendererElement, {
    [key: string]: any;
}> & {
    __ctx?: Awaited<typeof __VLS_setup>;
})> & Record<string, any>;
