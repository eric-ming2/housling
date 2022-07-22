import React, { FunctionComponent } from 'react'
import sampleData from '../assets/sampleData.json'
import Card from '../components/Card'

const CardContainer: FunctionComponent = () => {
    console.log(sampleData)

    const locationCards = sampleData.location.map((location) => (
        <Card location={location} />
    ))

    return (
            <div
      class="flex flex-col pt-20 bg-gray-200 mx-auto min-h-screen max-w-4xl lg:max-w-5xl xl:max-w-6xl"
    >

        <div className="grid grid-cols-1 gap-y-4 relative">{locationCards}</div>
            </div>
    )
}

export default CardContainer
