import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const Section2 = () => {
    const [activeCategory, setActiveCategory] = useState('all')
    let [gallery, setGallery] = useState(assets.all)

    const handleCategoryClick = (category) => {
        setActiveCategory(category)
    }

    useEffect(()=>{
        if(activeCategory==='all'){
            setGallery(assets.all)
        }
        else if(activeCategory==='photos'){
            setGallery(assets.photos)
        }
        else{
            setGallery(assets.videos)
        }
    }, [activeCategory])

    function RightArrow(props) {
        const { className, style, onClick } = props;
        return(
            <img
            className={className}
            style={
                {...style,
                    backgroundColor: '#353535',
                    width: '2rem',
                    height: '3rem',
                    paddingLeft: '0.4rem',
                    paddingRight: '0.4rem',
                    paddingTop: '0.8rem',
                    paddingBottom: '0.8rem',
                    borderRadius: '0.6rem'
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
                        backgroundColor: '#353535',
                        width: '2rem',
                        height: '3rem',
                        paddingLeft: '0.4rem',
                        paddingRight: '0.4rem',
                        paddingTop: '0.8rem',
                        paddingBottom: '0.8rem',
                        borderRadius: '0.6rem'
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
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true,
        nextArrow: <RightArrow />,
        prevArrow: <LeftArrow />
      };

    return (
        <div className='relative flex flex-col items-center -top-1/4 z-10'>
            {/* Navbar */}
            <div style={{fontFamily: 'Montserrat'}} className='flex gap-4 font-extrabold text-xl mb-4'>

                <small
                onClick={() => handleCategoryClick('all')}
                style={{
                    cursor: 'pointer',
                    color: activeCategory==='all'? '#FFA800' : 'black'
                }}
                >
                    ALL
                </small>
                
                <small
                onClick={() => handleCategoryClick('photos')}
                style={{
                    cursor: 'pointer',
                    color: activeCategory==='photos'? '#FFA800' : 'black'
                }}
                >
                    PHOTOS
                </small>
                
                <small
                onClick={() => handleCategoryClick('videos')}
                style={{
                    cursor: 'pointer',
                    color: activeCategory==='videos'? '#FFA800' : 'black'
                }}
                >
                    VIDEOS
                </small>

            </div>

            {/* Image Slider */}
            <div className='w-5/6 px-8'>
                <Slider {...settings}>
                    {
                    gallery.map((photo, index) => {
                        return (
                            <div key={index} className='px-4 flex items-center'>
                                <div className='bg-gray-400 aspect-[5/3] rounded-2xl overflow-hidden w-full' key={index}>
                                    <img className='w-full h-full object-cover'
                                    src={photo}
                                    alt={`Dog ${index + 3}`} />
                                </div>
                            </div>
                        )
                    })
                    }
                </Slider>
            </div>
        </div>
    )
}

export default Section2