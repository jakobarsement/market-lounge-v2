'use client'
import { CompanyProfile } from '@customTypes/finprep'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as Tooltip from '@radix-ui/react-tooltip'
import { useParams } from 'next/navigation'
import { useState, useEffect } from 'react'

const CompanyHeader = () => {
  const [summaryData, setSummaryData] = useState<CompanyProfile | null>(null)
  const { slug: companySymbol } = useParams()

  const summaryUrl = `${process.env.NEXT_PUBLIC_FINPREP_BASE_URL}/profile/${companySymbol}?apikey=${process.env.NEXT_PUBLIC_FINPREP_API_KEY}`

  useEffect(() => {
    ;(async () => {
      try {
        const response = await fetch(summaryUrl)
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data: CompanyProfile = (await response.json())[0]
        setSummaryData(data)
      } catch (error) {
        console.error('Error fetching CompanyHeader data:', error)
      }
    })()
  }, [])

  if (!summaryData) return null

  return (
    <div className="bg-blue-500 text-white flex items-center justify-between p-4">
      <div className="flex items-center">
        <h1 className="mr-2 text-2xl">{summaryData.companyName}</h1>
        <Tooltip.Provider delayDuration={0}>
          <Tooltip.Root>
            <Tooltip.Trigger asChild>
              <FontAwesomeIcon icon={faCircleInfo} className="text-line-1" />
            </Tooltip.Trigger>
            <Tooltip.Portal>
              <Tooltip.Content
                sideOffset={10}
                className="ml-8 w-[800px] rounded-lg bg-eleven p-2 text-ml-white"
              >
                {summaryData.description}
                <Tooltip.Arrow className="fill-eleven" />
              </Tooltip.Content>
            </Tooltip.Portal>
          </Tooltip.Root>
        </Tooltip.Provider>
      </div>
      <input
        type="text"
        placeholder="Search"
        className="bg-gray-200 rounded-full px-4 py-2"
      />
    </div>
  )
}

export default CompanyHeader
