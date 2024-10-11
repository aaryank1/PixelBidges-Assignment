import React, { useState, useRef, useCallback, useEffect } from 'react'
import { assets } from '../assets/assets'
import Card from './Card'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const Section6 = () => {
    const [sliderRef, setSliderRef] = useState(null);

    const cards = [
        {backgroundImage: assets.black_hoodie_bg, merch: assets.black_hoodie},
        {backgroundImage: assets.blue_cap_bg, merch: assets.blue_cap},
        {backgroundImage: assets.pink_tee_bg, merch: assets.pink_tshirt},
        {backgroundImage: assets.yellow_tee_bg, merch: assets.yellow_tshirt},
    ]

    function RightArrow(props) {
        const { className, style, onClick } = props;
        return(
            <img
            className={className}
            style={
                {...style,
                    backgroundColor: '#111',
                    width: '1.3rem',
                    height: '1.3rem',
                    paddingLeft: '0.4rem',
                    paddingRight: '0.4rem',
                    paddingTop: '0.4rem',
                    paddingBottom: '0.4rem',
                    borderRadius: '1rem',
                    filter: 'invert(1)',
                }
            }
            onClick={onClick}
            src={assets.right}
            alt="left-arrow"
            />
        )
    }

    function LeftArrow(props) {
        const { className, style, onClick } = props;
        return(
            <img
                className={className}
                style={
                    {...style,
                        backgroundColor: '#111',
                        width: '1.3rem',
                        height: '1.3rem',
                        paddingLeft: '0.4rem',
                        paddingRight: '0.4rem',
                        paddingTop: '0.4rem',
                        paddingBottom: '0.4rem',
                        borderRadius: '1rem',
                        filter: 'invert(1)',
                    }
                }
                onClick={onClick}
                src={assets.left}
                alt="right-arrow"
            />
        )
    }

    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: <RightArrow />,
        prevArrow: <LeftArrow />,
        fade: true,
        waitForAnimate: false
    };


      const goToNext = useCallback(() => {
        if (sliderRef) {
            sliderRef.slickNext();
        }
    }, [sliderRef]);

    useEffect(() => {
        const interval = setInterval(() => {
            goToNext();
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(interval);
    }, [goToNext]);

    return (
        <div className='flex flex-col gap-4 justify-center items-center relative top-[-100%]'>
            <div style={{
                fontFamily: 'cheeseburgaregular',
                color: '#FFA800'
            }}
            className='text-4xl relative top-5'>
                MERCHANDISE
            </div>

            <div className='w-9/12 max-w-3xl px-8 relative z-20 top-5'>
                <Slider ref={setSliderRef} {...settings} >

                    {cards.map((card, index) => {
                        return (
                            <Card key={index} backgroundImage={card.backgroundImage} merch={card.merch} />
                        )
                    })}

                </Slider>
            </div>
        </div>
    )
}

export default Section6