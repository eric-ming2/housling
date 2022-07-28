import React, { FunctionComponent, useState } from 'react'
import CardContainer from './CardContainer'
import HomepageHero from './HomepageHero'
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
    const [sortBy, setSortBy] = useState('Popularity')
    return (
        <>
            <div class="flex flex-col space-y-2 pt-20 mx-auto min-h-screen">
                <HomepageHero />
                <SortBy sortBy={sortBy} setSortBy={setSortBy} />
                <CardContainer />
            </div>
        </>
    )
}
export default HomeContents
