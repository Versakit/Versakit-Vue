import { StoryObj } from '@storybook/vue3-vite';
declare const meta: {
    title: string;
    component: import('@versakit/shared').SFCWithInstall<{
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('../index').BreadcrumbProps> & Readonly<{}>, {
            _ref: import('vue').Ref<HTMLElement | null, HTMLElement | null>;
        }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {
            unstyled: boolean;
            separator: string;
            separatorIcon: string;
        }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {
            _ref: HTMLElement;
        }, HTMLElement, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import('../index').BreadcrumbProps> & Readonly<{}>, {
            _ref: import('vue').Ref<HTMLElement | null, HTMLElement | null>;
        }, {}, {}, {}, {
            unstyled: boolean;
            separator: string;
            separatorIcon: string;
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import('vue').ComponentOptionsBase<Readonly<import('../index').BreadcrumbProps> & Readonly<{}>, {
        _ref: import('vue').Ref<HTMLElement | null, HTMLElement | null>;
    }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {
        unstyled: boolean;
        separator: string;
        separatorIcon: string;
    }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
        $slots: {
            default?(_: {}): any;
        };
    })> & {
        BreadcrumbItem: {
            new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('../index').BreadcrumbItemProps> & Readonly<{
                onClick?: ((evt: MouseEvent) => any) | undefined;
            }>, {
                _ref: import('vue').Ref<HTMLElement | null, HTMLElement | null>;
            }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
                click: (evt: MouseEvent) => void;
            }, import('vue').PublicProps, {
                unstyled: boolean;
                disabled: boolean;
                active: boolean;
                href: string;
            }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {
                _ref: HTMLLIElement;
            }, HTMLLIElement, import('vue').ComponentProvideOptions, {
                P: {};
                B: {};
                D: {};
                C: {};
                M: {};
                Defaults: {};
            }, Readonly<import('../index').BreadcrumbItemProps> & Readonly<{
                onClick?: ((evt: MouseEvent) => any) | undefined;
            }>, {
                _ref: import('vue').Ref<HTMLElement | null, HTMLElement | null>;
            }, {}, {}, {}, {
                unstyled: boolean;
                disabled: boolean;
                active: boolean;
                href: string;
            }>;
            __isFragment?: never;
            __isTeleport?: never;
            __isSuspense?: never;
        } & import('vue').ComponentOptionsBase<Readonly<import('../index').BreadcrumbItemProps> & Readonly<{
            onClick?: ((evt: MouseEvent) => any) | undefined;
        }>, {
            _ref: import('vue').Ref<HTMLElement | null, HTMLElement | null>;
        }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
            click: (evt: MouseEvent) => void;
        }, string, {
            unstyled: boolean;
            disabled: boolean;
            active: boolean;
            href: string;
        }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
            $slots: {
                separator?(_: {}): any;
                default?(_: {}): any;
                default?(_: {}): any;
            };
        });
    };
    tags: string[];
    argTypes: {
        separator: {
            control: "text";
            description: string;
            defaultValue: string;
        };
        separatorIcon: {
            control: "text";
            description: string;
        };
        unstyled: {
            control: "boolean";
            description: string;
            defaultValue: boolean;
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const CustomSeparator: Story;
export declare const Disabled: Story;
export declare const Active: Story;
