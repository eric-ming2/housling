import { useRouter } from 'next/router'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ApartmentContents from '../../components/ApartmentContents'

const ApartmentPage = () => {
    const router = useRouter()
    const { aptId } = router.query

    return (
        <div className="flex flex-col h-screen overflow-auto bg-gray-200">
            <Header />
            <ApartmentContents aptId={aptId} />
            <Footer />
        </div>
    )
}

export default ApartmentPage
