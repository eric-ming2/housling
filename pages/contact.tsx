import type { NextPage } from 'next'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ContactContents from '../components/ContactContents'

const Home: NextPage = () => {
    return (
        <div className="flex flex-col h-screen overflow-auto bg-gray-200">
            <Header />
            <ContactContents />
            <Footer />
        </div>
    )
}

export default Home
