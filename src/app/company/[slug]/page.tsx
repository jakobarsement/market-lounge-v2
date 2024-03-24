'use client'
import CompanyHeader from '@components/CompanyHeader'
import SharePriceChart from '@components/SharePriceChart'
import CompanyTable from '@components/CompanyTable/CompanyTable'
import IntensityBar from '@components/IntensityBar'
import NewsFeed from '@components/NewsFeed'
import RatioChart from '@components/RatioChart/RatioChart'
const CompanyPage = () => {
  return (
    <div className="mt-4 flex w-full">
      <div className="w-1/5">
        <RatioChart yAxisLabel="PE Ratio" indicator="priceEarningsRatio" />
        <RatioChart yAxisLabel="Return On Equity" indicator="returnOnEquity" />
        <RatioChart yAxisLabel="Debt to Equity" indicator="debtEquityRatio" />
        <RatioChart yAxisLabel="Current Ratio" indicator="currentRatio" />
      </div>
      <div className="w-3/5">
        <CompanyHeader />
        <SharePriceChart />
        <CompanyTable />
        <IntensityBar
          key="revenueGrowth"
          indicator="revenueGrowth"
          title="Q/Q Revenue Growth"
          chartData={[]}
        />
        <IntensityBar
          key="ebitgrowth"
          indicator="ebitgrowth"
          title="Q/Q EBIT Growth"
          chartData={[]}
        />
      </div>
      <div className="ml-4 w-1/5">
        <NewsFeed />
      </div>
    </div>
  )
}

export default CompanyPage
