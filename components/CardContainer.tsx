import React, { FunctionComponent, useEffect } from 'react'
import AptData from '../utils/AptData.json'
import Card from './Card'

type CardContainerProps = {
    sortBy: string
    transportation: string
}
const CardContainer: FunctionComponent<CardContainerProps> = (props) => {
    useEffect(() => {
        renderLocationCards()
    }, [props])

    var locationCards = AptData.location

    const renderLocationCards = () => {
        switch (props.sortBy) {
            case 'Popularity':
                locationCards.sort((a, b) => b.reviewCount - a.reviewCount)
                break
            case 'Rating':
                locationCards.sort((a, b) => b.rating - a.rating)
                break
            case 'Price':
                locationCards.sort((a, b) => a.price.min - b.price.min)
                break
            case 'Distance':
                locationCards.sort(
                    (a, b) =>
                        a.distance[props.transportation].culc +
                        a.distance[props.transportation].crc -
                        b.distance[props.transportation].culc -
                        b.distance[props.transportation].crc
                )
        }
        return locationCards.map((location) => (
            <Card
                location={location}
                key={location.name}
                transportation={props.transportation}
            />
        ))
    }

    return (
        <div className="flex flex-wrap justify-center gap-10 relative m-10 mt-5">
            {renderLocationCards()}
        </div>
    )
}

export default CardContainer
