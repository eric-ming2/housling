import React, { FunctionComponent } from 'react'
import Image from 'next/image'

const HomepageHero: FunctionComponent = () => (
    <div className="flex w-full min-h-[50vh]">
        <div className="blur-sm w-full min-h-full overflow-hidden relative z-0">
            <Image
                src="https://cdn.discordapp.com/attachments/835404318655119390/1002053224028708884/image.jpg"
                layout="fill"
                objectFit="cover"
            />
        </div>
        <div class="absolute grid place-items-center bottom-2/3 inset-x-2 text-white z-0">
            <div class="text-7xl font-bold"> Off-Campus Housing Made Easy </div>
            <div class="text-3xl font-bold pt-2">
                Created by Georgia Tech Students, for Georgia Tech Students
            </div>
        </div>
    </div>
)

export default HomepageHero
