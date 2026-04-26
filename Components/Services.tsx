import { Calculator, Cctv, HousePlug, Network, SatelliteDish, SolarPanel } from "lucide-react"



const servicesData = [
    { id: 1, icon: <Cctv size={60} />, heading: "CCTV SECURITY", listItems: { 1: "CCTV cameras", 2: "CCTV camera supply", 3: "Installing camera" }, img: "/assets/hero.JPG" },

    { id: 2, icon: <Calculator size={60} />, heading: "ACCESS CONTROL", listItems: { 1: "Digital keypad control", 2: "Digital panel control", 3: "Digital content control" }, img: "/assets/hero.JPG" },

    { id: 3, icon: <SatelliteDish size={60} />, heading: "STARLINK INTERNET", listItems: { 1: "Starlink internet", 2: "Start starlink", 3: "Starlink installation" }, img: "/assets/hero.JPG" },

    { id: 4, icon: <SolarPanel size={60} />, heading: "SOLAR SYSTEMS", listItems: { 1: "Solar systems", 2: "solar systems", 3: "Solar system into position" }, img: "/assets/hero.JPG" },

    { id: 5, icon: <HousePlug size={60} />, heading: "GENERAL ELECTRICALS", listItems: { 1: "Neat electrical", 2: "Electrical wiring", 3: "Electrical control" }, img: "/assets/hero.JPG" },

    { id: 6, icon: <Network size={60} />, heading: "GENERAL NETWORKING & PABS", listItems: { 1: "Server networking", 2: "Automation", 3: "PABS networking" }, img: "/assets/hero.JPG" },
]
export default function Services() {

    return (
        <main className="p-5 font-serif w-full" id="services">
            <div className="items-center justify-center space-x-3 text-center flex">
                <div className="w-20 border border-blue-900"></div>
                <h1 className="text-2xl md:text-3xl tracking-tighter md:tracking-wider font-bold text-orange-500 uppercase">Our Services</h1>
                <div className="w-20 border border-blue-900"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
                {servicesData.map((service) => (
                    <div className="flex flex-col border-3 rounded-2xl border-blue-900 text-blue-900 items-center justify-center text-center my-5 pt-5 shadow-b shadow-lg shadow-gray-500 " key={service.id}>
                        <p className="tracking-tighter">{service.icon}</p>
                        <h1 className="text-3xl tracking-tighter mt-3 font-bold">{service.heading}</h1>

                        <ul className="text-start list-disc">
                            <li>{service.listItems[1]}</li>
                            <li>{service.listItems[2]}</li>
                            <li>{service.listItems[3]}</li>
                        </ul>

                        <img src={service.img} alt={service.heading} className="w-full object-cover h-70 mt-5" />

                        <div className="py-5 bg-blue-950 w-full rounded-b-xl">
                            <button className="text-gray-100 py-2 px-5 rounded-xl hover:bg-orange-600 active:scale-90 cursor-pointer bg-orange-500">GET A QUOTE</button>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    )
}