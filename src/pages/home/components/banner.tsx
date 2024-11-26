import React from 'react'

export const Banner = () => {




    return (
        <div className='container flex  bg-black w-full p-12 mb-12  h-[500px] text-white'>
            <div className="banner-text max-w-96 flex justify-between flex-col h-full">
                <p className='text-success text-xl'>categories</p>
                <h3 className='text-5xl font-medium leading-[4rem]'>Enhance Your Music Experience</h3>


                <div className='flex  items-center gap-4'>
                    {/* Days */}
                    <div className='w-20 h-20 flex flex-col justify-center  leading-3 bg-white text-black rounded-full  text-center '>
                        <span className='font-medium inline-block -mt-2 text-xl'>05</span>
                        <p>Days</p>
                    </div>

                    {/* Hours */}
                    <div className='w-20 h-20 flex flex-col justify-center  leading-3 bg-white text-black rounded-full  text-center '>
                        <span className='font-medium inline-block -mt-2 text-xl'>23</span>
                        <p>Hours</p>
                    </div>

                    {/* Minutes */}
                    <div className='w-20 h-20 flex flex-col justify-center  leading-3 bg-white text-black rounded-full  text-center '>
                        <span className='font-medium inline-block -mt-2 text-xl'>59</span>
                        <p>Minutes</p>
                    </div>

                    {/* Seconds */}
                    <div className='w-20 h-20 flex flex-col justify-center  leading-3 bg-white text-black rounded-full  text-center '>
                        <span className='font-medium inline-block -mt-2 text-xl'>35</span>
                        <p>Seconds</p>
                    </div>

                </div>

                <button className='bg-success text-white w-[170px] h-[56px] rounded'>
                    Buy Now!
                </button>
            </div>
            <div className="banner-image flex items-end justify-end  w-full h-full relative">
                <div className='w-[400px] h-[400px] blur-[80px] rounded-full bg-white/30 left-1/2 -translate-x-1/2 absolute'></div>
                <img className='z-99 top-8 right-6 h-[450px] relative  ' src="/images/banner-image.png" alt="Banner Image" />
            </div>
        </div>
    )
}
