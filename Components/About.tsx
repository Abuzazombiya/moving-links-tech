import { Eye, GraduationCap, LucideBowArrow, LucidePackageX, Star } from "lucide-react";


export default function About() {
    return(
        <main className="font-serif w-full mt-8" id="about">
            <div className="items-center justify-center flex gap-3">
            <div className="w-20 border border-blue-900"></div>
                <h1 className="text-2xl md:text-3xl tracking-tighter md:tracking-wider font-bold text-orange-500 uppercase">About Us</h1>
             <div className="w-20 border border-blue-900"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-5 px-5 items-center justify-center">
                <div>
                <h1 className="text-4xl my-5 text-center tracking-widest font-bold text-blue-900 uppercase">Our foundation, <br /> Our values.</h1>
                <p className="text-left text-lg">Moving Links Technology was founded by Muhammad Akati with a vision to bridge the digital divide in Ghana and beyond. We specialize in cutting-edge technology solutions including CCTV security systems, Starlink satellite internet installations, solar power systems, and comprehensive electrical services. Our team combines years of expertise with a passion for innovation to deliver reliable, high-quality solutions that empower businesses and homes with modern connectivity and security.</p> 
                <p className="text-left text-lg my-5">From residential security setups to large-scale network installations, we pride ourselves on personalized service and technical excellence. Our commitment to staying at the forefront of technology ensures that our clients always have access to the latest advancements in connectivity and protection.</p>

                <div className="flex flex-col gap-10 text-blue-900 px-5">
                    <div>
                        <h1 className="flex gap-2 text-3xl font-bold"><LucideBowArrow size={30} className="mt-1"/> Our Mission</h1>
                        <p>To provide innovative technology solutions that enhance security, connectivity, and sustainability for our clients, delivering exceptional service with integrity and expertise.</p>
                    </div>
                    <div>
                        <h1 className="flex gap-2 text-3xl font-bold"><Eye size={30} className="mt-1"/> Our Vision</h1>
                        <p>To be Ghana's leading technology solutions provider, pioneering advancements in security, internet connectivity, and renewable energy systems that transform communities and businesses.</p>
                    </div>
                    <div>
                        <h1 className="flex gap-2 text-3xl font-bold"><GraduationCap size={30} className="mt-1"/> Our Core Values</h1>
                        <ul className="list-disc">
                            <li>Innovation: Embracing cutting-edge technology to deliver superior solutions.</li>
                            <li>Integrity: Building trust through honest, transparent, and ethical practices.</li>
                            <li>Excellence: Striving for the highest quality in every project we undertake.</li>
                            <li>Customer Focus: Prioritizing client needs and satisfaction above all else.</li>
                        </ul>
                    </div>
                </div>
                </div>

                <div className="flex flex-col gap-5 items-center justify-center px-5 mt-5">
                    <div className="shadow-b shadow-blue-300 p-3 rounded-2xl bg-blue-200 shadow-lg w-full md:w-100">
                        <img src="assets\2025_11_15_21_42_IMG_2261.JPG" alt="Picture of Muhammed Akati" className="w-full rounded-2xl md:h-120 md:w-100 object-cover" />

                        <h1 className="text-3xl text-blue-900">Muhammad Akati</h1>
                        <p className="py-3">Founder, Managing Director</p>
                        <p>With over 15 years in the technology and electrical engineering field, Muhammad Akati founded Moving Links Technology to address the growing need for reliable tech solutions in Ghana. His expertise spans from advanced security systems to satellite communications, driven by a commitment to empowering communities through technology.</p>
                    </div>

                    <h1 className="text-3xl text-blue-900 text-center">TRUST BADGES</h1>
                    <div className="flex flex-col md:flex-row gap-5 items-center justify-center mt-3">
                        <div className="bg-orange-500 rounded-full text-white text-center py-5 w-35">
                            <h1 className="text-2xl">15+</h1>
                            <h2 className="italic text-lg">Years</h2>
                            <h4 className="italic text-sm">Combined <br /> Experience</h4>
                        </div>
                        <div className="border-2 border-orange-500 rounded-full text-blue-900 font-bold text-center py-8 w-35">
                            <h1 className="text-2xl">Accra </h1>
                            <h4 className="italic text-sm">Certified & <br /> Insured</h4>
                        </div>
                        
                        <div className="bg-orange-500 rounded-full text-white items-center justify-center text-center py-7 w-35">
                            <h1 className="text-center"><Star className="items-center ml-14" size={25} /></h1>
                            <h2 className="italic text-sm">Acrredited</h2>
                            <h4 className="italic text-sm">Starlink <br /> Installation</h4>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}