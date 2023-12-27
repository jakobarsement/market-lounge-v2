'use client'
import React, { useState, useEffect } from 'react'
import { get } from 'lodash'
import { convertNumberToAbbreviation } from '@/utils'
import { tableConfig } from './utils/tableConfig'
import appendPrefixOrSuffix from './utils/appendPrefixOrSuffix'

interface TableDataItem {
  title: string
  value: string | number
}

function CompanyTable() {
  const [data, setData] = useState<TableDataItem[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  // The below useEffect fetches data for each cell and waits from all promises to resolve before
  // rendering the table
  useEffect(() => {
    ;(async () => {
      // A promise for each cell
      const promises = tableConfig.map((item) =>
        fetch(item.apiUrl)
          .then((response) => {
            if (!response.ok) {
              throw new Error('Failed to fetch')
            }
            return response.json()
          })
          .then((result) => {
            const cellValue = get(result, item.location, null)

            return {
              title: item.title,
              value: formatFn(cellValue, item.title),
            }
          })
          .catch((error) => ({
            title: item.title,
            value: 'NA',
          }))
      )
      // Set data and loading state when all promises fulfill
      Promise.all(promises)
        .then((resolvedData) => {
          setData(resolvedData)
        })
        .finally(() => {
          setLoading(false)
        })
    })()
  }, [])

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="company-table flex flex-wrap items-center justify-center">
          {data.map((cellConfig, index) => (
            <div
              key={`tableCell${index}`}
              className="bg-secondary-background m-2 table-cell w-1/5 p-4 text-center"
            >
              <span className="cell-title text-eight font-bold">
                {cellConfig?.title}:
              </span>
              <span className="cell-content text-ml-white ml-1">
                {cellConfig?.value}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default CompanyTable

function formatFn(dataPoint: number | string | null, title: string): string {
  const decimalDigits = 3

  if (dataPoint !== null && !isNaN(Number(dataPoint))) {
    if (typeof dataPoint === 'number') {
      if (dataPoint > 1000) {
        dataPoint = Number(dataPoint).toFixed(0)
        dataPoint = convertNumberToAbbreviation(dataPoint)
      } else {
        dataPoint =
          Math.trunc(dataPoint * Math.pow(10, decimalDigits)) /
          Math.pow(10, decimalDigits)
      }

      dataPoint = appendPrefixOrSuffix(String(dataPoint), title)
    }
  } else if (dataPoint === null) {
    dataPoint = 'NA'
  } else {
    dataPoint = 'Error'
  }

  return String(dataPoint)
}
