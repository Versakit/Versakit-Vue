import { BreadcrumbProps } from './type';
export type BreadcrumbContext = {
    separator: string;
    separatorIcon: string;
};
export declare const useBreadcrumb: (props: BreadcrumbProps) => {
    _ref: import('vue').Ref<HTMLElement | null, HTMLElement | null>;
};
export declare const useBreadcrumbItem: () => {
    _ref: import('vue').Ref<HTMLElement | null, HTMLElement | null>;
    breadcrumbContext: BreadcrumbContext;
};
