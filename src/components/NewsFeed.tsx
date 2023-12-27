'use client'
import { useEffect, useState } from 'react'
import { finPrepApiKey, finPrepBaseURL } from '@/utils/futureEnvVariables'

const NewsFeed = () => {
  const [data, setData] = useState([])
  const apiUrl = `${finPrepBaseURL}/stock_news?tickers=${'AAPL'}&limit=50&apikey=${finPrepApiKey}`

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        setData(data)
      })
      .catch((error) => console.error('Error:', error))
  }, [])

  function renderNewsFeeds() {
    if (data.length) {
      return (
        <table>
          {data?.map((item: any, index: number) => {
            const { image, publishedDate, title, url } = item
            return (
              <tbody key={'head' + index} className="table-item">
                <tr key={'row' + index}>
                  <td key={'image' + index}>
                    {image && (
                      <img src={image} alt="img" className="feed-image" />
                    )}
                  </td>
                  <td key={'title' + index} className="link-tag">
                    {url && (
                      <div>
                        <a href={url} target="_blank" rel="noreferrer">
                          {title}
                        </a>
                      </div>
                    )}
                  </td>
                </tr>
                <tr key={'publishDate' + index}>
                  <td> </td>
                  {/* <td className="date-tag">{publishedDate && formatPublishedDateTime(publishedDate)}</td> */}
                  <td className="date-tag">{publishedDate}</td>
                </tr>
              </tbody>
            )
          })}
        </table>
      )
    } else {
      return <>No news feed available.</>
    }
  }

  return (
    <div className="news-feeds-table">
      <div className="news-feed-title">
        <h3>
          {/* <i className="fas fa-newspaper fa-1x"></i> {getCompanySymbol()} News */}
        </h3>
      </div>
      {renderNewsFeeds()}
    </div>
  )
}

export default NewsFeed
