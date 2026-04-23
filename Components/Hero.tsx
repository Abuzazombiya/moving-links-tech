import Link from "next/link"

export default function Hero() {
    return(
            <div className="w-auto text-gray-600 bg-blue-400 grid grid-cols-1 md:grid-cols-2 mt-20 mx-5 rounded-2xl gap-5 py-10 px-5 justify-center text-center items-center font-serif shadow-b shadow-lg shadow-blue-300">
                <div className='bg-blue-300 rounded-2xl py-10 text-gray-200 text-left px-5 lg:ml-10'>
                    <h3 className="text-lg md:text-2xl text-orange-400 font-bold mb-2">Serving Accra, Ghana</h3>
                    <h1 className="text-4xl text-blue-900 lg:text-6xl tracking-tighter mb-4">Your Trusted Expert For CCTV, STARLINK, & ELECTRICAL</h1>
                    <p className='text-xl tracking-wide mb-8 italic'>From Professional CCTV security systems to high-speed Starlink internet and complete electrical solutions, we power and protect your property in Accra.</p>
                    <div className="flex flex-col md:flex-row md:gap-5 items-center text-center justify-center">
                       <Link href="https://wa.me/+233246795904" className="bg-green-600 rounded-lg hover:bg-green-700 active:scale-90 flex flex-col text-center font-bold text-sm p-3 md:w-50 tracking-wider mb-3">CHAT ON WHATSAPP <span>Fast response!</span></Link> 

                       <Link href="tel:+233246795904" className="text-gray-700 border border-gray-700 bg-white rounded-lg active:scale-90 flex flex-col text-center font-bold text-sm p-3 md:w-50 tracking-tight mb-3">CALL US OUR TEAM <span>Talk to our expert today.</span></Link> 
                    </div>
                    
                </div>
                <div className="md:ml-20">
                    <img
                    src="/assets/hero.JPG"
                    alt="Hero Background"
                    className="w-auto md:h-132 lg:h-180 lg:ml-5 rounded-2xl"/>
                </div>
            </div>
    )
}