import React from 'react'
import salegraphic from '../../Assets/Photos/sale graphic.png'
import { VerticalFlahCard } from '../cards/VerticalFlahCard'

export const FlashSale = () => {
    return (
        <section className='px-4  py-14 md:py-24 lg:py-32 container'>
            <h2 className="text-3xl font-medium tracking-wide leading-relaxed p-1 border-2 inline-block">
                <span className="font-bold pr-1">Flash</span>
                Sale product
            </h2>
            <div className="flex justify-normal py-24 gap-4 items-center">
                <div className="w-full md:w-[80%] ">
                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-24 ">
                        <VerticalFlahCard />
                        <VerticalFlahCard />
                        <VerticalFlahCard />
                        <VerticalFlahCard />

                    </div>
                </div>
                <div className=" bg-sale-banner-bg bg-cover bg-no-repeat object-cover max-h-[572px] p-4 grid">
                    <img src={salegraphic} alt="graphic " className="aspect-square mx-auto mt-14" />
                    <p className="text-md font-medium tracking-widest leading-loose text-center uppercase text-white">
                        Mega Deal
                    </p>

                    <div class="place-items-center inline-grid group font-medium tracking-tighter text-gold hover:text-yellow-600 transition ease-in-out duration-200 w-auto">Shop Now <span aria-hidden="true" class="inline-block translate-x-0 group-hover:translate-x-1 transition-transform ease-in-out duration-200">→</span></div>
                </div>
            </div>

        </section>


    )
}
