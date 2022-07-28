import React, { FunctionComponent } from 'react'
import sampleData from '../assets/sampleData.json'
import Card from '../components/Card'

const CardContainer: FunctionComponent = () => {
    console.log(sampleData)

    const locationCards = sampleData.location.map((location) => (
        <Card location={location} key={location.name} />
    ))

    return (
        <div className="grid grid-cols-2 gap-10 relative m-10 mt-5">
            {locationCards}
        </div>
    )
}

export default CardContainer
