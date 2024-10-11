import React from 'react'
import { assets } from '../assets/assets'

const Section9 = () => {
  return (
    <div className='relative z-10 mt-48 top-24 flex flex-col gap-4 items-start p-8'>
        <h1 style={{fontFamily: 'cheeseburgaregular', color: '#FFA800', fontSize: '4rem'}} >SOCIAL MEDIA LINKS</h1>

        <div className='flex justify-around items-start mt-4'>
            <div style={{background: 'linear-gradient(0deg, rgba(65,125,241,1) 100%, rgba(128,179,255,1) 100%)', border: '0.5rem solid #0553C8'}} className='flex px-4 py-6 rounded-2xl mt-44'>
                <div className='flex flex-col gap-4'>
                    <div className='flex justify-start items-center gap-1'>
                        <div className='flex justify-center items-center bg-black rounded-full p-3'>
                            <img className='w-6' src={assets.twitter} alt="twitter" />
                        </div>
                        <h1 style={{fontFamily: 'Montserrat', fontWeight: '700', fontSize: '2rem', color: 'white'}}>Twitter Link</h1>
                    </div>
                    <div className='flex justify-center items-center gap-1'>
                    <div className='flex justify-center items-center bg-black rounded-full p-3'>
                            <img className='w-6' src={assets.mask} alt="telegram" />
                        </div>
                        <h1 style={{fontFamily: 'Montserrat', fontWeight: '700', fontSize: '2rem', color: 'white'}}>Telegram Link</h1>
                    </div>
                </div>
            </div>

            <div className='relative w-2/5'>
            <img src={assets.dog9} alt="dog9" className='w-auto h-auto relative z-20' />
                <div className='relative translate-y-[-13%] h-1/6 overflow-hidden'>
                    <img
                    src={assets.dog9}
                    alt="Reflection"
                    className='w-full scale-y-[-1] opacity-40'
                    style={
                        {
                            maskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 65%, rgba(0, 0, 0, 1) 100%)',
                            WebkitMaskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 65%, rgba(0, 0, 0, 1) 100%)',
                            filter: 'blur(0.9px)',
                        }
                    }
                    />
                </div>
            </div>

        </div>

    </div>
  )
}

export default Section9