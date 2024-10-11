import React from 'react'
import { assets } from '../assets/assets'

const Section5 = () => {
  return (
    <div className='relative z-10 top-[-100%]'>
        <div className="relative overflow-hidden">

        {/* Background rotated by 8 degrees*/}
            <div
            className='rounded-lg overflow-hidden'
                style={{
                position: 'absolute',
                top: '12%',
                left: '-5%',
                right: '-13%',
                bottom: '-4%',
                background: 'radial-gradient(circle, rgba(254,255,83,1) 0%, rgba(253,195,45,1) 49%)',
                transform: 'rotate(-8deg)',
                transformOrigin: 'center center',
                zIndex: -1,
                clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 65%)',
                }}
            />

            <div className="relative z-10">
                
                <div className='flex justify-evenly items-start relative top-28'>
                    <div className='flex flex-col items-center gap-16'>
                        <h1 className='text-white text-5xl'
                        style={{fontFamily: 'cheeseburgaregular'}}
                        >Tokemomics</h1>

                        <div className='flex flex-col gap-2'>

                            <div
                            style={{fontFamily: 'Montserrat', backgroundColor: '#353535'}}
                            className='flex flex-col text-white rounded-lg font-extrabold pl-2 pb-1 pt-1 pr-6'>
                                <span className='text-xs'>LIQUIDITY</span>
                                <h1 className='text-yellow-200 text-xs'>LOCKED</h1>
                            </div>
                            <div
                            style={{fontFamily: 'Montserrat', backgroundColor: '#353535'}}
                            className='flex flex-col text-white rounded-lg font-extrabold pl-2 pb-1 pt-1 pr-6'>
                                <span className='text-xs'>CONTRACT</span>
                                <h1 className='text-yellow-200 text-xs'>RENOUNCED</h1>
                            </div>
                            <div
                            style={{fontFamily: 'Montserrat', backgroundColor: '#353535'}}
                            className='flex flex-col text-white rounded-lg font-extrabold pl-2 pb-1 pt-1 pr-6'>
                                <span className='text-xs'>TAXES</span>
                                <h1 className='text-yellow-200 text-xs'>0%</h1>
                            </div>

                        </div>
                    </div>
                    <div className='relative translate-y-2 w-2/5'>
                        <img className='relative z-20' src={assets.dog8} alt="dog8" />
                        <div className='relative translate-y-[-22%] h-1/6 overflow-hidden'>
                            <img
                            src={assets.dog8}
                            alt="Reflection"
                            className='relative scale-y-[-1] opacity-60 z-[-20]'
                            style={
                                {
                                    maskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 70%, rgba(0, 0, 0, 1) 100%)',
                                    WebkitMaskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 70%, rgba(0, 0, 0, 1) 100%)',
                                    filter: 'grayscale(100%)',
                                }
                            }
                            />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Section5