import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'
import { useEffect, useState } from 'react'
import { finPrepApiKey, finPrepBaseURL } from '@/utils/futureEnvVariables'
import formatData from './utils/formatData'

type Props = {
  indicator: string
  yAxisLabel: string
}

function RatioChart({ indicator, yAxisLabel }: Props) {
  const [chartData, setChartData] = useState<any[]>([])
  const company = 'AAPL'
  const apiUrl = `${finPrepBaseURL}/ratios/${company}?period=quarter&limit=140&apikey=${finPrepApiKey}`

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json()) // Parse the response to JSON
      .then((data) => {
        data = formatData(data)
        setChartData(data)
      })
      .catch((error) => console.error('Error:', error))
  }, [])

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
        name: company,
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
    <div className="company-ratio-chart">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  )
}

export default RatioChart
