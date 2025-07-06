export type TimelineProps = {
  align?: 'left' | 'right' | 'alternate'
  unstyled?: boolean
  pt?: TimelinePT
}

export type TimelinePT = {
  root?: string
  item?: string
}

export type TimelineItemProps = {
  dot?: string
  dotColor?: string
  line?: boolean
  lineColor?: string
  position?: 'left' | 'right'
  unstyled?: boolean
  pt?: TimelineItemPT
}

export type TimelineItemPT = {
  root?: string
  dot?: string
  content?: string
  opposite?: string
  line?: string
}

export const TimelineEmits = {
  click: (evt: MouseEvent) => evt instanceof MouseEvent,
}

export type ITimelineEmits = typeof TimelineEmits
