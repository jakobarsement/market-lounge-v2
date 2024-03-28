import { CompanyGrowth } from '@customTypes/finprep'

export default function fmtData(data: CompanyGrowth[]): CompanyGrowth[] {
  if (!data?.length) return []

  const formattedData = data
    .slice(0, 16)
    .map(({ calendarYear, period, ...rest }) => ({
      ...rest,
      period,
      calendarYear,
      debtGrowth: Number((rest.debtGrowth * 100).toFixed(2)),
      freeCashFlowGrowth: Number((rest.freeCashFlowGrowth * 100).toFixed(2)),
      assetGrowth: Number((rest.assetGrowth * 100).toFixed(2)),
      inventoryGrowth: Number((rest.inventoryGrowth * 100).toFixed(2)),
      epsgrowth: Number((rest.epsgrowth * 100).toFixed(2)),
      ebitgrowth: Number((rest.ebitgrowth * 100).toFixed(2)),
      revenueGrowth: Number((rest.revenueGrowth * 100).toFixed(2)),
      formattedDate: `${period}'${calendarYear.slice(-2)}`,
    }))
  return formattedData.reverse()
}
