import { CompanyGrowth } from '@customTypes/finprep'

export default function fmtData(data: CompanyGrowth[]): CompanyGrowth[] {
  if (!data?.length) return []

  return data.slice(0, 16).map(({ date, period, ...rest }) => ({
    ...rest,
    date,
    period,
    formattedDate: `${period}'${date.split('-')[0].substring(2, 4)}`,
  }))
}
