export default function appendPrefixOrSuffix(value: string, title: string) {
  switch (title) {
    case 'Div/Yeild':
      return `${value}%`
    case 'QEPS':
      return `$${value}`
    default:
      return value
  }
}
