// TODO change this when moving to paid tier of finprep
const companySymbol = 'AAPL'

interface TableConfigItem {
  title: string
  location: string
  apiUrl: string
}

export const tableConfig: TableConfigItem[] = [
  {
    title: 'Market Cap',
    location: '[0].marketCap',
    apiUrl: `${process.env.NEXT_PUBLIC_FINPREP_BASE_URL}/market-capitalization/${companySymbol}?apikey=${process.env.NEXT_PUBLIC_FINPREP_API_KEY}`,
  },
  {
    title: 'Avg. Volume',
    location: '[0].avgVolume',
    apiUrl: `${process.env.NEXT_PUBLIC_FINPREP_BASE_URL}/quote/${companySymbol}?apikey=${process.env.NEXT_PUBLIC_FINPREP_API_KEY}`,
  },
  {
    title: 'Cash & Eq.',
    location: '[0].cashAndCashEquivalents',
    apiUrl: `${process.env.NEXT_PUBLIC_FINPREP_BASE_URL}/balance-sheet-statement/${companySymbol}?limit=120&apikey=${process.env.NEXT_PUBLIC_FINPREP_API_KEY}`,
  },
  {
    title: 'QEPS',
    location: '[0].eps',
    apiUrl: `${process.env.NEXT_PUBLIC_FINPREP_BASE_URL}/income-statement/${companySymbol}?period=quarter&limit=400&apikey=${process.env.NEXT_PUBLIC_FINPREP_API_KEY}`,
  },
  {
    title: 'Enterprise Value',
    location: '[0].enterpriseValue',
    apiUrl: `${process.env.NEXT_PUBLIC_FINPREP_BASE_URL}/enterprise-values/${companySymbol}?period=quarter&limit=130&apikey=${process.env.NEXT_PUBLIC_FINPREP_API_KEY}`,
  },
  {
    title: 'Dividend',
    location: '[0].dividendYielPercentageTTM',
    apiUrl: `${process.env.NEXT_PUBLIC_FINPREP_BASE_URL}/ratios-ttm/${companySymbol}?apikey=${process.env.NEXT_PUBLIC_FINPREP_API_KEY}`,
  },
  {
    title: 'Quick Ratio',
    location: '[0].quickRatioTTM',
    apiUrl: `${process.env.NEXT_PUBLIC_FINPREP_BASE_URL}/ratios-ttm/${companySymbol}?apikey=${process.env.NEXT_PUBLIC_FINPREP_API_KEY}`,
  },
  {
    title: 'Current Ratio',
    location: '[0].currentRatioTTM',
    apiUrl: `${process.env.NEXT_PUBLIC_FINPREP_BASE_URL}/ratios-ttm/${companySymbol}?apikey=${process.env.NEXT_PUBLIC_FINPREP_API_KEY}`,
  },
  {
    title: 'PEG Ratio',
    location: '[0].pegRatioTTM',
    apiUrl: `${process.env.NEXT_PUBLIC_FINPREP_BASE_URL}/ratios-ttm/${companySymbol}?apikey=${process.env.NEXT_PUBLIC_FINPREP_API_KEY}`,
  },
  {
    title: 'Price/Book Ratio',
    location: '[0].priceBookValueRatioTTM',
    apiUrl: `${process.env.NEXT_PUBLIC_FINPREP_BASE_URL}/ratios-ttm/${companySymbol}?apikey=${process.env.NEXT_PUBLIC_FINPREP_API_KEY}`,
  },
]
