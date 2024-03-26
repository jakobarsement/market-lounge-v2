'use client'
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'
import { useEffect, useState } from 'react'
import formatData from './utils/formatData'
import { CompanyIndicators } from '@customTypes/finprep'

type Props = {
  indicator: CompanyIndicators
  yAxisLabel: string
}

function RatioChart({ indicator, yAxisLabel }: Props) {
  const [chartData, setChartData] = useState<any[]>([])
  const companySymbol = 'AAPL'

  const apiUrl = `${process.env.NEXT_PUBLIC_FINPREP_BASE_URL}/ratios/${companySymbol}?period=quarter&limit=140&apikey=${process.env.NEXT_PUBLIC_FINPREP_API_KEY}`

  useEffect(() => {
    ;(async () => {
      try {
        const res = await fetch(apiUrl)
        const data = await res.json()
        setChartData(formatData(data))
      } catch (error) {
        console.error('Error fetching RatioChart data:', error)
      }
    })()
  }, [apiUrl])

  const options = {
    chart: {
      type: 'line',
      height: 200,
      backgroundColor: 'rgb(22,22,20)',
    },
    title: {
      text: '',
    },
    xAxis: {
      categories: chartData.reverse().map((data: any) => data.formattedDate),
      visible: false,
    },
    yAxis: {
      offset: 20,
      title: {
        text: yAxisLabel,
        style: {
          color: 'white',
        },
        labels: {
          // maxStaggerLines: 1,
        },
      },
      gridLineColor: 'rgb(199, 195, 181)',
      gridLineWidth: 0.1,
      tickAmount: 7,
      labels: {
        align: 'left',
        x: 2,
        style: {
          color: 'rgb(199, 195, 181)',
        },
      },
    },
    plotOptions: {
      line: {
        dataLabels: {
          enabled: false,
          borderWidth: 0,
          color: 'white',
          style: {
            textOutline: 0,
          },
        },
        enableMouseTracking: true,
      },
    },
    series: [
      {
        name: companySymbol,
        data: chartData.map((data) => data[indicator]),
        color: 'rgb(209, 156, 113)',
        lineWidth: 1.9,
        marker: {
          enabled: false,
        },
      },
    ],
  }

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  )
}

export default RatioChart
