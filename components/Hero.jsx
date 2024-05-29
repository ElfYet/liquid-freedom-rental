import React from 'react';

const Hero = ({heading, message}) => {
  return (
    <div className='flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img'>

      {/* Overlay */}
      <div className='absolute top-0 left-0 right-0 h-screen bg-black/40 z-[2]' />
      <div className='p-5 z-[2] mt-[-6rem]'>
        <h2 className='text-5xl font-black text-center text-black'>{heading}</h2>
        <p className='py-5 text-2xl text-center text-white'>{message}</p>
      </div>
    </div>
  );
};

export default Hero;

