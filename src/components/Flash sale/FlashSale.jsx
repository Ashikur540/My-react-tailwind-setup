import React from 'react';
import Slider from 'react-slick';
import salegraphic from '../../Assets/Photos/sale graphic.png';
import { VerticalFlahCard } from '../cards/VerticalFlahCard';

export const FlashSale = () => {
    const settings = {
        dots: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        cssEase: "linear",
        nextArrow: <LeftArrow />,
        prevArrow: <RightArrow />,
        responsive: [
            {
                breakpoint: 2224,
                settings: {
                    slidesToShow: 4,
                    // slidesToScroll: 3,
                    infinite: false,
                    dots: false
                }
            },
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3,
                    // slidesToScroll: 3,
                    infinite: false,
                    dots: false
                }
            },
            {
                breakpoint: 846,
                settings: {
                    slidesToShow: 2,
                    // slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <section className='px-4  py-14 md:py-24 lg:py-32 container relative'>
            <h2 className="text-3xl font-medium tracking-wide leading-relaxed p-1 border-2 inline-block">
                <span className="font-bold pr-1">Flash</span>
                Sale product
            </h2>
            <div className="flex justify-normal py-4 gap-4 items-center">
                <div className="w-full md:w-[80%] ">
                    <Slider {...settings}>
                        {/* <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-24 gap-4"> */}

                        {
                            [1, 2, 3, 4, 5, 6, 7, 8, 9].map(elem => <VerticalFlahCard key={elem} />)
                        }

                        {/* </div> */}
                    </Slider>
                </div>
                <div className=" bg-sale-banner-bg bg-cover bg-no-repeat object-cover max-h-[572px] p-4 grid">
                    <img src={salegraphic} alt="graphic " className="aspect-square mx-auto mt-14" />
                    <p className="text-md font-medium tracking-widest leading-loose text-center uppercase text-white">
                        Mega Deal
                    </p>

                    <div class="place-items-center inline-grid group font-medium tracking-tighter text-gold hover:text-yellow-600 transition ease-in-out duration-200 w-auto">Shop Now <span aria-hidden="false" class="inline-block translate-x-0 group-hover:translate-x-1 transition-transform ease-in-out duration-200">→</span></div>
                </div>
            </div>

        </section>


    )
}



export const LeftArrow = ({ onClick }) => {
    return (

        <button className="bg-dark h-7 w-7 rounded-full  justify-center items-center absolute -top-[10%] right-2 z-30 grid" onClick={onClick}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-white text-center place-items-center">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
            </svg>

        </button>

    )
}
export const RightArrow = ({ onClick }) => {
    return (
        <button className="bg-dark h-7 w-7 rounded-full flex justify-center items-center absolute -top-[10%] right-[5%] z-30" onClick={onClick}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-white text-center place-items-center">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75 " />
            </svg>


        </button>
    )
}