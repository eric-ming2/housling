import React, { FunctionComponent } from 'react'
import Image from 'next/image'
import standardPicture from '../assets/TheStandard.jpeg'
import markPicture from '../assets/TheMark.jpeg'
import uhousePicture from '../assets/UHouse.webp'

type Location = {
    name: string
    price: string
    distanceCulc: number
    distanceCrc: number
    website: string
}

type CardProps = {
    location: Location
}

const Card: FunctionComponent<CardProps> = (props) => {
    const pictureMap = new Map<string, object>([
        ['The Standard', standardPicture],
        ['The Mark', markPicture],
        ['UHouse', uhousePicture],
    ])

    return (
        <a
            href="#"
            class="flex flex-col items-center h-50
    bg-white rounded-lg border shadow-md
    md:flex-row md:max-w-xl hover:bg-gray-100
    dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
            <div class="w-full h-max rounded-t-lg md:h-full md:w-48 md:rounded-none md:rounded-l-lg relative">
                <Image
                    src={pictureMap.get(props.location.name)}
                    layout="fill"
                    objectFit="cover"
                />
            </div>
            <div class="flex flex-col justify-between p-4 leading-normal">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {props.location.name}
                </h5>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
                </p>
            </div>
        </a>
    )
}
export default Card
