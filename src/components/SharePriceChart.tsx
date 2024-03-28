'use client'
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'
import { useEffect, useState } from 'react'
import { ChartLineColors } from '@enums/ChartLineColors'
import { useParams } from 'next/navigation'

const SharePriceChart = () => {
  const [chartData, setChartData] = useState<any[]>([])
  const { slug } = useParams()
  const companySymbol = Array.isArray(slug) ? slug[0] : slug

  const url = `${process.env.NEXT_PUBLIC_FINPREP_BASE_URL}/historical-price-full/${companySymbol}?serietype=line&apikey=${process.env.NEXT_PUBLIC_FINPREP_API_KEY}`

  useEffect(() => {
    const fetchChartData = async () => {
      try {
        const response = await fetch(url)
        if (!response.ok) {
          throw new Error(
            `Error fetching SharePriceChart data: ${response.status}`
          )
        }
        const data = await response.json()
        const historical: { date: Date; close: number }[] = data.historical

        const formattedData = historical
          ?.map((points) => [new Date(points.date).getTime(), points.close])
          .sort((a, b) => a[0] - b[0])

        setChartData(formattedData)
      } catch (error) {
        console.error('Error fetching SharePriceChart data:', error)
      }
    }

    fetchChartData()
  }, [])

  const stockOptions = {
    chart: {
      height: 300,
      min: 0,
      backgroundColor: 'rgb(22, 22, 20)',
    },

    navigator: {
      height: 18,
    },
    yAxis: {
      min: 0,
      gridLineColor: 'rgb(199, 195, 181)',
      gridLineWidth: 0.1,
      tickAmount: 13,
      labels: {
        align: 'left',
        x: 2,
        style: {
          color: 'rgb(226, 218, 185)',
        },
      },
    },
    xAxis: {
      labels: {
        style: {
          color: 'rgb(226, 218, 185)',
        },
      },
    },
    rangeSelector: {
      enabled: false,
      selected: 0,
      buttons: [
        {
          type: 'year',
          count: 5,
          text: '5y',
        },
      ],
    },
    scrollbar: {
      enabled: false,
    },
    series: [
      {
        id: companySymbol,
        name: companySymbol,
        data: chartData,
        tooltip: {
          valueDecimals: 2,
        },
        color: ChartLineColors.coolBlue,
      },
    ],
  }

  if (!chartData?.length) return null

  return (
    <div className="">
      <HighchartsReact
        highcharts={Highcharts}
        options={stockOptions}
        constructorType="stockChart"
      />
    </div>
  )
}

export default SharePriceChart
