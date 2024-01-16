'use client'
import React, { useState, useContext } from 'react'
import { useRouter } from 'next/navigation'
import { upperCase } from 'lodash'

const LandingPage = () => {
  const router = useRouter()
  let searchTerm = ''

  const handleSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if ((e.key === 'Enter' || e.type === 'click') && !!searchTerm) {
      router.push(`/company/${upperCase(searchTerm)}`)
    }
  }

  return (
    <div className="h-80vh flex items-center justify-center">
      <div className="main w-full">
        <div className="content w-758 mx-auto">
          <h1 className="font-Hind-Light text-three mb-0 text-center text-6xl font-normal">
            market lounge
          </h1>

          <div className="ml-0 mt-20 flex w-full justify-center">
            <span>
              <i className="fas fa-search fa-2x search-icon left-50px top-16px text-whitesmoke relative cursor-pointer" />
            </span>
            <input
              type="text"
              placeholder="search company ticker"
              className="searchbar w-60vw h-60px text-whitesmoke text-24px rounded-31px bg-rgb-76 px-20px border-none text-center focus:outline-none"
              onChange={(e) => (searchTerm = e.target.value)}
              onKeyDown={handleSubmit}
            />
          </div>

          <div className="p-10px lg:p-15px flex flex-wrap items-center justify-center">
            <p className="whats-trending text-three text-20px mr-8px mb-0 font-normal">
              What's trending:
            </p>
            <button className="contact-submit-button h-28px font-Hind-Light text-whitesmoke text-16px bg-rgb-102 mx-3px my-3px rounded-10px font-normal">
              MSFT
            </button>
            <button className="contact-submit-button h-28px font-Hind-Light text-whitesmoke text-16px bg-rgb-102 mx-3px my-3px rounded-10px font-normal">
              GOOG
            </button>
            {/* Include other buttons similarly */}
          </div>
        </div>
      </div>
      <div className="bottom-2px h-190px bg-primary-background absolute z-[-1] w-screen bg-center bg-no-repeat" />
    </div>
  )
}

export default LandingPage

{
  /* <button className="contact-submit-button">MSFT</button>
<button className="contact-submit-button">GOOG</button>
<button className="contact-submit-button">AMZN</button>
<button className="contact-submit-button">UPWK</button>
<button className="contact-submit-button">BABA</button>
<button className="contact-submit-button">FVRR</button>
<button className="contact-submit-button">BYND</button>
<button className="contact-submit-button">TCEHY</button>
<button className="contact-submit-button">ETSY</button>
<button className="contact-submit-button">DIS</button>
<button className="contact-submit-button">F</button> */
}
