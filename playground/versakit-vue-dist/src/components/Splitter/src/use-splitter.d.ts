import { SetupContext } from 'vue';
import { SplitterProps, SplitterPanelSize } from './type';
export declare const useSplitter: (props: SplitterProps, emit: SetupContext<{
    "update:panels": [SplitterPanelSize[]];
    "resize-start": [MouseEvent | TouchEvent];
    resize: [SplitterPanelSize[]];
    "resize-end": [SplitterPanelSize[]];
    collapse: [number, boolean];
    expand: [number, boolean];
}>["emit"]) => {
    rootRef: import('vue').Ref<HTMLElement | null, HTMLElement | null>;
    panelRefs: import('vue').Ref<HTMLElement[], HTMLElement[]>;
    gutterRefs: import('vue').Ref<HTMLElement[], HTMLElement[]>;
    isResizing: import('vue').Ref<boolean, boolean>;
    panelSizes: import('vue').Reactive<SplitterPanelSize[]>;
    isHorizontal: import('vue').ComputedRef<boolean>;
    registerPanel: (el: HTMLElement, index: number) => void;
    registerGutter: (el: HTMLElement, index: number) => void;
    onGutterMouseDown: (event: MouseEvent | TouchEvent, gutterIndex: number) => void;
    toggleCollapse: (index: number) => void;
    initPanelSizes: () => void;
};
