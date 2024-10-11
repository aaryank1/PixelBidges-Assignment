import React from 'react'
import { assets } from '../assets/assets'

const Section4 = () => {
    const items = [
        {title: "Community Building", subtitle: "and Initial Launch", image: assets.dog4, style:  {background: 'linear-gradient(0deg, rgba(255,246,187,0) 0%, rgba(219,199,12,1) 100%)'}},
        {title: "Merchandise", subtitle: "and Initial Launch", image: assets.dog5, style: {background: 'linear-gradient(0deg, rgba(225,255,255,0) 0%, rgba(0,212,212,1) 100%)'}},
        {title: "Community Events", subtitle: "and contests", image: assets.dog6, style: {background: 'linear-gradient(0deg, rgba(250,227,255,0) 0%, rgba(212,39,255,1) 100%)'}},
        {title: "Expansion and New", subtitle: "Features", image: assets.dog7, style: {background: 'linear-gradient(0deg, rgba(143,58,60,0) 0%, rgba(143,58,60,1) 100%)'}}
    ]
    return (

        <div className='relative flex text-xs font-extrabold gap-1 p-16 text-center text-white top-[-65%]' style={{fontFamily: 'Montserrat'}}>
            {items.map((item, index) => {
                return(
                <div
                key={index}
                className={`flex flex-col items-center py-2 px-1 leading-tight ${index===0 ? 'rounded-tl-3xl' : 'rounded-none'} ${index===items.length-1 ? 'rounded-tr-3xl' : 'rounded-none'}`}
                style={item.style}>
                    <h1>{item.title}</h1>
                    <span style={{fontSize: '8px'}}>{item.subtitle}</span>
                    <img className='w-full p-2' src={item.image} alt="" />
                </div>)
            })}
        </div>

    )
}

export default Section4