import React from 'react'
import { assets } from '../assets/assets'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick/lib/slider'
import { NavLink } from 'react-router-dom';

const Section7 = () => {

    const handleGuardDiscover = () => {

    }
    const handleHeritageDiscover = () => {}

    function RightArrow(props) {
        const { className, style, onClick } = props;
        return(
            <img
            className={className}
            style={{
                ...style,
                backgroundColor: '#353535',
                width: '3rem',
                height: '4.5rem',
                padding: '1.2rem 0.6rem',
                borderRadius: '0.6rem',
                zIndex: 1
            }}
            onClick={onClick}
            src={assets.right}
            alt="right-arrow"
            />
        )
    }

    function LeftArrow(props) {
        const { className, style, onClick } = props;
        return(
            <img
                className={className}
                style={{
                    ...style,
                    backgroundColor: '#353535',
                    width: '3rem',
                    height: '4.5rem',
                    padding: '1.2rem 0.6rem',
                    borderRadius: '0.6rem',
                    zIndex: 1
                }}
                onClick={onClick}
                src={assets.left}
                alt="left-arrow"
            />
        )
    }

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: <RightArrow />,
        prevArrow: <LeftArrow />
    };

    return (
        <div className='relative z-10 py-24 overflow-hidden' style={{marginTop: '-100%', top: '60%'}}>
            <div
                className='absolute inset-0 z-0'
                style={{
                    top: '18%',
                    right: '-20%',
                    left: '-10%',
                    bottom: '-5%',
                    background: 'radial-gradient(circle, rgba(254,255,83,1) 0%, rgba(253,195,45,1) 49%)',
                    transform: 'rotate(-8deg)',
                    transformOrigin: 'center center',
                    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 55%)',
                }}
            />
            <div className='flex flex-col items-center relative z-10 mt-[30%] top-[40%]'>
                <div className='text-8xl text-white mb-2' style={{fontFamily: 'cheeseburgaregular'}}>Games</div>
                <span className='mb-8' style={{fontFamily: 'Montserrat', fontSize: '32px', fontWeight: '900', color: '#353535'}}>Stay tuned for upcoming games !</span>

                <div className='w-full px-24'>
                    <Slider {...settings}>
                        <div className='flex justify-center items-center mb-14 p-32'>
                            <img src={assets.guard} alt="guard" className='relative rounded-2xl object-contain' />
                            <NavLink to={'/guardian'}>
                                <div className='flex justify-center items-center relative mt-[-15%]'>
                                    <div className='flex justify-center items-center gap-2 bg-purple-600 rounded-r-full rounded-l-full w-1/4 cursor-pointer' style={{boxShadow: 'rgba(0, 0, 0, 0.85) 2.4px 2.4px 3.2px'}}>
                                        <button className='relative text-white font-extrabold z-30' style={{fontSize: '2rem', paddingTop: '1px', paddingBottom: '1px'}}>DISCOVER</button>
                                        <img src={assets.right} alt="right-arrow" className='w-6 h-6'/>
                                    </div>
                                </div>
                            </NavLink>
                        </div>

                        <div className='flex justify-center items-center mb-14 p-32'>
                            <img src={assets.heritage} alt="guard" className='relative rounded-2xl object-contain' />
                            <NavLink to={'/heritage'}>
                                <div className='flex justify-center items-center relative mt-[-15%]'>
                                    <div className='flex justify-center items-center gap-2 bg-green-400 rounded-r-full rounded-l-full w-1/4 cursor-pointer' style={{boxShadow: 'rgba(0, 0, 0, 0.85) 2.4px 2.4px 3.2px'}}>
                                        <button className='relative text-white font-extrabold z-30' style={{fontSize: '2rem', paddingTop: '1px', paddingBottom: '1px'}}>DISCOVER</button>
                                        <img src={assets.right} alt="right-arrow" className='w-6 h-6'/>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Section7