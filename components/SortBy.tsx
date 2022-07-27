import React, { FunctionComponent } from 'react'
import sortByOptions from '../utils/SortByOptions'

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
    const renderSortByOptions = sortByOptions.map((option) => {
        if (option.name == props.sortBy) {
            return (
                <button class="text-gray-500 bg-indigo-200 rounded-full p-2 font-black space-x-2 flex place-items-center">
                    {option.svg}
                    <div>{option.name}</div>
                </button>
            )
        } else {
            return (
                <button
                    class="text-gray-500 rounded-full p-2 font-black space-x-2 flex place-items-center hover:bg-gray-300"
                    onClick={() => props.setSortBy(option.name)}
                >
                    {option.svg}
                    <div>{option.name}</div>
                </button>
            )
        }
    })

    return (
        <>
            <div class="font-2xl font-medium pt-2">Sort By</div>
            <div class="flex place-items-center justify-between border border-solid border-gray-400 bg-white p-4 rounded shadow">
                <div class="flex space-x-1 lg:space-x-4">
                    {renderSortByOptions}
                </div>
            </div>
        </>
    )
}
export default SortBy
