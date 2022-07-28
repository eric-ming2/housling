import React, { FunctionComponent, useState } from 'react'
import CardContainer from './CardContainer'
import Footer from './Footer'
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
            <div class="flex flex-col mx-auto min-h-screen">
                <HomepageHero />

                <div className="text-5xl py-10 font-bold font-color-black self-center">
                    Explore Apartments Nearby
                </div>
                <SortBy sortBy={sortBy} setSortBy={setSortBy} />
                <CardContainer />

                <Footer />
            </div>
        </>
    )
}
export default HomeContents
