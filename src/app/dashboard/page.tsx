'use client'
import React, { useState } from 'react'
import EmailSvg from '../../../public/assets/svg/email.svg'
export default function page() {
    const [value, setValue] = useState(20);
    const handleChange = (event: any) => {
        setValue(event.target.value);
    };
    const emails = [
        'john.doe@example.com',
        'jane.smith@example.com',
        'alice@example.com',
        'bob.brown@example.com'
    ];
    return (
        <>
            {/* standard -x axis gap */}
            {/* lg:px-24  md:px-10 px-5 py-5 md:py-10  */}
            {/* <button className='py-2 px-5 w-fit uppercase border-blueColor  font-semibold  border-2 rounded-xl text-blueColor'>
                    pro plan
                </button> */}
            <header
                className='lg:mx-28  md:mx-14 mx-5 py-5 md:py-10 border-b  border-b-iota  md:gap-5 gap-5 flex-col md:flex-row flex md:justify-between md:items-center'>
                <div className="flex flex-col md:flex-row items-end gap-2">
                    <h2 className='text-headingColor font-bold md:text-[3rem] text-[2.3rem]  '>Your Alerts</h2>
                    <p className='uppercase mb-3 '>pro make it repsonsive too  plan</p>
                </div>
                <button className='py-2 px-5 w-fit  h-fit uppercase border-blueColor  font-semibold  border-2 rounded-xl text-blueColor'>
                    Change it
                </button>
            </header>
            <section
                className='lg:mx-28  md:mx-14 mx-5 py-5 md:py-10  md:gap-5 gap-5 md:flex-row flex-col flex md:justify-between md:items-start'>
                <div className='flex w-full md:flex-row flex-col gap-5 '>
                    {/* left side */}
                    <div className="md:w-[35%]  w-full flex flex-col gap-5 ">
                        <p className='uppercase'>Federal</p>
                        <h2 className='font-bold'>Canadian State</h2>
                        <button className='py-2 px-5 w-fit  h-fit uppercase border-blueColor  font-semibold  border-2 rounded-full text-blueColor'>
                            Remove Area
                        </button>
                    </div>
                    {/* right-side */}
                    <div className="md:w-[65%] w-full ">
                        {/* first */}
                        <div className='flex md:flex-row flex-col md:gap-10 gap-5 mb-5'>
                            <div className='md:w-[50%] w-full'>
                                <div className="flex items-center gap-2 my-5">
                                    EmailSvg
                                    <h2 className='font-bold text-2xl'>Real time email alerts</h2>
                                </div>
                                <div className="bg-lightGray w-full rounded-xl  customScrollbar p-5 overflow-auto md:h-[50vh]">
                                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((index) => {
                                        return (
                                            <div key={index} className="bg-white my-5 text-bodyColor py-1 px-2 w-fit rounded-lg ">
                                                Charles Brown
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                            <div className='md:w-[50%] w-full'>
                                <div className="flex items-center gap-2 my-5">
                                    EmailSvg
                                    <h2 className='font-bold text-2xl'>End-of-day email alert</h2>
                                </div>

                                <div className="bg-lightGray w-full rounded-xl p-5 customScrollbar overflow-auto md:h-[50vh]">
                                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((index) => {
                                        return (
                                            <div key={index} className="bg-white my-5 text-bodyColor py-1 px-2 w-fit rounded-lg ">
                                                Charles Brown
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                        {/* Quotes */}
                        <div className='flex md:flex-row flex-col  md:items-center gap-5'>
                            {/* change color of slider in gobal css */}
                            {/* right */}
                            <div className='md-w-[50%]  w-full'>
                                <div className="flex items-center gap-2 my-5">
                                    QuoteslSvg
                                    <h2 className='font-bold text-2xl'>Quote Context</h2>
                                </div>
                                <p className='block mb-2 text-base text-bodyColor '>Use the slider to control how many words are quoted before and after each keyword in your alert email</p>
                            </div>
                            {/* left */}
                            <div className='md-w-[50%] w-full'>
                                <div className="flex items-center bg-lightGray rounded-full space-x-4 p-4">
                                    <span className="text-lg font-semibold">{value} </span>
                                    <input
                                        type="range"
                                        min="0"
                                        max="100"
                                        value={value}
                                        onChange={handleChange}
                                        className="appearance-none w-full h-2 rounded-full bg-gray-200"
                                        style={{
                                            background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${value}%, #e5e7eb ${value}%, #e5e7eb 100%)`,
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                        {/* reciept */}
                        <div className="flex items-center gap-2 my-5">
                            EmailSvg
                            <h2 className='font-bold text-2xl'>Recipients</h2>
                        </div>
                        <div className="md:flex-row flex flex-col  gap-5 md:gap-2">
                            <input
                                required
                                name='first-name'
                                type="text"
                                className='rounded-full border h-fit border-blueColor outline-none w-full md:w-[40%] py-1 px-3'
                                placeholder='Enter new email address' />
                            <button
                                type='submit'
                                className='py-1 px-5 w-fit  h-fit  bg-blueColor  rounded-full font-semibold border-transparent border-2 text-white'>
                                Add
                            </button>
                        </div>
                        {/* email container */}
                        <div className="flex flex-wrap gap-2  bg-lightGray md:p-10 p-5 rounded-2xl w-full my-5">
                            {emails.map((email, index) => (
                                <div className="bg-white  rounded-md py-1 px-2" key={index}>{email}
                                    {/* maira add svg */}
                                    <button className='mx-2 text-orange-500'> x</button>
                                </div>
                            ))}
                        </div>
                        <p className='block mb-2 text-base text-bodyColor '>Changes made above are not saved until you confirm with "save changes" button</p>
                        <div className="flex flex-col md:flex-row gap-5 my-5">
                            <button
                                type='submit'
                                className='py-2 px-5 w-fit  h-fit  bg-blueColor  rounded-full font-semibold border-transparent border-2 text-white'>
                                Save changes
                            </button>
                            <button className='py-2 px-5 w-fit  h-fit uppercase border-blueColor  font-semibold  border-2 rounded-full text-blueColor'>
                                Revert
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
