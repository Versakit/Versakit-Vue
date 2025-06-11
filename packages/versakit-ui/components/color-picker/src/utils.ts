import type { ColorState, ColorFormat } from './type'

// RGB颜色转HSV
export function rgbToHsv(
  r: number,
  g: number,
  b: number,
): { h: number; s: number; v: number } {
  r /= 255
  g /= 255
  b /= 255

  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  const delta = max - min

  let h = 0
  const s = max === 0 ? 0 : delta / max
  const v = max

  if (delta === 0) {
    h = 0
  } else if (max === r) {
    h = ((g - b) / delta) % 6
  } else if (max === g) {
    h = (b - r) / delta + 2
  } else {
    h = (r - g) / delta + 4
  }

  h = Math.round(h * 60)
  if (h < 0) h += 360

  return {
    h,
    s: Math.round(s * 100),
    v: Math.round(v * 100),
  }
}

// HSV颜色转RGB
export function hsvToRgb(
  h: number,
  s: number,
  v: number,
): { r: number; g: number; b: number } {
  h = (h % 360) / 60
  s = s / 100
  v = v / 100

  const c = v * s
  const x = c * (1 - Math.abs((h % 2) - 1))
  const m = v - c

  let r = 0,
    g = 0,
    b = 0

  if (h >= 0 && h < 1) {
    r = c
    g = x
    b = 0
  } else if (h >= 1 && h < 2) {
    r = x
    g = c
    b = 0
  } else if (h >= 2 && h < 3) {
    r = 0
    g = c
    b = x
  } else if (h >= 3 && h < 4) {
    r = 0
    g = x
    b = c
  } else if (h >= 4 && h < 5) {
    r = x
    g = 0
    b = c
  } else {
    r = c
    g = 0
    b = x
  }

  return {
    r: Math.round((r + m) * 255),
    g: Math.round((g + m) * 255),
    b: Math.round((b + m) * 255),
  }
}

// RGB转十六进制
export function rgbToHex(r: number, g: number, b: number, a?: number): string {
  const toHex = (n: number) => {
    const hex = n.toString(16)
    return hex.length === 1 ? '0' + hex : hex
  }

  if (a !== undefined && a < 1) {
    return `#${toHex(r)}${toHex(g)}${toHex(b)}${toHex(Math.round(a * 255))}`
  }

  return `#${toHex(r)}${toHex(g)}${toHex(b)}`
}

// 十六进制转RGB
export function hexToRgb(hex: string): {
  r: number
  g: number
  b: number
  a?: number
} {
  // 移除可能的 # 前缀
  hex = hex.replace(/^#/, '')

  let r, g, b, a

  if (hex.length === 3) {
    // 简写的十六进制 (#RGB)
    r = parseInt(hex.charAt(0) + hex.charAt(0), 16)
    g = parseInt(hex.charAt(1) + hex.charAt(1), 16)
    b = parseInt(hex.charAt(2) + hex.charAt(2), 16)
    a = 1
  } else if (hex.length === 4) {
    // 简写的十六进制带透明度 (#RGBA)
    r = parseInt(hex.charAt(0) + hex.charAt(0), 16)
    g = parseInt(hex.charAt(1) + hex.charAt(1), 16)
    b = parseInt(hex.charAt(2) + hex.charAt(2), 16)
    a = parseInt(hex.charAt(3) + hex.charAt(3), 16) / 255
  } else if (hex.length === 6) {
    // 标准十六进制 (#RRGGBB)
    r = parseInt(hex.substring(0, 2), 16)
    g = parseInt(hex.substring(2, 4), 16)
    b = parseInt(hex.substring(4, 6), 16)
    a = 1
  } else if (hex.length === 8) {
    // 标准十六进制带透明度 (#RRGGBBAA)
    r = parseInt(hex.substring(0, 2), 16)
    g = parseInt(hex.substring(2, 4), 16)
    b = parseInt(hex.substring(4, 6), 16)
    a = parseInt(hex.substring(6, 8), 16) / 255
  } else {
    throw new Error('Invalid HEX color format')
  }

  return { r, g, b, a }
}

// 解析任何格式的颜色值为HSV
export function parseColor(color: string): ColorState {
  // 默认值
  const defaultState: ColorState = { h: 0, s: 0, v: 0, a: 1 }

  // 移除空格
  color = color.trim()

  // 检测颜色格式
  if (color.startsWith('#')) {
    // 十六进制
    try {
      const { r, g, b, a = 1 } = hexToRgb(color)
      const { h, s, v } = rgbToHsv(r, g, b)
      return { h, s, v, a }
    } catch {
      return defaultState
    }
  } else if (color.startsWith('rgb')) {
    // RGB 或 RGBA
    const match = color.match(
      /rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d*\.?\d+))?\)/,
    )
    if (match) {
      const r = parseInt(match[1])
      const g = parseInt(match[2])
      const b = parseInt(match[3])
      const a = match[4] ? parseFloat(match[4]) : 1
      const { h, s, v } = rgbToHsv(r, g, b)
      return { h, s, v, a }
    }
  } else if (color.startsWith('hsl')) {
    // HSL 或 HSLA
    const match = color.match(
      /hsla?\((\d+),\s*(\d+)%,\s*(\d+)%(?:,\s*(\d*\.?\d+))?\)/,
    )
    if (match) {
      const h = parseInt(match[1])
      const s = parseInt(match[2])
      const l = parseInt(match[3])
      const a = match[4] ? parseFloat(match[4]) : 1

      // HSL转HSV
      const sNormalized = s / 100
      const lNormalized = l / 100

      const v =
        lNormalized + sNormalized * Math.min(lNormalized, 1 - lNormalized)
      const s2 = v === 0 ? 0 : 2 * (1 - lNormalized / v)

      return {
        h,
        s: Math.round(s2 * 100),
        v: Math.round(v * 100),
        a,
      }
    }
  }

  // 无法解析，返回默认值
  return defaultState
}

// 格式化颜色值为指定格式
export function formatColor(
  color: ColorState,
  format: ColorFormat = 'hex',
): string {
  const { h, s, v, a } = color
  const { r, g, b } = hsvToRgb(h, s, v)

  switch (format) {
    case 'hex':
      return rgbToHex(r, g, b, a)
    case 'rgb':
      return a < 1
        ? `rgba(${r}, ${g}, ${b}, ${a.toFixed(2)})`
        : `rgb(${r}, ${g}, ${b})`
    case 'hsl': {
      // HSV转HSL
      const vNormalized = v / 100
      const sNormalized = s / 100

      const l = vNormalized * (1 - sNormalized / 2)
      const s2 = l === 0 || l === 1 ? 0 : (vNormalized - l) / Math.min(l, 1 - l)

      const hslS = Math.round(s2 * 100)
      const hslL = Math.round(l * 100)

      return a < 1
        ? `hsla(${h}, ${hslS}%, ${hslL}%, ${a.toFixed(2)})`
        : `hsl(${h}, ${hslS}%, ${hslL}%)`
    }
    default:
      return rgbToHex(r, g, b, a)
  }
}

// 生成彩虹色谱
export function generateHueColors(count: number = 12): string[] {
  const colors: string[] = []
  for (let i = 0; i < count; i++) {
    const h = Math.round((i * 360) / count)
    const { r, g, b } = hsvToRgb(h, 100, 100)
    colors.push(rgbToHex(r, g, b))
  }
  return colors
}

// 生成默认预设颜色
export function generateDefaultPresets(): string[] {
  return [
    '#000000',
    '#FFFFFF',
    '#F44336',
    '#E91E63',
    '#9C27B0',
    '#673AB7',
    '#3F51B5',
    '#2196F3',
    '#03A9F4',
    '#00BCD4',
    '#009688',
    '#4CAF50',
    '#8BC34A',
    '#CDDC39',
    '#FFEB3B',
    '#FFC107',
    '#FF9800',
    '#FF5722',
    '#795548',
    '#9E9E9E',
  ]
}
