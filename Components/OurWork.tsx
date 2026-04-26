'use client'
import { useState } from "react";

const categories = ["All", "CCTV", "Network", "Starlink"];
const projects = [
    {id: 1, title: "Advanced Networking Rack", category: "Network", description: "Completed complex networking hub for business client.", img: "/assets/hero.JPG"},
    {id: 2, title: "Starlink Installation In Accra", category: "CCTV", description: "Completed Completed clean panel antenas in Accra.", img: "/assets/logo.JPG"},
    {id: 3, title: "Advanced Networking Rack", category: "Starlink", description: "Completed complex networking hub for business client.", img: "/assets/hero.JPG"},
    {id: 4, title: "Advanced Networking Rack", category: "Starlink", description: "Completed complex networking hub for business client.", img: "/assets/hero.JPG"},
    {id: 5, title: "Advanced Networking Rack", category: "CCTV", description: "Completed complex networking hub for business client.", img: "/assets/hero.JPG"},
    {id: 6, title: "Advanced Networking Rack", category: "Network", description: "Completed complex networking hub for business client.", img: "/assets/hero.JPG"}
];

export default function OurWork() {

    const [filter, setFilter] = useState("All");

    const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.category === filter);

    return(
        <main className="w-full px-5">
            <div className="flex gap-3 items-center justify-center font-serif">
            <div className="w-20 border border-blue-900"></div>
                <h1 className="text-2xl md:text-3xl tracking-tighter md:tracking-wider font-bold text-orange-500 uppercase">Our Work</h1>
             <div className="w-20 border border-blue-900"></div>
            </div>

            <div className="flex justify-center items-center gap-10 mt-2">
                {categories.map((cat) => (
                   <button
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className={`text-lg transition-all cursor-pointer active:scale-90 ${filter === cat ? 'bg-blue-900 rounded-2xl text-gray-100 px-3 py-1' : ''}`}
                    >
                        {cat}
                    </button> 
                ))}
            </div>

            <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4 px-3 pt-5">
                {filteredProjects.map((project) => (  
                <div className="relative" key={project.id}>
                    <img src={project.img} width={500} alt={project.title} className="object-cover h-130 rounded-xl w-full" />
                    <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent rounded-xl"></div>
                    <div className="absolute inset-0 flex flex-col gap-2 mx-7 text-gray-100  top-90 items-center justify-center">
                    <h1 className=" text-2xl font-bold tracking-tighter uppercase">{project.title}</h1>
                    <p>{project.description}</p>
                    </div>
                </div>
                ))}
            </div>
        </main>
    );
} 