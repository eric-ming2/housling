import React, { FunctionComponent, useState } from 'react'
import CardContainer from './CardContainer'
import Footer from './Footer'
import HomepageHero from './HomepageHero'
import SortBy from './SortBy'
import Transportation from './Transportation'

const HomeContents: FunctionComponent = () => {
    const [sortBy, setSortBy] = useState('Popularity')
    const [transportation, setTransportation] = useState('Walk')
    return (
        <>
            <div className="flex flex-col mx-auto min-h-screen">
                <HomepageHero />

                <div className="text-5xl py-10 font-bold font-color-black self-center">
                    Explore Apartments Nearby
                </div>
                <div className="flex flex-wrap self-center space-x-8">
                    <SortBy sortBy={sortBy} setSortBy={setSortBy} />
                    <Transportation
                        transportation={transportation}
                        setTransportation={setTransportation}
                    />
                </div>
                <CardContainer
                    transportation={transportation}
                    sortBy={sortBy}
                />

                <Footer />
            </div>
        </>
    )
}
export default HomeContents
