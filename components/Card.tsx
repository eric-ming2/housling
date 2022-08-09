import React, { FunctionComponent } from 'react'
import Image from 'next/image'
import Rating from './Rating'
import svgList from '../utils/Svgs'
import { Apartment, Distance } from '../types/types'

type CardProps = {
    location: Apartment
    transportation: keyof Distance
    reviewCount: number
    subleaseCount: number
}

const Card: FunctionComponent<CardProps> = (props) => {
    const location = props.location
    const getRoomAndPriceData = () => {
        const roomData = location.bedStudio
            ? `Studio - ${location.bedMax} beds`
            : `${location.bedMin}-${location.bedMax} beds`
        const priceData = location.soldOut
            ? 'SOLD OUT'
            : `\$${location.priceMin}-\$${location.priceMax}`
        return `${roomData} | ${priceData}`
    }

    const getTransportationData = (
        <div className="mt-3">
            <div className="flex space-x-1 items-center">
                {svgList[props.transportation]}
                <div className="h-min">
                    to CULC: {location.distance[props.transportation].culc} min
                </div>
            </div>
            <div className="flex space-x-1">
                {svgList[props.transportation]}
                <p>to CRC: {location.distance[props.transportation].crc} min</p>
            </div>
        </div>
    )

    const getReviewSubleaseData = (
        <div className="grid place-items-center p-3 text-indigo-500 w-full border-t border-gray-300">
            <div className="flex flex-row items-center w-auto">
                <div>
                    {' '}
                    See all {props.reviewCount} reviews and{' '}
                    {props.subleaseCount} subleases
                </div>
                <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-1"
                    viewBox="0 0 24 24"
                >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
            </div>
        </div>
    )

    return (
        <a
            href={`/apartments/${location.name}`}
            className="flex flex-col h-50 bg-white rounded-lg border shadow-md w-[600px] md:flex-row hover:bg-gray-100"
        >
            <div className="rounded-t-lg h-full w-60 md:rounded-none md:rounded-l-lg relative overflow-hidden">
                <Image src={location.image} layout="fill" objectFit="cover" alt={location.name} />
            </div>
            <div className="flex flex-col w-full">
                <div className="flex flex-col justify-between px-12 py-8  w-auto">
                    <h5 className="text-4xl font-bold tracking-tight text-gray-900">
                        {location.name}
                    </h5>
                    <Rating rating={location.rating} />
                    <div className="font-normal text-lg text-gray-700">
                        {getRoomAndPriceData()}
                        {getTransportationData}
                    </div>
                </div>
                {getReviewSubleaseData}
            </div>
        </a>
    )
}
export default Card
