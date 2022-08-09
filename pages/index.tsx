import type { NextPage } from 'next'
import Header from '../components/Header'
import HomeContents from '../components/HomeContents'
import prisma from '../lib/prisma'

export const getStaticProps: GetStaticProps = async () => {
    let aptData = await prisma.apartment.findMany()
    let reviewData = await prisma.review.findMany()
    let subleaseData = await prisma.sublease.findMany()
    const cleanedAptData = aptData.map((apt) => ({
        ...apt,
        rating: apt.rating.toNumber(),
    }))
    const cleanedReviewData = JSON.parse(JSON.stringify(reviewData))
    const cleanedSubleaseData = JSON.parse(JSON.stringify(subleaseData))
    const siteData = {
        reviews: cleanedReviewData,
        subleases: cleanedSubleaseData,
        aptData: cleanedAptData,
    }
    return {
        props: { siteData },
        revalidate: 10,
    }
}

const Home: NextPage = ({ siteData }) => {
    return (
        <div className="flex flex-col h-screen">
            <Header />
            <HomeContents siteData={siteData} />
        </div>
    )
}

export default Home
