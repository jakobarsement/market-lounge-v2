import { useEffect, useState } from 'react'
import { CompanyGrowth } from '@customTypes/finprep'
import HighchartsReact from 'highcharts-react-official'
import Highcharts, { Options } from 'highcharts/highstock'
import fmtData from './utils/fmtData'
import { ChartLineColors } from '@enums/ChartLineColors'
import { useParams } from 'next/navigation'

enum ChartConstants {
  lineWidth = 1.4,
}

const GrowthChart = () => {
  const [chartData, setChartData] = useState<CompanyGrowth[]>([])
  const { slug } = useParams()
  const companySymbol = Array.isArray(slug) ? slug[0] : slug

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
      height: 370,
      backgroundColor: 'rgb(22,22,20)',
    },
    tooltip: {
      formatter: function () {
        return `${this.series.name}: ${this.y}%`
      },
    },
    title: { text: undefined },
    xAxis: {
      categories: chartData.map((data: any) => data.formattedDate),
      labels: {
        style: {
          color: 'whitesmoke',
          opacity: 0.5,
        },
      },
    },
    yAxis: {
      labels: {
        style: {
          color: 'whitesmoke',
          opacity: 0.5,
        },
      },
      title: {
        text: 'Growth',
        style: {
          fontSize: '18px',
          color: 'whitesmoke',
          opacity: 0.7,
        },
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
        color: ChartLineColors.livelyGreen,
        lineWidth: ChartConstants.lineWidth,
      },
      {
        type: 'line',
        name: 'EBIT Growth',
        data: chartData.map((data) => data['ebitgrowth']),
        color: ChartLineColors.lightGrey,
        lineWidth: ChartConstants.lineWidth,
        visible: false,
      },
      {
        type: 'line',
        name: 'Revenue Growth',
        data: chartData.map((data) => data['revenueGrowth']),
        color: ChartLineColors.coolBlue,
        lineWidth: ChartConstants.lineWidth,
      },
      {
        type: 'line',
        name: 'Inventory Growth',
        data: chartData.map((data) => data['inventoryGrowth']),
        color: ChartLineColors.warmGrey,
        lineWidth: ChartConstants.lineWidth,
        visible: false,
      },
      {
        type: 'line',
        name: 'Free Cash Flow Growth',
        data: chartData.map((data) => data['freeCashFlowGrowth']),
        color: ChartLineColors.coolLavender,
        lineWidth: ChartConstants.lineWidth,
      },
      {
        type: 'line',
        name: 'Asset Growth',
        data: chartData.map((data) => data['assetGrowth']),
        color: ChartLineColors.darkerGrey,
        lineWidth: ChartConstants.lineWidth,
        visible: false,
      },
      {
        type: 'line',
        name: 'Debt Growth',
        data: chartData.map((data) => data['debtGrowth']),
        color: ChartLineColors.vividRed,
        lineWidth: ChartConstants.lineWidth,
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
