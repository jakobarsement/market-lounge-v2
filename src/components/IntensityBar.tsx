import { useEffect, useState } from 'react'
import * as d3 from 'd3'

type ChartDataItem = any
type Props = {
  company: string
  indicator: string
  title: string
  chartData: ChartDataItem[]
}

const IntensityBar = ({ company, indicator, title, chartData }: Props) => {
  let barWidth = 96
  let barHeight = 9.5

  //get window width on change
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const handleResize = () => {
    setWindowWidth(window.innerWidth)
  }
  useEffect(() => {
    window.addEventListener('resize', handleResize, false)
  }, [])
  //

  // adjust style based on window size
  const [fontSize, setFontSize] = useState('12')
  const [barMargin, setBarMargin] = useState('50')
  const [topTextMargin, setTopTextMargin] = useState<string>('50')
  const [bottomTextMargin, setBottomTextMargin] = useState<string>('50')
  useEffect(() => {
    windowWidth < 1380 && setFontSize('11')
    windowWidth < 1200 && setFontSize('13')
    windowWidth < 850 && setFontSize('18')
    windowWidth < 500 && setFontSize('23')

    setBarMargin('50')
    windowWidth > 680 && setBarMargin('28')

    setTopTextMargin('0')
    windowWidth > 680 && setTopTextMargin('30')
    windowWidth > 840 && setTopTextMargin('40')
    setBottomTextMargin('0')
    windowWidth > 680 && setBottomTextMargin('30')
    windowWidth > 840 && setBottomTextMargin('45')
  }, [windowWidth, fontSize])
  //

  if (!chartData) return null

  const domainValues = chartData.map((data: any) => data[indicator])
  const opacityScale = d3
    .scaleLinear()
    .domain([d3.min(domainValues), d3.max(domainValues)])
    .range([0, 1])

  return (
    <>
      <h3 className="title">{title}</h3>
      <svg viewBox="0 0 1000 133 " preserveAspectRatio="xMidYMin">
        <defs>
          <linearGradient id={indicator}>
            {chartData.map((data: any, index: number) => {
              const value = data[indicator]
              const maxAbsValue = d3.max(chartData, (d) =>
                Math.abs(d[indicator])
              )
              const opacity =
                value >= 0 || !maxAbsValue
                  ? 1
                  : 1 - Math.abs(value) / maxAbsValue
              const stopColor =
                value >= 0 ? 'rgb(113, 209, 134)' : 'rgb(209, 100, 100)'
              return (
                <stop
                  key={index}
                  offset={`${14.28 * index}%`}
                  stopColor={stopColor}
                  stopOpacity={opacity}
                />
              )
            })}
          </linearGradient>
        </defs>
        {/* 'rgb(209, 100, 100)'  */}
        <rect
          x="20"
          y={`${barMargin}`}
          width={`${barWidth}%`}
          height={`${barHeight}%`}
          fill={`url(#${indicator})`}
          stroke="none"
          strokeWidth="1"
          rx="7"
          ry="7"
        />

        <g transform={`translate(33,${100 - Number(topTextMargin)})`}>
          {chartData.map((data, index) => (
            <text
              key={index}
              x={132 * index}
              textAnchor="middle"
              fontSize={`${fontSize}px`}
              fontWeight="500"
              fill="rgb(216, 216, 215)"
            >
              {data[indicator]}%
            </text>
          ))}
        </g>
        <g transform={`translate(33,${120 - Number(bottomTextMargin)})`}>
          {chartData.map((data, index) => (
            <text
              key={index}
              x={132 * index}
              y={3}
              textAnchor="middle"
              fontSize={`${fontSize}px`}
              fontWeight="bold"
              fill="rgb(198, 194, 180)"
            >
              {data.formattedDate}
            </text>
          ))}
        </g>
      </svg>
    </>
  )
}

export default IntensityBar
