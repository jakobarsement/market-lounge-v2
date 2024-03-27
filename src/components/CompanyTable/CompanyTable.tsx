'use client'
import React, { useState, useEffect } from 'react'
import { get } from 'lodash'
import { convertNumberToAbbreviation } from '@utils'
import { tableConfig } from './utils/tableConfig'
import appendPrefixOrSuffix from './utils/appendPrefixOrSuffix'
import { fmtData } from './utils/fmtData'

interface TableDataItem {
  title: string
  value: string | number
}

function CompanyTable() {
  const [data, setData] = useState<TableDataItem[]>([])
  const [loading, setLoading] = useState<boolean>(true)

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
              value: fmtData(cellValue, item.title),
            }
          })
          .catch((error) => {
            console.error('Error fetching table data:', error)
            return {
              title: item.title,
              value: 'NA',
            }
          })
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
        <div className="flex flex-wrap justify-center">
          {data.map((cellConfig, index) => (
            <div key={`tableCell${index}`} className="table-cell w-[215px] p-2">
              <span className="font-bold text-eight">{cellConfig?.title}:</span>
              <span className="ml-1 text-ml-white">{cellConfig?.value}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default CompanyTable
