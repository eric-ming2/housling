import { ReactElement } from 'react'
type svgList = {
    [index: string]: ReactElement
}
const svgList: svgList = {
    Popularity: (
        <svg
            className="h-8 w-8 text-gray-500"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
            />
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
            />
        </svg>
    ),
    LargePopularity: (
        <svg
            className="h-8 w-8 text-gray-500"
            width="48"
            height="48"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
            />
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
            />
        </svg>
    ),
    Price: (
        <svg
            className="h-8 w-8 text-gray-500"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            {' '}
            <path stroke="none" d="M0 0h24v24H0z" />{' '}
            <circle cx="12" cy="12" r="9" />{' '}
            <path d="M14.8 9a2 2 0 0 0 -1.8 -1h-2a2 2 0 0 0 0 4h2a2 2 0 0 1 0 4h-2a2 2 0 0 1 -1.8 -1" />{' '}
            <path d="M12 6v2m0 8v2" />
        </svg>
    ),
    LargePrice: (
        <svg
            className="h-8 w-8 text-gray-500"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            {' '}
            <path stroke="none" d="M0 0h24v24H0z" />{' '}
            <circle cx="12" cy="12" r="9" />{' '}
            <path d="M14.8 9a2 2 0 0 0 -1.8 -1h-2a2 2 0 0 0 0 4h2a2 2 0 0 1 0 4h-2a2 2 0 0 1 -1.8 -1" />{' '}
            <path d="M12 6v2m0 8v2" />
        </svg>
    ),
    Rating: (
        <svg
            className="h-8 w-8 text-gray-500"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
            />
        </svg>
    ),
    LargeRating: (
        <svg
            className="h-8 w-8 text-gray-500"
            width="48"
            height="48"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
            />
        </svg>
    ),
    Distance: (
        <svg
            className="h-8 w-8 text-gray-500"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
        </svg>
    ),
    LargeDistance: (
        <svg
            className="h-8 w-8 text-gray-500"
            width="48"
            height="48"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
        </svg>
    ),
    Subleases: (
        <svg
            className="h-8 w-8 text-gray-500"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            {' '}
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />{' '}
            <line x1="16" y1="2" x2="16" y2="6" />{' '}
            <line x1="8" y1="2" x2="8" y2="6" />{' '}
            <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
    ),
    LargeSubleases: (
        <svg
            className="h-8 w-8 text-gray-500"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            {' '}
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />{' '}
            <line x1="16" y1="2" x2="16" y2="6" />{' '}
            <line x1="8" y1="2" x2="8" y2="6" />{' '}
            <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
    ),
    Logo: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            stroke="white"
            fill="white"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-lg"
        >
            <path d="M389.376 0H122.624c-5.632 0-10.199 4.566-10.199 10.199v491.602c0 5.633 4.567 10.199 10.199 10.199h266.752c5.632 0 10.199-4.566 10.199-10.199V10.199C399.575 4.566 395.008 0 389.376 0zm-91.45 491.602h-31.727v-31.193c0-5.633-4.567-10.199-10.199-10.199s-10.199 4.566-10.199 10.199v31.193h-31.726v-85.383h83.851v85.383zm81.252 0h-60.855V396.02c0-5.633-4.567-10.199-10.199-10.199H203.876c-5.632 0-10.199 4.566-10.199 10.199v95.582h-60.854V20.398h246.355v471.204z" />
            <path d="M230.96 43.436h-63.367c-5.632 0-10.199 4.566-10.199 10.199v63.367c0 5.633 4.567 10.199 10.199 10.199h63.367c5.632 0 10.199-4.566 10.199-10.199V53.636c0-5.633-4.567-10.2-10.199-10.2zm-10.199 63.367h-42.968V63.835h42.968v42.968zM344.407 43.436H281.04c-5.632 0-10.199 4.566-10.199 10.199v63.367c0 5.633 4.566 10.199 10.199 10.199h63.367c5.632 0 10.199-4.566 10.199-10.199V53.636c0-5.633-4.567-10.2-10.199-10.2zm-10.199 63.367H291.24V63.835h42.968v42.968zM230.96 155.861h-63.367c-5.632 0-10.199 4.566-10.199 10.199v63.367c0 5.633 4.567 10.199 10.199 10.199h63.367c5.632 0 10.199-4.566 10.199-10.199V166.06c0-5.633-4.567-10.199-10.199-10.199zm-10.199 63.367h-42.968V176.26h42.968v42.968zM344.407 155.861H281.04c-5.632 0-10.199 4.566-10.199 10.199v63.367c0 5.633 4.566 10.199 10.199 10.199h63.367c5.632 0 10.199-4.566 10.199-10.199V166.06c0-5.633-4.567-10.199-10.199-10.199zm-10.199 63.367H291.24V176.26h42.968v42.968zM230.96 268.286h-63.367c-5.632 0-10.199 4.566-10.199 10.199v63.367c0 5.633 4.567 10.199 10.199 10.199h63.367c5.632 0 10.199-4.566 10.199-10.199v-63.367c0-5.633-4.567-10.199-10.199-10.199zm-10.199 63.367h-42.968v-42.968h42.968v42.968zM344.407 268.286H281.04c-5.632 0-10.199 4.566-10.199 10.199v63.367c0 5.633 4.566 10.199 10.199 10.199h63.367c5.632 0 10.199-4.566 10.199-10.199v-63.367c0-5.633-4.567-10.199-10.199-10.199zm-10.199 63.367H291.24v-42.968h42.968v42.968zM256 418.526c-5.632 0-10.199 4.566-10.199 10.199v1.022c0 5.633 4.567 10.199 10.199 10.199s10.199-4.566 10.199-10.199v-1.022c0-5.632-4.567-10.199-10.199-10.199z" />
        </svg>
    ),
    FullStar: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="w-4 h-4 text-yellow-400"
            viewBox="0 0 16 16"
        >
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
        </svg>
    ),
    HalfStar: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="w-4 h-4 text-yellow-400"
            viewBox="0 0 16 16"
        >
            <path d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z" />
        </svg>
    ),
    EmptyStar: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="w-4 h-4 text-yellow-400"
            viewBox="0 0 16 16"
        >
            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
        </svg>
    ),
    Walk: (
        <svg
            className="h-8 w-8 text-gray-500"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="13" cy="4" r="2" />
            <path d="M13.978 12.27c.245.368.611.647 1.031.787l2.675.892.633-1.896-2.675-.892-1.663-2.495a2.016 2.016 0 0 0-.769-.679l-1.434-.717a1.989 1.989 0 0 0-1.378-.149l-3.193.797a2.002 2.002 0 0 0-1.306 1.046l-1.794 3.589 1.789.895 1.794-3.589 2.223-.556-1.804 8.346-3.674 2.527 1.133 1.648 3.675-2.528c.421-.29.713-.725.82-1.225l.517-2.388 2.517 1.888.925 4.625 1.961-.393-.925-4.627a2 2 0 0 0-.762-1.206l-2.171-1.628.647-3.885 1.208 1.813z" />
        </svg>
    ),
    LargeWalk: (
        <svg
            className="h-8 w-8 text-gray-500"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="13" cy="4" r="2" />
            <path d="M13.978 12.27c.245.368.611.647 1.031.787l2.675.892.633-1.896-2.675-.892-1.663-2.495a2.016 2.016 0 0 0-.769-.679l-1.434-.717a1.989 1.989 0 0 0-1.378-.149l-3.193.797a2.002 2.002 0 0 0-1.306 1.046l-1.794 3.589 1.789.895 1.794-3.589 2.223-.556-1.804 8.346-3.674 2.527 1.133 1.648 3.675-2.528c.421-.29.713-.725.82-1.225l.517-2.388 2.517 1.888.925 4.625 1.961-.393-.925-4.627a2 2 0 0 0-.762-1.206l-2.171-1.628.647-3.885 1.208 1.813z" />
        </svg>
    ),
    Bike: (
        <svg
            className="h-8 w-8 text-gray-500"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            {' '}
            <path stroke="none" d="M0 0h24v24H0z" />{' '}
            <circle cx="5" cy="18" r="3" /> <circle cx="19" cy="18" r="3" />{' '}
            <polyline points="12 19 12 15 9 12 14 8 16 11 19 11" />{' '}
            <circle cx="17" cy="5" r="1" />
        </svg>
    ),
    LargeBike: (
        <svg
            className="h-8 w-8 text-gray-500"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            {' '}
            <path stroke="none" d="M0 0h24v24H0z" />{' '}
            <circle cx="5" cy="18" r="3" /> <circle cx="19" cy="18" r="3" />{' '}
            <polyline points="12 19 12 15 9 12 14 8 16 11 19 11" />{' '}
            <circle cx="17" cy="5" r="1" />
        </svg>
    ),
    Car: (
        <svg
            className="h-8 w-8 text-gray-500"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            {' '}
            <path stroke="none" d="M0 0h24v24H0z" />{' '}
            <circle cx="7" cy="17" r="2" /> <circle cx="17" cy="17" r="2" />{' '}
            <path d="M5 17h-2v-6l2-5h9l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0h-6m-6 -6h15m-6 0v-5" />
        </svg>
    ),
    LargeCar: (
        <svg
            className="h-8 w-8 text-gray-500"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            {' '}
            <path stroke="none" d="M0 0h24v24H0z" />{' '}
            <circle cx="7" cy="17" r="2" /> <circle cx="17" cy="17" r="2" />{' '}
            <path d="M5 17h-2v-6l2-5h9l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0h-6m-6 -6h15m-6 0v-5" />
        </svg>
    ),
    CaretDown: (
        <svg
            className="h-8 w-8 text-red-500"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            {' '}
            <path stroke="none" d="M0 0h24v24H0z" />{' '}
            <path d="M18 15l-6-6l-6 6h12" transform="rotate(180 12 12)" />
        </svg>
    ),
}
export default svgList
