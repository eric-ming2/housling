import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import HomeContents from '../components/HomeContents'

const Home: NextPage = () => {
    return (
        <div className="bg-gray-200">
            <Header />
            <HomeContents />
        </div>
    )
}

export default Home
