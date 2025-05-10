export const getPtClass = (key: any, props: any) => {
  const ptValue = props.pt?.[key]
  if (!ptValue) return ''

  if (typeof ptValue === 'string') {
    return ptValue
  }

  if (typeof ptValue === 'object') {
    if (Array.isArray(ptValue)) {
      return ptValue.join(' ')
    }
    return Object.entries(ptValue)
      .filter(([, value]) => value)
      .map(([, value]) => (typeof value === 'string' ? value : ''))
      .filter(Boolean)
      .join(' ')
  }

  return ''
}
