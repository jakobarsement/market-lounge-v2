'use client'
import Highcharts, { Options } from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'
import { useEffect, useState } from 'react'
import fmtData from './utils/fmtData'
import { CompanyRatios } from '@customTypes/finprep'

type RatioChartProps = {
  indicator: keyof Omit<CompanyRatios, 'formattedDate'>
  yAxisLabel: string
}

function RatioChart({ indicator, yAxisLabel }: RatioChartProps) {
  const [chartData, setChartData] = useState<CompanyRatios[]>([])
  const companySymbol = 'AAPL'

  const apiUrl = `${process.env.NEXT_PUBLIC_FINPREP_BASE_URL}/ratios/${companySymbol}?period=quarter&limit=140&apikey=${process.env.NEXT_PUBLIC_FINPREP_API_KEY}`

  useEffect(() => {
    ;(async () => {
      try {
        const res = await fetch(apiUrl)
        const data: CompanyRatios[] = await res.json()
        console.log({ data })
        setChartData(fmtData(data))
      } catch (error) {
        console.error('Error fetching RatioChart data:', error)
      }
    })()
  }, [apiUrl])

  const options: Options = {
    chart: {
      type: 'line',
      height: 200,
      backgroundColor: 'rgb(22,22,20)',
    },
    title: {
      text: undefined,
    },
    xAxis: {
      categories: chartData.map((data: any) => data.formattedDate),
      visible: false,
    },
    yAxis: {
      offset: 20,
      title: {
        text: yAxisLabel,
        style: {
          color: 'white',
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
        },
        enableMouseTracking: true,
      },
    },
    series: [
      {
        type: 'line',
        name: companySymbol,
        data: chartData.map((data) => data[indicator]),
        color: 'rgb(209, 156, 113)',
        lineWidth: 1.9,
        marker: {
          enabled: false,
        },
      },
    ],
    legend: {
      enabled: false,
    },
  }

  return (
    <div className="z-10 py-2">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  )
}

export default RatioChart
