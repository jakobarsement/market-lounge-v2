import { CompanyRatios } from '@customTypes/finprep'

type FormattedData = { formattedDate: string } & Partial<CompanyRatios>

export default function fmtData(data: CompanyRatios[]) {
  if (!data?.length) return []

  const formattedData = data
    .slice(0, 16)
    .map(({ period, calendarYear, ...rest }) => ({
      ...rest,
      period,
      calendarYear,
      returnOnEquity: Number(rest.returnOnEquity.toFixed(2)),
      debtEquityRatio: Number(rest.debtEquityRatio.toFixed(2)),
      currentRatio: Number(rest.currentRatio.toFixed(2)),
      priceEarningsRatio: Number(rest.priceEarningsRatio.toFixed(2)),
      formattedDate: `${period}'${calendarYear.slice(-2)}`,
    }))
  return formattedData.reverse()
}
