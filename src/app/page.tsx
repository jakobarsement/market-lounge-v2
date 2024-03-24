'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import { upperCase } from 'lodash'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const COMPANIES = [
  'MSFT',
  'GOOG',
  'AMZN',
  'UPWK',
  'BABA',
  'FVRR',
  'BYND',
  'TCEHY',
  'ETSY',
  'DIS',
  'F',
]

const LandingPage = () => {
  const router = useRouter()
  let searchTerm = ''

  const handleSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if ((e.key === 'Enter' || e.type === 'click') && !!searchTerm) {
      router.push(`/company/${upperCase(searchTerm)}`)
    }
  }

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="w-full">
        <div className="mx-auto w-3/4">
          <h1 className="text-gray-700 mb-0 text-center text-6xl font-light text-three">
            market lounge
          </h1>

          <div className="relative right-6 mt-8 flex items-center justify-center">
            <FontAwesomeIcon
              icon={faSearch}
              className="text-gray-400 relative left-12 ml-4"
              size="2x"
              color="whitesmoke"
            />
            <input
              type="text"
              placeholder="search company ticker"
              className="text-gray-300 bg-gray-800 h-16 w-1/3 min-w-[350px] rounded-full border-none bg-eleven pl-12 text-center text-2xl focus:outline-none"
              onChange={(e) => (searchTerm = e.target.value)}
              onKeyDown={handleSubmit}
            />
          </div>

          <div className="flex flex-wrap items-center justify-center p-2 lg:p-4">
            <p className="text-gray-700 mb-0 mr-2 text-2xl font-light">
              {`What's trending:`}
            </p>
            {COMPANIES.map((name) => {
              return (
                <Link
                  key={name}
                  href={`/company/${name}`}
                  className="text-white bg-gray-500 mx-1 my-1 h-7 rounded-full text-base font-light"
                >
                  <button className="btn btn-sm">{name}</button>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
      <svg
        className="pointer-events-none absolute bottom-0 w-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#0099ff"
          fillOpacity="0.1"
          d="M0,96L48,106.7C96,117,192,139,288,138.7C384,139,480,117,576,122.7C672,128,768,160,864,154.7C960,149,1056,107,1152,106.7C1248,107,1344,149,1392,170.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </div>
  )
}

export default LandingPage
