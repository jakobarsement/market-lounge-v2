import CompanyHeader from '@components/CompanyHeader'
import SharePriceChart from '@components/SharePriceChart'
import CompanyTable from '@components/CompanyTable/CompanyTable'
import NewsFeed from '@components/NewsFeed'
import RatioChart from '@components/RatioChart/RatioChart'
import IntensityBar from '@components/IntensityBar'
import { CompanyIndicators } from '@customTypes/finprep'

const CompanyPage = () => {
  return (
    <div className="flex w-full pt-4">
      <div className="w-1/5">
        <RatioChart
          yAxisLabel="PE Ratio"
          indicator={CompanyIndicators.PriceToEarnings}
        />
        <RatioChart
          yAxisLabel="Return On Equity"
          indicator={CompanyIndicators.ReturnOnEquity}
        />
        <RatioChart
          yAxisLabel="Debt to Equity"
          indicator={CompanyIndicators.DebtToEquity}
        />
        <RatioChart
          yAxisLabel="Current Ratio"
          indicator={CompanyIndicators.CurrentRatio}
        />
      </div>
      <div className="w-3/5">
        <CompanyHeader />
        <SharePriceChart />
        <CompanyTable />
        {/* <IntensityBar /> */}
      </div>
      <div className="ml-4 w-1/5">
        <NewsFeed />
      </div>
    </div>
  )
}

export default CompanyPage
