import CompanyHeader from '@components/CompanyHeader'
import SharePriceChart from '@components/SharePriceChart'
import CompanyTable from '@components/CompanyTable/CompanyTable'
import NewsFeed from '@components/NewsFeed'
import RatioChart from '@components/RatioChart/RatioChart'

const CompanyPage = () => {
  return (
    <div className="flex w-full pt-4">
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
      </div>
      <div className="ml-4 w-1/5">
        <NewsFeed />
      </div>
    </div>
  )
}

export default CompanyPage
