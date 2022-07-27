import React, { FunctionComponent, useState } from 'react'
import CardContainer from './CardContainer'
import SortBy from './SortBy'

type Location = {
    name: string
    price: string
    distanceCulc: number
    distanceCrc: number
    website: string
}

type HomeContentsProps = {
    location: Location
}

const HomeContents: FunctionComponent<HomeContentsProps> = (props) => {
    const [sortBy, setSortBy] = useState('Popular')
    return (
        <div class="flex flex-col space-y-2 pt-20 bg-gray-200 mx-auto min-h-screen max-w-4xl lg:max-w-5xl xl:max-w-6xl">
            <SortBy sortBy={sortBy} setSortBy={setSortBy} />
            <CardContainer />
        </div>
    )
}
export default HomeContents
