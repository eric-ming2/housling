import React, { FunctionComponent } from 'react'
import AptData from '../utils/AptData.json'
import Card from '../components/Card'

type CardContainerProps = {
    transportation: string
}
const CardContainer: FunctionComponent = (props) => {
    const locationCards = AptData.location.map((location) => (
        <Card
            location={location}
            key={location.name}
            transportation={props.transportation}
        />
    ))

    return (
        <div className="flex flex-wrap justify-center gap-10 relative m-10 mt-5">
            {locationCards}
        </div>
    )
}

export default CardContainer
