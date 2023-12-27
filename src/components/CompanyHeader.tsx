import { useState, useEffect } from 'react'

const CompanyHeader = () => {
  const [summaryData, setSummaryData] = useState(null)

  return (
    <div className="flex items-center justify-between bg-blue-500 p-4 text-white">
      <div>
        <h1 className="text-2xl">example</h1>
        <p>example</p>
      </div>
      <input
        type="text"
        placeholder="Search"
        className="rounded-full bg-gray-200 px-4 py-2"
      />
    </div>
  )
}

export default CompanyHeader
