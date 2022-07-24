import React, { FunctionComponent } from 'react'

type Location = {
    name: string
    price: string
    distanceCulc: number
    distanceCrc: number
    website: string
}

type CardProps = {
    location: Location
}

const SortBy: FunctionComponent<SortByProps> = (props) => {
    console.log('here')
    return (
        <>
            <div class="font-2xl font-medium pt-2">Sort By</div>
            <div class="flex place-items-center justify-between border border-solid border-gray-400 bg-white p-4 rounded shadow">
                <svg
                    class="h-8 w-8 text-gray-500"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                >
                    {' '}
                    <path stroke="none" d="M0 0h24v24H0z" />{' '}
                    <path d="M18 15a6 6 0 1 1 -10.853 -3.529c1.926-2.338 4.763-3.327 3.848-8.47 2.355 1.761 5.84 5.38 2.022 9.406-1.136 1.091-.244 2.767 1.221 2.593.882-.105 2.023-.966 3.23-2.3.532.68.532 1.717.532 2.3z" />
                </svg>
                <div>Popular</div>
            </div>
        </>
    )
}
export default SortBy
