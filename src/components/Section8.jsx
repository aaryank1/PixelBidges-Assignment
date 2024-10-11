import React from 'react'
import { assets } from '../assets/assets'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick/lib/slider'

const Section8 = () => {

    function RightArrow(props) {
        const { className, style, onClick } = props;
        return(
            <img
            className={className}
            style={{
                ...style,
                backgroundColor: '#353535',
                width: '1rem',
                height: '1.5rem',
                padding: '0.4rem 0.2rem',
                borderRadius: '0.2rem',
                zIndex: 1
            }}
            onClick={onClick}
            src={assets.right}
            alt="right-arrow"
            />
        )
    }

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true,
        nextArrow: <RightArrow />
    };


    return (
        <div className='relative z-20 flex flex-col justify-center items-start top-48 ml-4'>
            <div style={{fontFamily: 'Montserrat'} } className='flex gap-2 mb-4'>
                <h1 style={{color: '#FFA800', fontWeight: '900', fontSize: '12px'}} className=''>GAME</h1>
                <h1 style={{color: '#353535', fontWeight: '900', fontSize: '12px'}} className=''>PREVIEWS</h1>
            </div>

            <div className='w-full pr-24 pb-24'>
                <Slider {...settings}>
                    <div className='p-2'>
                        <img className='w-full h-full object-cover' src={assets.artifacts} alt="artifacts" />
                    </div>
                    <div className='p-2'>
                        <img className='w-full h-full object-cover' src={assets.abilities} alt="abilities" />
                    </div>
                    <div className='p-2'>
                        <img className='w-full h-full object-cover' src={assets.alabay_guard} alt="alabay_guard" />
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default Section8