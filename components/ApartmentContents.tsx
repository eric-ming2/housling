import React, { FunctionComponent, useState } from 'react'

type ApartmentProps = {
    aptId: string | string[] | undefined
}

const ApartmentContents: FunctionComponent<ApartmentProps> = (props) => {
    return (
        <div className="text-xl grow">
            Apartment: {props.aptId}
            <br />
            Page Coming Soon
        </div>
    )
}

export default ApartmentContents
