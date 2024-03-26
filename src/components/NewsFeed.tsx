'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faNewspaper } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'

const NewsFeed = () => {
  const [data, setData] = useState([])
  const apiUrl = `${process.env.NEXT_PUBLIC_FINPREP_BASE_URL}/stock_news?tickers=${'AAPL'}&limit=50&apikey=${process.env.NEXT_PUBLIC_FINPREP_API_KEY}`

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        setData(data)
      })
      .catch((error) => console.error('Error fetching NewsFeed data:', error))
  }, [])

  function renderNewsFeed() {
    if (!data?.length) return <>No news feed available.</>

    return (
      <div className="max-h-[85vh] overflow-y-auto">
        {data?.map((item: any, index: number) => {
          const { image, publishedDate, title, url } = item
          return (
            <div
              key={'card' + index}
              className="flex items-center gap-4 border-b border-b-eighteen p-4"
            >
              {image && (
                <img
                  src={image}
                  alt="img"
                  className="w-24 rounded-lg object-contain"
                />
              )}
              <span className="flex flex-col text-xs text-eight ">
                {url ? (
                  <a
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-700 text-sm font-semibold hover:underline"
                  >
                    {title}
                  </a>
                ) : (
                  <p className="text-sm font-semibold">{title}</p>
                )}
                <p>{publishedDate}</p>
              </span>
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <div>
      <h3 className="flex justify-center text-lg font-semibold text-three">
        <FontAwesomeIcon icon={faNewspaper} className="h-7 w-7 text-three" />
        <span className="ml-4">News Feed</span>
      </h3>
      {renderNewsFeed()}
    </div>
  )
}

export default NewsFeed
