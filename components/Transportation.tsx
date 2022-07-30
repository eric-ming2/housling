import React, { FunctionComponent } from 'react'
import svgList from '../utils/Svgs'

type TransportationProps = {
    transportation: string
    setTransportation: Function
}

const Transportation: FunctionComponent<TransportationProps> = (props) => {
    const transportationOptions: string[] = ['Walk', 'Bike', 'Car']
    const renderTransportationOptions = transportationOptions.map((option) => {
        if (option == props.transportation) {
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
                    onClick={() => props.setTransportation(option)}
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
                    <div className="font-2xl font-medium pt-2">
                        Transportation
                    </div>
                    {renderTransportationOptions}
                </div>
            </div>
        </>
    )
}
export default Transportation
