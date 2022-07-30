import React, { FunctionComponent } from 'react'
import svgList from '../utils/Svgs'

type Location = {
    name: string
    price: string
    distanceCulc: number
    distanceCrc: number
    website: string
}

type SortByProps = {
    sortBy: string
    setSortBy: Function
}

const SortBy: FunctionComponent<SortByProps> = (props) => {
    const sortByOptions: string[] = [
        'Popularity',
        'Rating',
        'Price',
        'Distance',
        'Subleases',
    ]
    const renderSortByOptions = sortByOptions.map((option) => {
        if (option == props.sortBy) {
            return (
                <button
                    className="text-gray-500 bg-indigo-200 rounded-full p-2 font-black space-x-1 flex place-items-center"
                    key={option}
                >
                    {svgList[option as keyof svgList]}
                    <div>{option}</div>
                </button>
            )
        } else {
            return (
                <button
                    className="text-gray-500 rounded-full p-2 font-black space-x-1 flex place-items-center hover:bg-gray-300"
                    onClick={() => props.setSortBy(option)}
                    key={option}
                >
                    {svgList[option as keyof svgList]}
                    <div>{option}</div>
                </button>
            )
        }
    })

    return (
        <>
            <div className="flex self-center place-items-center justify-between border w-auto border-solid border-gray-400 bg-white p-4 rounded shadow">
                <div className="flex space-x-1 lg:space-x-4">
                    <div className="font-2xl font-medium pt-2">Sort By</div>
                    {renderSortByOptions}
                </div>
            </div>
        </>
    )
}
export default SortBy
