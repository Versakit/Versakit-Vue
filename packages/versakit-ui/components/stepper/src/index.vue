<template>
  <div
    :class="[classes.root, stepperClass]"
    :style="stepperStyle"
    v-bind="pt?.root"
  >
    <div :class="classes.stepperContainer" v-bind="pt?.stepperContainer">
      <div
        v-for="(step, index) in steps"
        :key="index"
        :class="[
          classes.step,
          { 'pointer-events-none': !clickable || step.disabled },
        ]"
        @click="handleStepClick(index, step)"
        v-bind="pt?.step"
      >
        <!-- 步骤图标或序号 -->
        <div
          :class="[classes.stepIndex, getStepStatusClass(index, step)]"
          v-bind="pt?.stepIndex"
        >
          <template v-if="step.icon">
            <div :class="classes.stepIcon" v-bind="pt?.stepIcon">
              <span class="i-icon" :class="step.icon"></span>
            </div>
          </template>
          <template v-else-if="showIndex">
            {{ index + 1 }}
          </template>
          <template v-else>
            <div
              v-if="getStepStatus(index, step) === 'finish'"
              :class="classes.stepIcon"
              v-bind="pt?.stepIcon"
            >
              <span class="i-icon i-check"></span>
            </div>
            <div
              v-else-if="getStepStatus(index, step) === 'error'"
              :class="classes.stepIcon"
              v-bind="pt?.stepIcon"
            >
              <span class="i-icon i-close"></span>
            </div>
            <template v-else>{{ index + 1 }}</template>
          </template>
        </div>

        <!-- 连接线 -->
        <div
          v-if="index < steps.length - 1"
          :class="[
            classes.stepLine,
            index < active ? 'bg-primary-500' : 'bg-gray-300 dark:bg-gray-600',
          ]"
          v-bind="pt?.stepLine"
        ></div>

        <!-- 步骤内容 -->
        <div :class="classes.stepContent" v-bind="pt?.stepContent">
          <div :class="classes.stepTitle" v-bind="pt?.stepTitle">
            {{ step.title }}
          </div>
          <div
            v-if="step.description"
            :class="classes.stepDescription"
            v-bind="pt?.stepDescription"
          >
            {{ step.description }}
          </div>
          <div v-if="step.content" class="mt-2">
            {{ step.content }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { stepperStyles } from './styles'
import type { StepperProps, StepperEmits, StepItem } from './type'

defineOptions({
  name: 'VKStepper',
})

const props = withDefaults(defineProps<StepperProps>(), {
  direction: 'horizontal',
  size: 'md',
  clickable: false,
  showIndex: true,
  alignCenter: false,
  simple: false,
  unstyled: false,
  pt: () => ({}),
})

const emit = defineEmits<StepperEmits>()

// 定义默认的空类名对象，用于unstyled模式
const emptyClasses = {
  root: '',
  stepperContainer: '',
  step: '',
  stepIndex: '',
  stepIcon: '',
  stepLine: '',
  stepContent: '',
  stepTitle: '',
  stepDescription: '',
}

const classes = computed(() => {
  if (props.unstyled) {
    return emptyClasses
  }

  return stepperStyles({
    direction: props.direction,
    size: props.size,
    status: props.status,
    alignCenter: props.alignCenter,
    simple: props.simple,
    clickable: props.clickable,
  })
})

// 获取步骤状态
const getStepStatus = (index: number, step: StepItem) => {
  // 如果步骤有自定义状态，优先使用自定义状态
  if (step.status) {
    return step.status
  }

  // 如果步骤被禁用，返回wait状态
  if (step.disabled) {
    return 'wait'
  }

  // 根据当前激活步骤计算状态
  if (index < props.active) {
    return 'finish'
  } else if (index === props.active) {
    return props.status || 'process'
  } else {
    return 'wait'
  }
}

// 获取步骤状态对应的样式类
const getStepStatusClass = (index: number, step: StepItem) => {
  const status = getStepStatus(index, step)

  if (props.unstyled) {
    return ''
  }

  const statusClasses = {
    wait: 'bg-gray-100 text-gray-500 border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-400',
    process: 'bg-primary-500 text-white',
    finish: 'bg-primary-500 text-white',
    error: 'bg-danger-500 text-white',
  }

  return statusClasses[status] || statusClasses.wait
}

// 处理步骤点击事件
const handleStepClick = (index: number, step: StepItem) => {
  if (!props.clickable || step.disabled) {
    return
  }

  emit('update:active', index)
  emit('change', index)
  emit('click', index)
}
</script>
