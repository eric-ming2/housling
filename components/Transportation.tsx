import React, { FunctionComponent, useState } from 'react'
import svgList from '../utils/Svgs'
import { Distance } from '../types/types'

type TransportationProps = {
    transportation: string
    setTransportation: Function
}

const Transportation: FunctionComponent<TransportationProps> = (props) => {
    // Todo: hardcoding an array of options here is gross
    const [openDropdown, setOpenDropdown] = useState(false)
    const transportationOptions: string[] = ['Walk', 'Bike', 'Car']
    const renderTransportationOptionsDesktop = transportationOptions.map(
        (option) => {
            if (option == props.transportation) {
                return (
                    <button
                        className="text-gray-500 bg-indigo-200 rounded-full p-2 font-black space-x-1 flex place-items-center"
                        key={option}
                    >
                        {svgList[option]}
                        <div>{option}</div>
                    </button>
                )
            } else {
                return (
                    <button
                        className="text-gray-500 rounded-full p-2 font-black space-x-1 flex place-items-center hover:bg-gray-300"
                        onClick={() =>
                            props.setTransportation(option as keyof Distance)
                        }
                        key={option}
                    >
                        {svgList[option]}
                        <div>{option}</div>
                    </button>
                )
            }
        }
    )

    const renderTransportationOptionsMobileHelper = transportationOptions.map(
        (option) => {
            if (option == props.transportation) {
                return (
                    <button
                        className="text-gray-500 bg-indigo-200 rounded-full p-2 font-black space-x-3 flex place-items-center text-xl"
                        onClick={() => setOpenDropdown(false)}
                        key={option}
                    >
                        {svgList[option as keyof svgList]}
                        <div>{option}</div>
                    </button>
                )
            } else {
                return (
                    <button
                        className="text-gray-500 rounded-full p-2 font-black space-x-3 flex place-items-center hover:bg-gray-300 text-xl"
                        onClick={() => {
                            props.setTransportation(option)
                            setOpenDropdown(false)
                        }}
                        key={option}
                    >
                        {svgList[option as keyof svgList]}
                        <div>{option}</div>
                    </button>
                )
            }
        }
    )
    const renderTransportationOptionsMobile = (
        <>
            <button
                className="text-gray-500 rounded-full p-2 font-black space-x-1 flex place-items-center bg-indigo-200 text-l"
                onClick={() => setOpenDropdown(true)}
            >
                {svgList[props.transportation as keyof svgList]}
                <div>{props.transportation}</div>
                {svgList.CaretDown}
            </button>
            <div
                className={
                    openDropdown
                        ? 'fixed right-0 top-0 bottom-0 left-0 background-opacity-50 bg-gray-900/50 z-10 m-0'
                        : 'hidden'
                }
            >
                <div className="absolute bottom-10 left-5 right-5 bg-white h-fit rounded p-3">
                    <div className="flex flex-col space-y-5">
                        <div className="border-b border-gray-300 text-xl text-gray-500 p-5">
                            CALCULATE COMMUTE BY
                        </div>
                        {renderTransportationOptionsMobileHelper}
                        <button
                            className="text-gray-500 rounded-full p-2 font-black space-x-1 flex flex-col place-items-center bg-gray-300 text-xl self-center w-full"
                            onClick={() => {
                                setOpenDropdown(false)
                            }}
                        >
                            <div className="self-center font-medium">Close</div>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
    return (
        <>
            <div className="flex self-center place-items-center justify-between border w-auto border-solid border-gray-400 bg-white p-2 md:p-4 rounded shadow md:mx-5 mb-2">
                <div className="space-x-1 lg:space-x-4 hidden md:flex">
                    <div className="font-2xl font-medium pt-2">
                        Transportation
                    </div>
                    {renderTransportationOptionsDesktop}
                </div>
                <div className="flex md:hidden">
                    <div className="text-l pt-2 pr-3">Transportation</div>
                    {renderTransportationOptionsMobile}
                </div>
            </div>
        </>
    )
}
export default Transportation
