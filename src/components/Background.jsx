import React from 'react'
import { assets } from '../assets/assets'

const Background = () => {
  return (
    <div
    style={{backgroundImage: `url(${assets.dog0})`, fontFamily: 'cheeseburgaregular'}}
    className='fixed flex flex-col justify-between items-center text-center bg-cover bg-center w-screen h-screen z-0'
    >
        <h1
        style={{
          WebkitTextStroke: '1px black',
          background: 'linear-gradient(0deg, rgba(105,251,63,1) 0%, rgba(236,252,70,1) 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          filter: 'drop-shadow(3px 3px 0px rgba(0, 0, 0, 1))'
        }}
        className='text-4xl top-5 mt-1'>
            Welcome to Alabay World
        </h1>
        
        <p className='text-xs px-10 py-3 bg-slate-950 text-white text-center mb-16'>
            Where the <span className='text-yellow-400'>legendary Central Asian Shepherd Dog</span> meets a new-age adventure. <span className='text-yellow-400'>Join us</span> in celebrating the <span className='text-yellow-400'>strength, loyalty,</span> and <span className='text-yellow-400'>heritage</span> of the Alabay breed.
        </p>
    </div>
  )
}

export default Background