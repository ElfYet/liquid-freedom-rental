import React from 'react'
import GoogleMap from '@components/GoogleMap';

const CourseLaunchBlocks = () => {
  return (
    <div className='container mx-auto py-8 px-8'>
        <div className='flex flex-col sm:flex-row justify-between space-y-4 sm:space-y-0 sm:space-x-6'>

            <div className='w-full py-2' height="400">
                <h2 className='text-2xl font-bold underline underline-offset-8 text-white sm:text-3xl text-center pb-4'>Boating Certificate Courses</h2>
                <div className='flex-1 flex flex-col order-1 border-2 border-white bg-black/30 items-center pb-4'>
                    <div>
                        <h2 className='text-xl font-bold text-white sm:text-2xl text-center pt-4 pb-2'>Temporary - Cheap - Quick</h2>
                        <button className='w-80 flex-1 flex flex-row order-1 white_btn'>
                            <a href='https://en.wikipedia.org/wiki/Next.js' target="_blank" rel="noopener noreferrrer">Something</a>
                        </button>
                    </div>

                    <div>
                        <h2 className='text-xl font-bold text-white sm:text-2xl text-center pt-4 pb-2'>Permanaent - Free - Slow</h2>
                        <button className='w-80 flex-1 flex flex-row order-1 white_btn'>
                            <a href='https://en.wikipedia.org/wiki/Next.js' target="_blank" rel="noopener noreferrrer">Something</a>
                        </button>
                    </div>

                    <div>
                        <h2 className='text-xl font-bold text-white sm:text-2xl text-center pt-4 pb-2'>Permanent - Paid - Quick</h2>
                        <button className='w-80 flex-1 flex flex-row order-1 white_btn'>
                            <a href='https://en.wikipedia.org/wiki/Next.js' target="_blank" rel="noopener noreferrrer">Something</a>
                        </button>
                    </div>

                </div>
            </div>

            <div className='w-full h-full py-2'>
                <h2 className='text-2xl font-bold underline underline-offset-8 text-white sm:text-3xl text-center pb-4'>Launching Location</h2>
                <div className='flex-1 flex flex-col order-2 border-2 border-white items-center'>
                    {/* Inserted is a free embedded Google Map (limited to one marker), 
                    for further development consider adding a Google Maps JavaScript API
                     (fee applied when exceeding 28,500* map loads per month) */}
                     <GoogleMap />
                </div>
            </div>

        </div>
    </div>
  )
}

export default CourseLaunchBlocks