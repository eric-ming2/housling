import React, { FunctionComponent } from 'react'
import sampleData from '../assets/sampleData.json'
import Card from '../components/Card'

const CardContainer: FunctionComponent = () => {
    console.log(sampleData)

    const locationCards = sampleData.location.map((location) => (
        <Card location={location} />
    ))

    return (
        <div className="grid grid-cols-1 gap-y-4 relative">{locationCards}</div>
    )
}

export default CardContainer
