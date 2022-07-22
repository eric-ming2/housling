import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header.tsx'
import CardContainer from '../components/CardContainer.tsx'

const Home: NextPage = () => {
    return (
        <div className="bg-gray-200">
            <Header />
            <CardContainer />
        </div>
    )
}

export default Home
