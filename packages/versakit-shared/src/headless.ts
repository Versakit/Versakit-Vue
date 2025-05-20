export const getPtClasses = (pt: any, key: any) => {
  const ptValue = pt?.[key]
  if (!ptValue) return ''

  if (typeof ptValue === 'string') {
    return ptValue
  }

  if (Array.isArray(ptValue)) {
    return ptValue.join(' ')
  }

  if (typeof ptValue === 'object') {
    return Object.entries(ptValue)
      .filter(([, value]) => value)
      .map(([className]) => className)
      .join(' ')
  }

  return ''
}
