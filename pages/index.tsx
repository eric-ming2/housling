import type { NextPage } from 'next'
import Header from '../components/Header'
import HomeContents from '../components/HomeContents'

const Home: NextPage = () => {
    return (
        <div className="flex flex-col h-screen">
            <Header />
            <HomeContents />
        </div>
    )
}

export default Home
