import React, { FunctionComponent } from 'react'
import Image from 'next/image'
import Rating from './Rating'
import svgList from '../utils/Svgs'

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
    transportation: string
}

const Card: FunctionComponent<CardProps> = (props) => {
    const location = props.location
    const getRoomAndPriceData = () => {
        const roomData = location.bed.studio
            ? `Studio - ${location.bed.max} beds`
            : `${location.bed.min}-${location.bed.max} beds`
        const priceData = location.price.soldOut
            ? 'SOLD OUT'
            : `\$${location.price.min}-\$${location.price.max}`
        return `${roomData} | ${priceData}`
    }

    const getTransportationData = (
        <div className="mt-3">
            <div className="flex space-x-1">
                {svgList[props.transportation]}
                <p>
                    to CULC: {location.distance[props.transportation].culc} min
                </p>
            </div>
            <div className="flex space-x-1">
                {svgList[props.transportation]}
                <p>to CRC: {location.distance[props.transportation].crc} min</p>
            </div>
        </div>
    )

    return (
        <a
            href="#"
            class="flex flex-col h-50
    bg-white rounded-lg border shadow-md min-w-[600px]    md:flex-row hover:bg-gray-100"
        >
            <div class="w-full h-max rounded-t-lg md:h-full md:w-48 md:rounded-none md:rounded-l-lg relative overflow-hidden">
                <Image src={location.image} layout="fill" objectFit="cover" />
            </div>
            <div class="flex flex-col justify-between px-16 py-8 leading-normal">
                <h5 class="text-4xl font-bold tracking-tight text-gray-900">
                    {location.name}
                </h5>
                <Rating rating={location.rating} />
                <div class="mb-3 font-normal text-lg text-gray-700 dark:text-gray-400">
                    {getRoomAndPriceData()}
                    {getTransportationData}
                </div>
            </div>
        </a>
    )
}
export default Card
