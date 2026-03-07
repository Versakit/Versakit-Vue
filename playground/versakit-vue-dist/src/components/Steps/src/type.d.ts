import { Component, Ref } from 'vue';
export type StepsDirection = 'horizontal' | 'vertical';
export type StepStatus = 'wait' | 'process' | 'finish' | 'error';
export interface StepsProps {
    current?: number;
    direction?: StepsDirection;
    status?: StepStatus;
}
export interface StepItemProps {
    title?: string;
    description?: string;
    icon?: Component | string;
    status?: StepStatus;
    disabled?: boolean;
}
export interface StepsContext {
    current: Ref<number>;
    direction: Ref<StepsDirection>;
    status: Ref<StepStatus>;
    steps: Ref<symbol[]>;
    registerStep: (id: symbol) => void;
    unregisterStep: (id: symbol) => void;
    onChange: (index: number) => void;
}
