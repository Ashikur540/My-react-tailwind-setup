import React from 'react'
import { HorizontalCard } from '../cards/HorizontalCard'

export const TrendingProduct = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        cssEase: "linear",
        nextArrow: <LeftArrow />,
        prevArrow: <RightArrow />,

    };
    return (
        <section className='px-4  py-14 md:py-24 lg:py-32 container relative'>
            <h2 className="text-3xl font-medium tracking-wide leading-relaxed p-1 border-2 inline-block">
                <span className="font-bold pr-1">Trebding</span>
                Product
            </h2>
            <div className="grid grid-cols-3 gap-4">
                <HorizontalCard />
                <HorizontalCard />
                <HorizontalCard />
            </div>

        </section>
    )
}


export const LeftArrow = ({ onClick }) => {
    return (

        <button className="bg-dark h-7 w-7 rounded-full flex justify-center items-center absolute top-1/2 left-2 group-hover:flex hidden" onClick={onClick}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-white text-center place-items-center ">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75 " />
            </svg>


        </button>

    )
}
export const RightArrow = ({ onClick }) => {
    return (
        <button className="bg-dark h-7 w-7 rounded-full  justify-center items-center absolute top-1/2 right-2 group-hover:flex hidden z-10" onClick={onClick}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-white text-center place-items-center">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
            </svg>

        </button>
    )
}