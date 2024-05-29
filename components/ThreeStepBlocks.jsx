import React from 'react';
import Image from 'next/image';

const ThreeStepBlocks = () => {
  return (
    <div className='container mx-auto py-8 px-12'>
        <div className='flex flex-col sm:flex-row justify-between space-y-4 sm:space-y-0 sm:space-x-4'>

            <div className='w-full h-full py-2'>
                <h2 className='text-3xl font-bold text-black sm:text-4xl text-center pb-4'>Step 1</h2>
                <div className='flex-1 flex flex-col order-1 items-center shadow-md shadow-cyan-900 bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 rounded-md p-1 mx-8 sm:mx-0'>
                    <div className='w-full h-full bg-white border-2 border-black rounded-sm p-4'>

                        <div className='p-4 text-black text-center'>
                            <div className='flex justify-center'>
                                <Image
                                src='/assets/images/placeholderJetSki.jpg'
                                alt='logo'
                                width={200}
                                height={200}
                                className='object-center rounded-full'
                                />
                            </div>
                            <h3 className='text-2xl font-semi-bold text-black sm:text-3xl pt-6'>Block 1</h3>
                            <p className='desc mt-2 pt-4'>Block 1 - desc</p>
                        </div>
                    </div>
                </div>
            </div>    
            

            <div className='w-full h-full py-2'>
                <h2 className='text-3xl font-bold text-black sm:text-4xl text-center pb-4'>Step 2</h2>
                <div className='flex-1 flex flex-col order-2 items-center shadow-md shadow-cyan-900 bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 rounded-md p-1 mx-8 sm:mx-0'>
                    <div className='w-full h-full bg-white border-2 border-black rounded-sm p-4'>
                        <div className='p-4 text-black text-center'>
                            <div className='flex justify-center'>
                                <Image
                                src='/assets/images/placeholderJetSki.jpg'
                                alt='logo'
                                width={200}
                                height={200}
                                className='object-center rounded-full'
                                />
                            </div>
                            <h3 className='text-2xl font-semi-bold text-black sm:text-3xl pt-6'>Block 2</h3>
                            <p className='desc mt-2 pt-4'>Block 2 - desc</p>
                        </div>
                    </div>
                </div>
            </div>    

            <div className='w-full h-full py-2'>
            <h2 className='text-3xl font-bold text-black sm:text-4xl text-center pb-4'>Step 3</h2>
                <div className='flex-1 flex flex-col order-3 items-center shadow-md shadow-cyan-900 bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 rounded-md p-1 mx-8 sm:mx-0'>
                    <div className='w-full h-full bg-white border-2 border-black rounded-sm p-4'>
                        <div className='p-4 text-black text-center'>
                            <div className='flex justify-center'>
                                <Image
                                src='/assets/images/placeholderJetSki.jpg'
                                alt='logo'
                                width={200}
                                height={200}
                                className='object-center rounded-full'
                                />
                            </div>
                            <h3 className='text-2xl font-semi-bold text-black sm:text-3xl pt-6'>Block 3</h3>
                            <p className='desc mt-2 pt-4'>Block 3 - desc</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
  );
};

export default ThreeStepBlocks;
