import React, { FunctionComponent } from 'react'
import AptData from '../utils/AptData.json'
import Card from '../components/Card'

const CardContainer: FunctionComponent = () => {
    const locationCards = AptData.location.map((location) => (
        <Card location={location} key={location.name} />
    ))

    return (
        <div className="flex flex-wrap justify-center gap-10 relative m-10 mt-5">
            {locationCards}
        </div>
    )
}

export default CardContainer
