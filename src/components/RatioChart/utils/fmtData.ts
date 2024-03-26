import { CompanyRatios } from '@customTypes/finprep'

type FormattedData = { formattedDate: string } & Partial<CompanyRatios>

export default function fmtData(data: CompanyRatios[]) {
  if (!data?.length) return []

  return data.slice(0, 16).map(({ date, period, ...rest }) => ({
    ...rest,
    date,
    period,
    returnOnEquity: Math.round(rest.returnOnEquity * 100) / 100,
    debtEquityRatio: Math.round(rest.debtEquityRatio * 100) / 100,
    currentRatio: Math.round(rest.currentRatio * 100) / 100,
    priceEarningsRatio: Math.round(rest.priceEarningsRatio * 100) / 100,
    formattedDate: `${period}'${date.split('-')[0].substring(2, 4)}`,
  }))
}
