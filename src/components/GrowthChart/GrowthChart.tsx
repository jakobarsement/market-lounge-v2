import { useEffect, useState } from 'react'
import { CompanyGrowth } from '@customTypes/finprep'
import HighchartsReact from 'highcharts-react-official'
import Highcharts, { Options } from 'highcharts/highstock'
import fmtData from './utils/fmtData'

const GrowthChart = () => {
  const [chartData, setChartData] = useState<CompanyGrowth[]>([])
  const companySymbol = 'AAPL'

  const apiUrl = `${process.env.NEXT_PUBLIC_FINPREP_BASE_URL}/financial-growth/${companySymbol}?period=quarter&limit=8&apikey=${process.env.NEXT_PUBLIC_FINPREP_API_KEY}`

  useEffect(() => {
    ;(async () => {
      try {
        const res = await fetch(apiUrl)
        const data: CompanyGrowth[] = await res.json()
        setChartData(fmtData(data))
      } catch (error) {
        console.error('Error fetching GrowthChart data:', error)
      }
    })()
  }, [apiUrl])

  const options: Options = {
    chart: {
      type: 'line',
      height: 350,
      backgroundColor: 'rgb(22,22,20)',
    },
    title: {
      text: '',
    },
    xAxis: {
      visible: false,
    },
    yAxis: {
      offset: 20,
      title: {
        text: null,
      },
      gridLineColor: 'rgb(199, 195, 181)',
      gridLineWidth: 0.1,
      tickAmount: 7,
      endOnTick: true,
    },
    plotOptions: {
      line: {
        dataLabels: {
          enabled: false,
          borderWidth: 0,
          color: 'white',
        },
        enableMouseTracking: true,
      },
    },
    series: [
      {
        type: 'line',
        name: 'EPS Growth',
        data: chartData.map((data) => data['epsgrowth']),
        color: 'rgb(113, 209, 135)',
        lineWidth: 1.9,
      },
      {
        type: 'line',
        name: 'EBIT Growth',
        data: chartData.map((data) => data['ebitgrowth']),
        color: 'rgb(113, 153, 209)',
        lineWidth: 1.9,
      },
      {
        type: 'line',
        name: 'Revenue Growth',
        data: chartData.map((data) => data['revenueGrowth']),
        color: 'rgb(191, 191, 191)',
        lineWidth: 1.9,
      },
    ],
    legend: {
      itemStyle: {
        color: '#FFFF',
        opacity: 1,
      },
      itemHoverStyle: {
        color: '#FFFF',
        opacity: 0.8,
      },
    },
  }

  if (!chartData.length) return null

  return (
    <>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </>
  )
}

export default GrowthChart
