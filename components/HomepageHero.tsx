import React, { FunctionComponent } from 'react'
import Image from 'next/image'

//The way the text position is hardcoded relative to screen instead of just centering it in the picture is gross.

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
                <div className="text-7xl md:text-5xl lg:text-7xl font-bold">
                    Off-Campus Housing Made Easy
                </div>
                <div className="text-3xl font-bold pt-2">
                    Created by Georgia Tech Students, for Georgia Tech Students
                </div>
            </div>
        </div>
    </div>
)

export default HomepageHero
