import React from 'react';
import sofa from '../../Assets/Photos/sofa.png';
export const HorizontalCard = () => {
    return (
        <div className="flex flex-col gap-y-2">
            {
                [1, 2, 3].map(elem => (
                    <div className="bg-white  border-gray-border group relative border flex max-w-[480px]" key={elem}>
                        <span className="absolute bg-primary-toned text-center text-red px-2 py-1 rounded-sm left-2 top-2 text-[10px]">
                            New
                        </span>
                        <figure className='p-2 my-4  relative pic w-[30%]'>
                            <img src={sofa} alt="sofa" className="mx-auto my-[50%] w-[100%]" />
                        </figure>
                        <div className="p-2 flex flex-col">
                            <header className="flex flex-col justify-start items-start gap-2">
                                <p className="text-sm text-gray capitalize py-1">Smart TV</p>
                                <h4 className="text-base text-dark capitalize py-1 font-medium">
                                    Sanung 85Q70A 85 Inch QLED 4K UHD Smart LED Television
                                </h4>
                            </header>

                            <div className="my-3 flex flex-col gap-2">
                                <div className="inline-flex items-center  ">
                                    {
                                        [1, 2, 3, 4, 5].map((item, i) =>
                                            <svg key={item ? item : i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 text-gold">
                                                <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                                            </svg>

                                        )
                                    }
                                    <p className="text-gray text-sm font-normal tracking-normal pl-1">(5.0)</p>

                                </div>
                                <div className="inline-flex items-center gap-2 ">
                                    <p className="text-primary font-medium tracking-normal">$ 2036.00</p>
                                    <p className="text-gray text-sm font-normal tracking-normal">$ 3036.00</p>
                                </div>
                            </div>
                        </div>

                    </div>
                ))
            }
        </div>
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