import React, { FunctionComponent } from 'react'
import svgList from '../utils/Svgs'

type RatingProps = {
    rating: number
}

const Rating: FunctionComponent<RatingProps> = (props) => {
    const renderStars = () => {
        var stars = []
        for (let i = 0; i < 5; i++) {
            if (props.rating - i >= 1) {
                stars.push(svgList.FullStar)
            } else if (props.rating - i > 0) {
                stars.push(svgList.HalfStar)
            } else {
                stars.push(svgList.EmptyStar)
            }
        }
        return stars
    }
    return (
        <div class="flex items-center mb-2">
            {renderStars()}
            <p class="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                {props.rating} out of 5
            </p>
        </div>
    )
}
export default Rating
