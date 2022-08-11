import React, { FunctionComponent } from 'react'
import Image from 'next/image'

const HomepageHero: FunctionComponent = () => (
    <div className="relative flex w-full min-h-[50vh]">
        <div className="blur-sm w-full min-h-full overflow-hidden relative z-0">
            <Image
                src="https://cdn.discordapp.com/attachments/835404318655119390/1002802861694005380/HomepageHero.jpg"
                layout="fill"
                objectFit="cover"
                alt=""
            />
        </div>
        <div className="absolute grid place-items-center text-white z-0 h-full w-full">
            <div className="flex flex-col items-center">
                <div className="md:text-7xl text-5xl font-bold text-center mx-16 mb-8">
                    Off-Campus Housing Made Easy
                </div>
                <div className="md:text-3xl text-xl font-bold pt-2 text-center mx-16">
                    Created by Georgia Tech Students, for Georgia Tech Students
                </div>
            </div>
        </div>
    </div>
)

export default HomepageHero
