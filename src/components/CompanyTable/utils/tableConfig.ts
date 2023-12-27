import { finPrepApiKey, finPrepBaseURL } from '@/utils/futureEnvVariables'
const company = 'AAPL'

interface TableConfigItem {
  title: string
  location: string
  apiUrl: string
}
export const tableConfig: TableConfigItem[] = [
  {
    title: 'Market Cap',
    location: '[0].marketCap',
    apiUrl: `${finPrepBaseURL}/market-capitalization/${company}?apikey=${finPrepApiKey}`,
  },
  {
    title: 'Avg. Volume',
    location: '[0].avgVolume',
    apiUrl: `${finPrepBaseURL}/quote/${company}?apikey=${finPrepApiKey}`,
  },
  {
    title: 'Cash & Eq.',
    location: '[0].cashAndCashEquivalents',
    apiUrl: `${finPrepBaseURL}/balance-sheet-statement/${company}?limit=120&apikey=${finPrepApiKey}`,
  },
  {
    title: 'QEPS',
    location: '[0].eps',
    apiUrl: `${finPrepBaseURL}/income-statement/${company}?period=quarter&limit=400&apikey=${finPrepApiKey}`,
  },
  {
    title: 'Enterprise Value',
    location: '[0].enterpriseValue',
    apiUrl: `${finPrepBaseURL}/enterprise-values/${company}?period=quarter&limit=130&apikey=${finPrepApiKey}`,
  },
  {
    title: 'Dividend',
    location: '[0].dividendYielPercentageTTM',
    apiUrl: `${finPrepBaseURL}/ratios-ttm/${company}?apikey=${finPrepApiKey}`,
  },
  {
    title: 'Quick Ratio',
    location: '[0].quickRatioTTM',
    apiUrl: `${finPrepBaseURL}/ratios-ttm/${company}?apikey=${finPrepApiKey}`,
  },
  {
    title: 'Current Ratio',
    location: '[0].currentRatioTTM',
    apiUrl: `${finPrepBaseURL}/ratios-ttm/${company}?apikey=${finPrepApiKey}`,
  },
  {
    title: 'PEG Ratio',
    location: '[0].pegRatioTTM',
    apiUrl: `${finPrepBaseURL}/ratios-ttm/${company}?apikey=${finPrepApiKey}`,
  },
  {
    title: 'Price/Book Ratio',
    location: '[0].priceBookValueRatioTTM',
    apiUrl: `${finPrepBaseURL}/ratios-ttm/${company}?apikey=${finPrepApiKey}`,
  },
]
