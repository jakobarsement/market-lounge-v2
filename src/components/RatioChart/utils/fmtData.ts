import { CompanyRatios } from '@customTypes/finprep'

type FormattedData = { formattedDate: string } & Partial<CompanyRatios>

export default function fmtData(data: CompanyRatios[]) {
  if (!data?.length) return []

  const formattedData = data.slice(0, 16).map(({ date, period, ...rest }) => ({
    ...rest,
    date,
    period,
    returnOnEquity: Number(rest.returnOnEquity.toFixed(2)),
    debtEquityRatio: Number(rest.debtEquityRatio.toFixed(2)),
    currentRatio: Number(rest.currentRatio.toFixed(2)),
    priceEarningsRatio: Number(rest.priceEarningsRatio.toFixed(2)),
    formattedDate: `${period}'${date.split('-')[0].substring(2, 4)}`,
  }))
  return formattedData.reverse()
}
