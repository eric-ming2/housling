import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header.tsx'
import CardContainer from '../components/CardContainer.tsx'

const Home: NextPage = () => {
    return (
        <div>
            <Header className="bg-white w-full fixed"/>
            <CardContainer />
        </div>
    )
}

export default Home
