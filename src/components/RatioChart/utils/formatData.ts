type OriginalData = {
  date: string
  period: string
  returnOnEquity: number
  debtEquityRatio: number
  currentRatio: number
  priceEarningsRatio: number
}

type FormattedData = { formattedDate: string } & OriginalData

export default function formatData(data: OriginalData[]): FormattedData[] {
  return data.slice(0, 16).map(({ date, period, ...rest }) => ({
    date,
    period,
    returnOnEquity: Math.round(rest.returnOnEquity * 100) / 100,
    debtEquityRatio: Math.round(rest.debtEquityRatio * 100) / 100,
    currentRatio: Math.round(rest.currentRatio * 100) / 100,
    priceEarningsRatio: Math.round(rest.priceEarningsRatio * 100) / 100,
    formattedDate: `${period}'${date.split('-')[0].substring(2, 4)}`,
  }))
}
