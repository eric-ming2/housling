import React, { FunctionComponent, useEffect } from 'react'
import AptData from '../utils/AptData.json'
import Card from './Card'
import { SiteData, Apartment, Distance } from '../types/types'

// `PropertyKey` is short for "string | number | symbol"
// since an object key can be any of those types, our key can too
// in TS 3.0+, putting just "string" raises an error
function hasKey<O>(obj: O, key: PropertyKey): key is keyof O {
    return key in obj
}

type CardContainerProps = {
    sortBy: string
    transportation: keyof Distance
    siteData: SiteData
}
const CardContainer: FunctionComponent<CardContainerProps> = (props) => {
    var locationCards = props.siteData.aptData
    var reviewCount = new Map()
    var subleaseCount = new Map()
    for (const location of locationCards) {
        reviewCount.set(location.name, 0)
        subleaseCount.set(location.name, 0)
    }

    const countReviews = () => {
        for (const review of props.siteData.reviews) {
            reviewCount.set(review.aptName, reviewCount.get(review.aptName) + 1)
        }
    }
    const countSubleases = () => {
        for (const sublease of props.siteData.subleases) {
            subleaseCount.set(
                sublease.aptName,
                subleaseCount.get(sublease.aptName) + 1
            )
        }
    }

    countReviews()
    countSubleases()

    const renderLocationCards = () => {
        switch (props.sortBy) {
            case 'Popularity':
                locationCards.sort(
                    (a: Apartment, b: Apartment) =>
                        reviewCount.get(b.name) - reviewCount.get(a.name)
                )
                break
            case 'Rating':
                locationCards.sort(
                    (a: Apartment, b: Apartment) => b.rating - a.rating
                )
                break
            case 'Price':
                locationCards.sort(
                    (a: Apartment, b: Apartment) =>
                        (a.soldOut ? 9999999 : a.priceMin) -
                        (b.soldOut ? 9999999 : b.priceMin)
                )
                break
            case 'Distance':
                locationCards.sort(
                    (a: Apartment, b: Apartment) =>
                        a.distance[props.transportation].culc +
                        a.distance[props.transportation].crc -
                        b.distance[props.transportation].culc -
                        b.distance[props.transportation].crc
                )
                break
            case 'Subleases':
                locationCards.sort(
                    (a: Apartment, b: Apartment) =>
                        subleaseCount.get(b.name) - subleaseCount.get(a.name)
                )
                break
        }
        return locationCards.map((location) => (
            <Card
                location={location}
                key={location.name}
                transportation={props.transportation}
                reviewCount={
                    reviewCount.has(location.name)
                        ? reviewCount.get(location.name)
                        : 0
                }
                subleaseCount={
                    subleaseCount.has(location.name)
                        ? subleaseCount.get(location.name)
                        : 0
                }
            />
        ))
    }

    return (
        <div className="flex flex-wrap justify-center gap-10 relative m-2 md:m-10 mt-5">
            {renderLocationCards()}
        </div>
    )
}

export default CardContainer
