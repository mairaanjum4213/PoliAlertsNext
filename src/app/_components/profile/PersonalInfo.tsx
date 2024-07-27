'use client'
import React, { useState } from 'react'
export default function PersonalInfo() {
    const [firstName, setFirstName] = useState('')
    const handleSubmit = (e: any) => {
        e.prevent.default()
    }
    return (
        <>
            <section
                className='lg:mx-28  md:mx-14 mx-5 py-5 md:py-10  md:gap-5 gap-5 md:flex-row flex-col flex md:justify-between md:items-start'>
                <h3 className='text-headingColor font-bold md:text-[2.1rem] text-[1.6rem] md:w-[40%]'>
                    Personal Information
                </h3>
                <div
                    className=' md:w-[60%]'>
                    <form
                        onSubmit={handleSubmit}
                        className=' gap-x-5 md:gap-y-10 gap-5   grid md:grid-cols-2 grid-cols-1 mb-10'>
                        <section className=''>
                            <label htmlFor="first-name" className='block mb-2 text-base text-bodyColor'>First Name</label>
                            <input
                                required
                                value={firstName}
                                onChange={(e) => { setFirstName(e.target.value) }}
                                name='first-name'
                                type="text"
                                className='rounded-full border border-blueColor outline-none w-full py-2 px-3'
                                placeholder='John' />
                        </section>
                        <section className=''>
                            <label htmlFor="last-name" className='block mb-2 text-base text-bodyColor'>Last Name</label>
                            <input
                                required
                                name='last-name'
                                type="text"
                                className='rounded-full border border-blueColor outline-none w-full py-2 px-3'
                                placeholder='Smith' />
                        </section>
                        <section className=''>
                            <label htmlFor="email" className='block mb-2 text-base text-bodyColor'>Email address</label>
                            <input
                                required
                                name='email'
                                type="email"
                                className='rounded-full border border-blueColor outline-none w-full py-2 px-3'
                                placeholder='john.smith@email.com' />
                        </section>
                        <section className=''>
                            <label htmlFor="phone" className='block mb-2 text-base text-bodyColor'>Phone number</label>
                            <input
                                required
                                name='phone'
                                type="tel"
                                className='rounded-full border border-blueColor outline-none w-full py-2 px-3'
                                placeholder='416-555-5555' />
                        </section>
                        <section className=''>
                            <label htmlFor="street" className='block mb-2 text-base text-bodyColor'>Street number and name </label>
                            <input
                                name='street'
                                type="text"
                                className='rounded-full border border-blueColor outline-none w-full py-2 px-3'
                                placeholder='25 Main Street' />
                        </section>
                        <section className=''>
                            <label htmlFor="City" className='block mb-2 text-base text-bodyColor'>City</label>
                            <input
                                name='City'
                                type="text"
                                className='rounded-full border border-blueColor outline-none w-full py-2 px-3'
                                placeholder='Toronto' />
                        </section>
                        <section className=''>
                            <label htmlFor="country" className='block mb-2 text-base text-bodyColor'>Country</label>
                            <input
                                name='country'
                                type="text"
                                className='rounded-full border border-blueColor outline-none w-full py-2 px-3'
                                placeholder='Canada' />
                        </section>
                        <section className=''>
                            <label htmlFor="postal-code" className='block mb-2 text-base text-bodyColor'>Postal code</label>
                            <input
                                name='postal-code'
                                type="text"
                                className='rounded-full border border-blueColor outline-none w-full py-2 px-3'
                                placeholder='M5E 0A2' />
                        </section>
                        <section className='buttons flex gap-5  md:flex-row flex-col '>
                            <button
                                type='submit'
                                className='py-2 px-5 w-fit  h-fit  bg-blueColor  rounded-full font-semibold border-transparent border-2 text-white'>
                                Save changes
                            </button>
                            <button className='py-2 px-5 w-fit  h-fit  border-blueColor  font-semibold  border-2  rounded-full text-blueColor'>
                                Revert
                            </button>
                        </section>
                    </form>
                </div>
            </section>
        </>
    )
}
