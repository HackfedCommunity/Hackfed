import CallToAction from '../components/CallToAction'
import Faq from '../components/Faq'
import Hero from '../components/Hero'
// import Landing from '../components/Landing'
import Partners from '../components/Partners'
import PastEvents from '../components/PastEvents'
import Stats from '../components/Stats'
import UpcommingEvent from '../components/UpcommingEvent'
import Contactus from '../component2/Contactus'

function Home() {
    return (
        <>
            {/* <div className=''>
                <div className='h-screen'>
                    <Hero />
                </div>
                <Partners />
                <UpcommingEvent />
                <PastEvents />
                <Stats />
                <CallToAction />
                <Faq />
            </div> */}
         <Contactus></Contactus>
        </>
    )
}

export default Home