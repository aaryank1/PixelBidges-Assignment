import React from 'react'
import { assets } from '../assets/assets'
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'
import Section4 from './Section4'
import Section5 from './Section5'
import Section6 from './Section6'
import Section7 from './Section7'
import Section8 from './Section8'
import Section9 from './Section9'

const Alabay = React.forwardRef((props, contentRef) => {
  return (
    <div ref={contentRef} className='relative flex z-10 w-11/12 h-screen transition-all duration-300 ease-out rounded-t-md bg-white overflow-hidden'
    style={{
        height: `${props.finalReveal}vh`,
        top: `${100 - props.initialReveal - props.revealProgress*props.revealRange}vh`
    }}
    >
        <div className='h-full overflow-y-auto'>
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
            <Section6 />
            <Section7 />
            <Section8 />
            <Section9 />
        </div>
    </div>
  )
})

export default Alabay