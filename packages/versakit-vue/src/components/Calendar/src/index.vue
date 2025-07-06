<template>
  <div :class="classes.root">
    <div :class="classes.header">
      <div :class="classes.title">{{ monthName }} {{ currentYear }}</div>
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
          day.isDisabled ? classes.disabled : '',
          !day.isCurrentMonth ? classes.adjacent : '',
        ]"
        @click="selectDate(day.date)"
        :disabled="day.isDisabled || disabled || readonly"
      >
        {{ day.day }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useCalendar } from './composables/useCalendar'
import {
  calendarStyle,
  calendarHeaderStyle,
  calendarTitleStyle,
  calendarNavigationStyle,
  calendarNavButtonStyle,
  calendarWeekdaysStyle,
  calendarWeekdayStyle,
  calendarDaysStyle,
  calendarDayStyle,
} from './index.variants'
import type { CalendarProps } from './type'
import { CalendarEmits } from './type'

const emit = defineEmits(CalendarEmits)
const props = withDefaults(defineProps<CalendarProps>(), {
  firstDayOfWeek: 0,
  disabled: false,
  readonly: false,
  unstyled: false,
})

const {
  currentYear,
  weekdays,
  daysInMonth,
  monthName,
  prevMonth,
  nextMonth,
  selectDate,
} = useCalendar(props, emit)

const classes = computed(() => {
  return {
    root: props.unstyled
      ? props.pt?.root || ''
      : calendarStyle({ unstyled: props.unstyled, class: props.pt?.root }),
    header: props.unstyled
      ? props.pt?.header || ''
      : calendarHeaderStyle({ class: props.pt?.header }),
    title: props.unstyled
      ? props.pt?.title || ''
      : calendarTitleStyle({ class: props.pt?.title }),
    navigation: props.unstyled
      ? props.pt?.navigation || ''
      : calendarNavigationStyle({ class: props.pt?.navigation }),
    navButton: props.unstyled
      ? props.pt?.navButton || ''
      : calendarNavButtonStyle({ class: props.pt?.navButton }),
    weekdays: props.unstyled
      ? props.pt?.weekdays || ''
      : calendarWeekdaysStyle({ class: props.pt?.weekdays }),
    weekday: props.unstyled
      ? props.pt?.weekday || ''
      : calendarWeekdayStyle({ class: props.pt?.weekday }),
    days: props.unstyled
      ? props.pt?.days || ''
      : calendarDaysStyle({ class: props.pt?.days }),
    day: props.unstyled
      ? props.pt?.day || ''
      : calendarDayStyle({ class: props.pt?.day }),
    today: props.unstyled
      ? props.pt?.today || ''
      : calendarDayStyle({ isToday: true, class: props.pt?.today })
          .split(' ')
          .filter((c) => !calendarDayStyle().includes(c))
          .join(' '),
    selected: props.unstyled
      ? props.pt?.selected || ''
      : calendarDayStyle({ isSelected: true, class: props.pt?.selected })
          .split(' ')
          .filter((c) => !calendarDayStyle().includes(c))
          .join(' '),
    disabled: props.unstyled
      ? props.pt?.disabled || ''
      : calendarDayStyle({ isDisabled: true, class: props.pt?.disabled })
          .split(' ')
          .filter((c) => !calendarDayStyle().includes(c))
          .join(' '),
    adjacent: props.unstyled
      ? props.pt?.adjacent || ''
      : calendarDayStyle({ isAdjacent: true, class: props.pt?.adjacent })
          .split(' ')
          .filter((c) => !calendarDayStyle().includes(c))
          .join(' '),
  }
})
</script>
