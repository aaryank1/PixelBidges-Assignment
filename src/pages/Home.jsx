import React, {useState, useEffect, useRef} from 'react'
import Background from '../components/Background'
import Alabay from '../components/Alabay'

const Home = () => {
    const [scrollPosition, setScrollPosition] = useState(0)
    const contentRef = useRef(null)

    const handleScroll = () => {
        setScrollPosition(window.scrollY)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const initialReveal = 7;
    const finalReveal = 90;
    const revealRange = finalReveal - initialReveal;

    const revealProgress = Math.min(
        Math.max((scrollPosition / window.innerHeight * 0.85) * revealRange, 0), revealRange
    )/ revealRange

    return (
        <div className='relative flex flex-col items-center h-screen'>
            <Background />
            <Alabay ref={contentRef} initialReveal={initialReveal} finalReveal={finalReveal} revealRange={revealRange} revealProgress={revealProgress} />
        </div>
    )
}

export default Home