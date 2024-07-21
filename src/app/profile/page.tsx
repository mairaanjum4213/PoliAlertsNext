import React from 'react'
import PersonalInfo from '../_components/profile/PersonalInfo.tsx'
import Details from '../_components/modals/Details.tsx'
import Navbar from '../_components/navbar/Navbar.tsx'
export default function page() {
    return (
        <>
        <Navbar/>
            {/* standard -x axis gap */}
            {/* lg:px-24  md:px-10 px-5 py-5 md:py-10  */}
            {/* <button className='py-2 px-5 w-fit uppercase border-blueColor  font-semibold  border-2 rounded-xl text-blueColor'>
                    pro plan
                </button> */}
            <header
                className='lg:mx-28  md:mx-14 mx-5 py-5 md:py-10 border-b  border-b-iota  md:gap-5 gap-5 flex-col md:flex-row flex md:justify-between md:items-center'>
                <h2 className='text-headingColor font-bold md:text-[3rem] text-[2.3rem] '>Your Profile</h2>
                <button className='py-2 px-5 w-fit  h-fit uppercase border-blueColor  font-semibold  border-2 rounded-xl text-blueColor'>
                    pro plan
                </button>
            </header>
          <PersonalInfo/>

          <Details/>
        </>
    )
}
