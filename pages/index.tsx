import type { NextPage, GetStaticProps } from 'next'
import Header from '../components/Header'
import HomeContents from '../components/HomeContents'
import prisma from '../lib/prisma'
import { SiteData, Distance } from '../types/types'

export const getStaticProps: GetStaticProps = async () => {
    let aptData = await prisma.apartment.findMany()
    let reviewData = await prisma.review.findMany()
    let subleaseData = await prisma.sublease.findMany()
    const cleanedAptData = aptData.map((apt) => ({
        ...apt,
        rating: apt.rating.toNumber(),
        distance: apt.distance as Distance
    }))
    const cleanedReviewData = JSON.parse(JSON.stringify(reviewData))
    const cleanedSubleaseData = JSON.parse(JSON.stringify(subleaseData))
    const siteData: SiteData = {
        reviews: cleanedReviewData,
        subleases: cleanedSubleaseData,
        aptData: cleanedAptData,
    }
    return {
        props: { siteData },
        revalidate: 10,
    }
}

//Todo: probably a disgusting use of any
const Home: NextPage<any> = ({ siteData }) => {
    return (
        <div className="flex flex-col h-screen">
            <Header />
            <HomeContents siteData={siteData} />
        </div>
    )
}

export default Home
