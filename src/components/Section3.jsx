import React from 'react'
import { assets } from '../assets/assets'

const Section3 = () => {
  return (
    <div className='relative flex flex-col justify-center items-center z-0'>
        
        {/* Title */}
        <div className='text-4xl'
        style={
            {
            fontFamily: 'cheeseburgaregular',
            color: '#FFA800'
            }
        }>
            <p>Project Vision</p>
        </div>


        {/* Body */}
        <div className="relative overflow-hidden">

            {/* Background rotated by 8 degrees*/}
            <div
            className='rounded-lg overflow-hidden'
                style={{
                position: 'absolute',
                top: '7%',
                left: '-8%',
                right: '-13%',
                bottom: '40%',
                background: 'radial-gradient(circle, rgba(254,255,83,1) 0%, rgba(253,195,45,1) 49%)',
                transform: 'rotate(-8deg)',
                transformOrigin: 'center center',
                zIndex: -1,
                clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 72%)',
                }}
            />

            <div className="relative z-10">
                <div>

                    <div className='relative overflow-hidden'>
                        <img src={assets.dog2} alt="dog2" className='w-auto h-auto relative z-20' />
                        <div className='relative translate-y-[-13%] h-1/6 overflow-hidden'>
                            <img
                            src={assets.dog2}
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

                    <div className='relative text-center px-4 mt-[-50%]'>
                        <p style={{
                            color: '#353535',
                            fontFamily: 'Kumbh Sans'
                        }}
                        className='text-xs font-bold'>
                            Our mission is to honor the heritage of the Alabay by creating a vibrant, loyal, and powerful community. Just as the Alabay protects its flock, we aim to build a pack that stands strong together.
                        </p>
                    </div>

                </div>

                <div className='text-4xl text-white ml-4 my-8'
                style={{ fontFamily: 'cheeseburgaregular'}}>
                    <p>Road Map</p>
                </div>

                <div className='relative mt-[-15%] flex justify-center'>
                    
                    <div style={{color: '#353535', fontFamily: 'Kumbh Sans'}} className='flex flex-col p-4 mt-24 text-xs font-bold'>
                        <p>
                        Our journey is just beginning. Explore our roadmap to see the exciting milestones and future plans we have in store.
                        </p>
                        <span className='text-yellow-400 mt-2'>Join us as we grow and achieve new heights.</span>
                    </div>
                    
                    <div className='relative overflow-hidden'>
                        <img src={assets.dog3} alt="dog3" className='w-5/6 relative z-20' />
                        <div className='relative translate-y-[-30%] h-1/6 overflow-hidden'>
                            <img
                            src={assets.dog3}
                            alt="Reflection"
                            className='w-5/6 scale-y-[-1] opacity-40'
                            style={
                                {
                                    maskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 75%, rgba(0, 0, 0, 1) 100%)',
                                    WebkitMaskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 75%, rgba(0, 0, 0, 1) 100%)',
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

export default Section3