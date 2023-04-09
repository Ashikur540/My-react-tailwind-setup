import React from 'react'
import { FlashSale } from '../components/Flash sale/FlashSale'
import { TrendingProduct } from '../components/Trending Product/TrendingProduct'

export const Home = () => {
    return (
        <div className="min-h-screen">
            <FlashSale />
            <TrendingProduct />
        </div>
    )
}
