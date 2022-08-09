export type SiteData = {
    reviews: Review[],
    subleases: Sublease[]
    aptData: Apartment[]
}

export type Review = {
    id: number
    createdAt: Date
    aptName: string
    rating: number
    text: string
    author: string
}

export type Sublease = {
    id: number
    createdAt: Date
    aptName: string
    rooms: string
    text: string
    author: string
}

export type Apartment = {
    name: string
    bedStudio: boolean
    bedMin: number
    bedMax: number
    soldOut: boolean
    priceMin: number
    priceMax: number
    rating: number
    distance: Distance
    image: string
    website: string
}

export type Distance = {
    Car: ToPlaces
    Bike: ToPlaces
    Walk: ToPlaces
}

export type ToPlaces = {
    culc: number
    crc: number
}
