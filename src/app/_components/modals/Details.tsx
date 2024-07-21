'use client'
import React from 'react'
import { IoMdClose } from "react-icons/io";
import Modal from 'react-modal';
export default function Details() {
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      width: '50%',
      padding: '10% 2% 10% 2%',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  //   Modal.setAppElement('#yourAppElement');
  var subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }
  function closeModal() {
    setIsOpen(false);
  }
  return (
    <>
      <div>
        <div
          onClick={openModal}
          className='curor-pointer '>
          Cancel Plan
        </div>
        <Modal
          className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%]  md:w-[40%] py-16 px-10 bg-white shadow-sm outline-none border rounded-3xl'
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          // style={customStyles}
          contentLabel="Delete Confirmation Modal"
        >
          <div
            onClick={closeModal}
            className='absolute top-3  cursor-pointer right-5'>
            <IoMdClose className='text-darkGray text-2xl' />
          </div>
          {/* <button onClick={closeModal}>close</button> */}
          <div className='font-semibold text-xl'>
            {/* content here */}
            <div className="flex  gap-3 items-center">
              <svg
                width='30'
                height='30'
                id="Layer_2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 62.55 55.37"><defs></defs><g id="Layer_1-2"><path fill='#2166cc' d="m53.84,55.37H8.71c-3.17,0-5.99-1.64-7.55-4.39-1.57-2.75-1.54-6.02.08-8.74L23.8,4.25C25.38,1.59,28.18,0,31.27,0c3.1,0,5.89,1.59,7.47,4.25l22.57,37.99c1.62,2.72,1.65,5.99.08,8.74-1.57,2.75-4.39,4.39-7.55,4.39ZM31.27,6c-.46,0-1.61.13-2.31,1.32L6.39,45.31c-.72,1.21-.26,2.3-.02,2.71.23.41.93,1.36,2.34,1.36h45.13c1.41,0,2.11-.95,2.34-1.36.23-.41.7-1.49-.02-2.71L33.59,7.32c-.71-1.19-1.85-1.32-2.31-1.32Z" /><rect fill='#2166cc' x="28.27" y="16.76" width="6" height="19.18" /><rect fill='#2166cc' x="28.27" y="39.33" width="6" height="5.27" /></g></svg>
              <h1 className='font-bold text-3xl'>
                Cancel Plan
              </h1>
            </div>
          </div>
          <div className='flex gap-5 md:flex-row flex-col '>
            <div className='border-blueColor border rounded-full px-5 py-3 outline-none'>
              <select name="" id="">
                <option value="">Cancellation Date</option>
              </select>
            </div>
            <button
              className='py-2 px-5 w-fit  h-fit  bg-blueColor  rounded-full font-semibold border-transparent border-2 text-white'>
              Cancel Plan
            </button>
          </div>
          <div className='flex-row  flex md:gap-2 gap-5 mt-4'>
            <button className='bg-white border-epsilon border w-fit outline-none py-1 mt-5 px-5 rounded-md text-epsilon' onClick={closeModal}>Close</button>
          </div>
        </Modal>
      </div></>
  )
}
