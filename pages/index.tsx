import type { NextPage } from 'next'
import Header from '../components/Header'
import HomeContents from '../components/HomeContents'
import prisma from '../lib/prisma'

export const getStaticProps: GetStaticProps = async () => {
  const aptData = await prisma.apartment.findMany();
  const cleanedData = aptData.map((apt) => ({
      ...apt,
      rating: apt.rating.toNumber()
  }))
  console.log(cleanedData)
  return {
    props: { cleanedData },
    revalidate: 10,
  };
};

const Home: NextPage = ({ cleanedData }) => {
    console.log(cleanedData)
    return (
        <div className="flex flex-col h-screen">
            <Header />
            <HomeContents />
        </div>
    )
}

export default Home
