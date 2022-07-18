import React, { FunctionComponent } from 'react'
import sampleData from '../assets/sampleData.json'
import Card from '../components/Card.tsx'

const CardContainer: FunctionComponent = () => {
    console.log(sampleData);
    //const data = JSON.stringify(sampleData)
    return (
        <Card />
    )
}

export default CardContainer
