<template>
  <div :class="classes.root">
    <div :class="classes.header">
      <div :class="classes.title">
        {{ monthName }} {{ currentYear }}
        <span v-if="selectionMode === 'end'" class="text-sm text-blue-500 ml-2">
          (Select end date)
        </span>
      </div>
      <div :class="classes.navigation">
        <button
          :class="classes.navButton"
          @click="prevMonth"
          :disabled="disabled || readonly"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>
        <button
          :class="classes.navButton"
          @click="nextMonth"
          :disabled="disabled || readonly"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
      </div>
    </div>

    <div :class="classes.weekdays">
      <div
        v-for="(day, index) in weekdays"
        :key="index"
        :class="classes.weekday"
      >
        {{ day }}
      </div>
    </div>

    <div :class="classes.days">
      <button
        v-for="(day, index) in daysInMonth"
        :key="index"
        :class="[
          classes.day,
          day.isToday ? classes.today : '',
          day.isSelected ? classes.selected : '',
          day.isRangeStart ? classes.rangeStart : '',
          day.isRangeEnd ? classes.rangeEnd : '',
          day.isInRange ? classes.inRange : '',
          day.isDisabled ? classes.disabled : '',
          !day.isCurrentMonth ? classes.adjacent : '',
        ]"
        @click="selectDate(day.date)"
        :disabled="day.isDisabled || disabled || readonly"
      >
        {{ day.day }}
      </button>
    </div>

    <div v-if="startDate || endDate" class="mt-4 flex justify-between">
      <div>
        <span class="text-sm text-gray-500">Start:</span>
        <span class="ml-1 font-medium">
          {{ startDate ? formatDate(startDate) : '-' }}
        </span>
      </div>
      <div>
        <span class="text-sm text-gray-500">End:</span>
        <span class="ml-1 font-medium">
          {{ endDate ? formatDate(endDate) : '-' }}
        </span>
      </div>
      <button
        class="text-sm text-red-500 hover:text-red-700"
        @click="resetSelection"
      >
        Reset
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRangeCalendar } from './composables/useRangeCalendar'
import {
  rangeCalendarStyle,
  rangeCalendarHeaderStyle,
  rangeCalendarTitleStyle,
  rangeCalendarNavigationStyle,
  rangeCalendarNavButtonStyle,
  rangeCalendarWeekdaysStyle,
  rangeCalendarWeekdayStyle,
  rangeCalendarDaysStyle,
  rangeCalendarDayStyle,
} from './index.variants'
import type { RangeCalendarProps } from './type'
import { RangeCalendarEmits } from './type'

const emit = defineEmits(RangeCalendarEmits)
const props = withDefaults(defineProps<RangeCalendarProps>(), {
  firstDayOfWeek: 0,
  disabled: false,
  readonly: false,
  unstyled: false,
})

const {
  startDate,
  endDate,
  currentYear,
  selectionMode,
  weekdays,
  daysInMonth,
  monthName,
  prevMonth,
  nextMonth,
  selectDate,
  resetSelection,
} = useRangeCalendar(props, emit)

const formatDate = (date: Date) => {
  const locale = props.locale || 'default'
  return new Intl.DateTimeFormat(locale).format(date)
}

const classes = computed(() => {
  return {
    root: props.unstyled
      ? props.pt?.root || ''
      : rangeCalendarStyle({ unstyled: props.unstyled, class: props.pt?.root }),
    header: props.unstyled
      ? props.pt?.header || ''
      : rangeCalendarHeaderStyle({ class: props.pt?.header }),
    title: props.unstyled
      ? props.pt?.title || ''
      : rangeCalendarTitleStyle({ class: props.pt?.title }),
    navigation: props.unstyled
      ? props.pt?.navigation || ''
      : rangeCalendarNavigationStyle({ class: props.pt?.navigation }),
    navButton: props.unstyled
      ? props.pt?.navButton || ''
      : rangeCalendarNavButtonStyle({ class: props.pt?.navButton }),
    weekdays: props.unstyled
      ? props.pt?.weekdays || ''
      : rangeCalendarWeekdaysStyle({ class: props.pt?.weekdays }),
    weekday: props.unstyled
      ? props.pt?.weekday || ''
      : rangeCalendarWeekdayStyle({ class: props.pt?.weekday }),
    days: props.unstyled
      ? props.pt?.days || ''
      : rangeCalendarDaysStyle({ class: props.pt?.days }),
    day: props.unstyled
      ? props.pt?.day || ''
      : rangeCalendarDayStyle({ class: props.pt?.day }),
    today: props.unstyled
      ? props.pt?.today || ''
      : rangeCalendarDayStyle({ isToday: true, class: props.pt?.today })
          .split(' ')
          .filter((c) => !rangeCalendarDayStyle().includes(c))
          .join(' '),
    selected: props.unstyled
      ? props.pt?.selected || ''
      : rangeCalendarDayStyle({ isSelected: true, class: props.pt?.selected })
          .split(' ')
          .filter((c) => !rangeCalendarDayStyle().includes(c))
          .join(' '),
    rangeStart: props.unstyled
      ? props.pt?.rangeStart || ''
      : rangeCalendarDayStyle({
          isRangeStart: true,
          class: props.pt?.rangeStart,
        })
          .split(' ')
          .filter((c) => !rangeCalendarDayStyle().includes(c))
          .join(' '),
    rangeEnd: props.unstyled
      ? props.pt?.rangeEnd || ''
      : rangeCalendarDayStyle({ isRangeEnd: true, class: props.pt?.rangeEnd })
          .split(' ')
          .filter((c) => !rangeCalendarDayStyle().includes(c))
          .join(' '),
    inRange: props.unstyled
      ? props.pt?.inRange || ''
      : rangeCalendarDayStyle({ isInRange: true, class: props.pt?.inRange })
          .split(' ')
          .filter((c) => !rangeCalendarDayStyle().includes(c))
          .join(' '),
    disabled: props.unstyled
      ? props.pt?.disabled || ''
      : rangeCalendarDayStyle({ isDisabled: true, class: props.pt?.disabled })
          .split(' ')
          .filter((c) => !rangeCalendarDayStyle().includes(c))
          .join(' '),
    adjacent: props.unstyled
      ? props.pt?.adjacent || ''
      : rangeCalendarDayStyle({ isAdjacent: true, class: props.pt?.adjacent })
          .split(' ')
          .filter((c) => !rangeCalendarDayStyle().includes(c))
          .join(' '),
  }
})
</script>
