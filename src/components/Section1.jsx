import React from 'react'
import { assets } from '../assets/assets'

const Section1 = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background rotated by 8 degrees*/}
      <div
      className='rounded-lg overflow-hidden'
        style={{
          position: 'absolute',
          top: '-12%',
          left: '-5%',
          right: '-6%',
          bottom: '35%',
          background: 'radial-gradient(circle, rgba(254,255,83,1) 0%, rgba(253,195,45,1) 65%)',
          transform: 'rotate(8deg)',
          transformOrigin: 'center center',
          zIndex: -1,
        }}
      />

      <div className="relative z-10">
        <div className='flex justify-center'>
          <div style={{backgroundColor: 'rgb(255, 255, 255, 0.5)'}} className='mt-4 w-1/12 h-3 rounded-r-full rounded-l-full'></div>
        </div>
        
        <div className='flex justify-center mt-4'>
          <div className='relative overflow-hidden'>
            <img src={assets.dog1} alt="dog1" className='w-auto h-auto translate-y-[7%]'/>
            <div className='relative translate-y-[-52%] h-1/5 overflow-hidden'>
              <img
                src={assets.dog1}
                alt="Reflection"
                className="w-full scale-y-[-1] opacity-90"
                style={{
                  maskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 63%, rgba(0, 0, 0, 1) 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 63%, rgba(0, 0, 0, 1) 100%)',
                  filter: 'blur(0.9px)',
                }}
              />
            </div>
          </div>
          <div className='flex flex-col justify-start gap-8 items-end pr-8 pl-16 w-3/4'>
            <p style={{fontFamily: 'Montserrat', fontWeight: '900'}} className='text-orange-500 text-5xl'>History Of</p>
            <p style={{fontFamily: 'cheeseburgaregular'}} className='text-9xl text-white'>Alabay</p>
            <p style={{fontFamily: 'Kumbh Sans'}} className='font-bold text-2xl text-right'>The Central Asian Shepherd Dog, also known as Alabay, has been a guardian of livestock and property for centuries. Originating from Central Asia, these dogs are renowned for their courage, strength, and loyalty.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section1