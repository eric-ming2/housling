import React, { FunctionComponent } from 'react'
import Image from 'next/image'
import Rating from './Rating'

type Location = {
    name: string
    price: string
    rating: number
    distanceCulc: number
    distanceCrc: number
    image: string
    website: string
}

type CardProps = {
    location: Location
}

const Card: FunctionComponent<CardProps> = (props) => {
    const location = props.location
    const roomData = location.bed.studio
        ? `Studio - ${location.bed.max} beds`
        : `${location.bed.min}-${location.bed.max} beds`
    const priceData = location.price.soldOut
        ? 'SOLD OUT'
        : `\$${location.price.min}-\$${location.price.max}`
    const roomAndPriceData = `${roomData} | ${priceData}`
    return (
        <a
            href="#"
            class="flex flex-col h-50
    bg-white rounded-lg border shadow-md min-w-[600px]    md:flex-row hover:bg-gray-100"
        >
            <div class="w-full h-max rounded-t-lg md:h-full md:w-48 md:rounded-none md:rounded-l-lg relative overflow-hidden">
                <Image src={location.image} layout="fill" objectFit="cover" />
            </div>
            <div class="flex flex-col justify-between px-16 pt-8 pb-16 leading-normal">
                <h5 class="text-4xl font-bold tracking-tight text-gray-900">
                    {location.name}
                </h5>
                <Rating rating={location.rating} />
                <p class="mb-3 font-normal text-lg text-gray-700 dark:text-gray-400">
                    {roomAndPriceData}
                </p>
            </div>
        </a>
    )
}
export default Card
