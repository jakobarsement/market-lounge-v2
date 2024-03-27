import { CompanyGrowth } from '@customTypes/finprep'

export default function fmtData(data: CompanyGrowth[]): CompanyGrowth[] {
  if (!data?.length) return []

  return data.slice(0, 16).map(({ date, period, ...rest }) => ({
    ...rest,
    date,
    period,
    epsgrowth: Number((rest.epsgrowth * 100).toFixed(2)),
    ebitgrowth: Number((rest.ebitgrowth * 100).toFixed(2)),
    revenueGrowth: Number((rest.revenueGrowth * 100).toFixed(2)),
    formattedDate: `${period}'${date.split('-')[0].substring(2, 4)}`,
  }))
}
