import { RunhorselightNormalizedItem, RunhorselightProps } from './type';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        prefix?(_: {
            item: RunhorselightNormalizedItem;
            target: string;
        }): any;
        default?(_: {}): any;
        default?(_: {}): any;
        item?(_: {
            item: {
                id: string;
                type: import('./type').RunhorselightItemType;
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
            item: RunhorselightNormalizedItem;
            target: string;
        }): any;
    };
    refs: {
        viewportRef: HTMLDivElement;
        slotMeasureRef: HTMLDivElement;
        trackRef: HTMLDivElement;
    };
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<RunhorselightProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<RunhorselightProps> & Readonly<{}>, {
    unstyled: boolean;
    duration: number | string;
    height: string;
    direction: import('./type').RunhorselightDirection;
    backgroundColor: string;
    loop: boolean;
    pauseOnHover: boolean;
    items: import('./type').RunhorselightItem[];
    textColor: string;
    borderRadius: string;
    gap: string;
    autofill: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    viewportRef: HTMLDivElement;
    slotMeasureRef: HTMLDivElement;
    trackRef: HTMLDivElement;
}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
