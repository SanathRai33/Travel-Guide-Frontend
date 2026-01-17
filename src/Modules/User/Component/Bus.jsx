import React from 'react'
import { FaArrowRightArrowLeft } from "react-icons/fa6";


const Bus = () => {
  return (
    <div className="flex flex-col overflow-hidden mx-10 rounded-lg shadow-md h-80">
          <div className="flex">
            <div className="bg-white w-80 h-80 flex justify-center items-center p-3 relative">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/ac/DMRC_Electric_Feeder_Bus_-_Front_view_-_Wide.jpg"
                className="w-full h-full rounded-full bg-black static z-10 shadow-lg border-5 border-white object-cover"
                alt="sugama"
              />
              <div className='absolute w-full h-full -z-5 flex flex-col'>
                <div className='bg-blue-300 flex-1 border-white'>
                    
                </div>
                <div className='bg-blue-500 h-[150px] border-t-4 border-white'>
                    
                </div>
              </div>
            </div>
            <div className="flex flex-col flex-1 border-l-2 border-dashed bg-gray-400">
              <div className="flex flex-1 max-h-[170px]">
                <div className="flex flex-col bg-blue-300 flex-1" >
                  <h1 className="font-semibold text-white m-0 text-center col-span-2 text-5xl">
                    Bus Ticket
                  </h1>

                  <div className="flex justify-between h-full col-span-2 px-5 py-4">
                    <div className="grid grid-rows-2 justify-between h-full ">
                      <p className="m-0">
                        <h6 className="font-bold text-white m-0">Name:</h6>
                        <span>Sanath Rai</span>
                      </p>
                      <p className="m-0">
                        <h6 className="font-bold text-white m-0">Date:</h6>
                        <span>26 Jan 2026</span>
                      </p>
                    </div>

                    <div className="flex flex-col justify-between h-full text-blue-600">
                      <p className="flex gap-1 m-0">
                        <span className="font-semibold text-white w-[60px]">Bus No</span>
                        <span>: KA 21 Fe 9073</span>
                      </p>
                      <p className="flex gap-1 m-0">
                        <span className="font-semibold text-white w-[60px]">Seat No</span>
                        <span>: 26</span>
                      </p>
                      <p className="flex gap-1 m-0">
                        <span className="font-semibold text-white w-[60px]">Class</span>
                        <span>: AC</span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white h-full col-span-2 flex flex-col justify-between items-center text-blue-500 w-[150px]">
                  <div className="flex-1 flex justify-center items-center flex-col border-b border-black border-dashed w-full">
                    <h5 className="font-semibold m-0">Ticket <br/> Number</h5>
                    <p className="m-0 ">gkiwbkgwi8727</p>
                    {/* text-[10px] */}
                  </div>
                  <div className="flex-1 flex justify-center items-center flex-col w-full">
                    <h5 className="font-semibold m-0">Amount</h5>
                    <p className="m-0">$ 599</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-500 flex justify-between text-white py-4 h-[150px] px-5 box-border  border-t-4 border-white">
                <div className='h-fit bg-light-50'>
                  <h6 className='font-bold'>Route:</h6>
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex flex-col">
                      <span>Paris</span>
                      <span className='text-blue-300'>10:15 Am</span>
                    </div>
                    <div>
                      <FaArrowRightArrowLeft />
                    </div>
                    <div className="flex flex-col">
                      <span>London</span>
                      <span className='text-blue-300'>18:15 Am</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-3 ">
                  <h4 className='font-bold text-blue-300 text-xl h-fit'>
                    BOARDING <br /> PASS <br /> BARCODE
                  </h4>
                  <div>
                    <img
                      src="https://www.freeiconspng.com/uploads/barcode-background-png-6.png"
                      alt="Barcode"
                      className="max-h-[90px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default Bus
