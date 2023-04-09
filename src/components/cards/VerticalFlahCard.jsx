import React from 'react';
import Slider from 'react-slick';
import sofa from '../../Assets/Photos/sofa.png';
export const VerticalFlahCard = ({ onClick }) => {
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
        <div className="bg-white max-w-[280px]  border-gray-border group relative border">
            <span className="absolute bg-primary-toned text-center text-red px-2 py-1 rounded-sm left-2 top-2 text-[10px]">
                New
            </span>
            <figure className='p-2 my-4  relative pic'>
                {/* navigations */}

                {/* navigations */}
                <Slider {...settings}>
                    {
                        [1, 2, 3, 4, 5].map((item, i) => <img src={sofa} alt="sofa" className="mx-auto" key={item} />)
                    }

                </Slider>
            </figure>
            <div className="p-5 ">
                <header className="flex flex-col justify-start items-start gap-4 mb-4">
                    <p className="text-sm text-gray capitalize py-1">Smart TV</p>
                    <h4 className="text-base text-dark capitalize py-1 font-medium">
                        Sanung 85Q70A 85 Inch QLED 4K UHD Smart LED Television
                    </h4>
                </header>

                <div className="my-3">
                    <div className="inline-flex items-center group-hover:hidden ">
                        {
                            [1, 2, 3, 4, 5].map((item, i) =>
                                <svg key={item ? item : i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 text-gold">
                                    <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                                </svg>

                            )
                        }
                        <p className="text-gray text-sm font-normal tracking-normal pl-1">(5.0)</p>
                    </div>
                    <div className="inline-flex items-center gap-2 group-hover:hidden">
                        <p className="text-primary font-medium tracking-normal">$ 2036.00</p>
                        <p className="text-gray text-sm font-normal tracking-normal">$ 3036.00</p>
                    </div>
                    {/* hover */}
                    <div className="w-full hidden border-y border-gray-border  p-3 group-hover:block">
                        <div className=" grid grid-cols-3 justify-between space-x-3 ">
                            {
                                [1, 2, 3].map((item, i) => (
                                    <div className=" bg-white border-l border-gray-border" key={i}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mx-auto">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    {/*  */}
                </div>
            </div>
            {/* button */}
            <div className="flex justify-end p-5 pt-0">
                <button className="group inline-flex items-center justify-center w-full h-10 gap-2 px-5 text-sm font-medium tracking-wide transition duration-300 rounded bg-primary-toned text-primary hover:bg-primary hover:text-white">
                    <span>Order now!</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 text-primary group-hover:text-white duration-300">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg>


                </button>
            </div>

        </div >
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