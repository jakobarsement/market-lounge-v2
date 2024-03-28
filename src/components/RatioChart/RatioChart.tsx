'use client'
import Highcharts, { Options } from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'
import { useEffect, useState } from 'react'
import fmtData from './utils/fmtData'
import { CompanyRatios } from '@customTypes/finprep'
import { ChartLineColors } from '@enums/ChartLineColors'
import { useParams } from 'next/navigation'

type RatioChartProps = {
  indicator: keyof Omit<CompanyRatios, 'formattedDate'>
  yAxisLabel: string
}

function RatioChart({ indicator, yAxisLabel }: RatioChartProps) {
  const [chartData, setChartData] = useState<CompanyRatios[]>([])
  const { slug } = useParams()
  const companySymbol = Array.isArray(slug) ? slug[0] : slug

  const apiUrl = `${process.env.NEXT_PUBLIC_FINPREP_BASE_URL}/ratios/${companySymbol}?period=quarter&limit=140&apikey=${process.env.NEXT_PUBLIC_FINPREP_API_KEY}`

  useEffect(() => {
    ;(async () => {
      try {
        const res = await fetch(apiUrl)
        const data: CompanyRatios[] = await res.json()
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
      offset: 25,
      title: {
        text: yAxisLabel,
        style: {
          fontSize: '16px',
          color: 'whitesmoke',
          opacity: 0.7,
        },
      },
      gridLineColor: 'rgb(199, 195, 181)',
      gridLineWidth: 0.1,
      tickAmount: 7,
      labels: {
        align: 'left',
        x: 2,
        style: {
          color: 'whitesmoke',
          opacity: 0.5,
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
        name: Array.isArray(companySymbol)
          ? companySymbol.join(', ')
          : companySymbol,
        data: chartData.map((data) => data[indicator]),
        color: ChartLineColors.brightOrange,
        lineWidth: 1.4,
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
