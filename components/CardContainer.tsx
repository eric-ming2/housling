import React, { FunctionComponent } from 'react'
import sampleData from '../assets/sampleData.json'
import Card from '../components/Card'

const CardContainer: FunctionComponent = () => {
    console.log(sampleData)
    //const data = JSON.stringify(sampleData)

    const locationCards = sampleData.location.map((location) => (
        <Card location={location} />
    ))

    return <div>{locationCards}</div>
    //return <Card name="The Standard" details={sampleData['The Standard']} />
}

export default CardContainer
