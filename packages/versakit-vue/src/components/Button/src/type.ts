export type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link' | 'danger'
  size?: 'xs' | 'sm' | 'md' | 'lg'
  disabled?: boolean
  loading?: boolean
  fullWidth?: boolean
  rounded?: boolean
  type?: 'button' | 'submit' | 'reset'
}

export const ButtonEmits = {
  click: (evt: MouseEvent) => evt instanceof MouseEvent,
}

export type IButtonEmits = typeof ButtonEmits
