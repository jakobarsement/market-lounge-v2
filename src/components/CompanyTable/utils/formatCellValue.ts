import { convertNumberToAbbreviation } from '@utils'
import appendPrefixOrSuffix from './appendPrefixOrSuffix'

export default function formatCellValue(
  dataPoint: number | string | null,
  title: string
): string {
  const decimalDigits = 3

  if (dataPoint !== null && !isNaN(Number(dataPoint))) {
    if (typeof dataPoint === 'number') {
      if (dataPoint > 1000) {
        dataPoint = Number(dataPoint).toFixed(0)
        dataPoint = convertNumberToAbbreviation(dataPoint)
      } else {
        dataPoint =
          Math.trunc(dataPoint * Math.pow(10, decimalDigits)) /
          Math.pow(10, decimalDigits)
      }

      dataPoint = appendPrefixOrSuffix(String(dataPoint), title)
    }
  } else if (dataPoint === null) {
    dataPoint = 'NA'
  } else {
    dataPoint = 'Error'
  }

  return String(dataPoint)
}
