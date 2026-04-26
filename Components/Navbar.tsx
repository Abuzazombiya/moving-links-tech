"use client"
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react"
import { usePathname } from "next/navigation";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    
    return(
        <nav className="fixed w-full bg-white/80 z-50 shadow-b font-serif flex shadow-gray-500 shadow-lg py-2 px-5 items-center justify-between backdrop:blur-md border border-b border-slate-200">
            <Link href='/' className="flex gap-1">
                <img src="\assets\logo.JPG" alt="Logo" className="w-8 rounded-sm object-cover"/>   
                <h3 className="text-blue-900 font-bold md:text-xl mt-1">Moving Links Tech</h3>
            </Link>

            <div className="font-bold text-blue-900 hidden md:flex gap-3">
                <Link href='/' className="hover:text-blue-400">Home</Link>
                <Link href='#services' className="hover:text-blue-400">Services</Link>
                <Link href='#about' className="hover:text-blue-400">About</Link>
                <Link href='#contact' className="hover:text-blue-400">Contact</Link>
            </div>

            <div className="md:flex hidden">
                <Link href='https://wa.me/+233246795904' className="bg-green-600 text-white text-sm font-bold py-2 px-3 rounded-sm cursor-pointer hover:bg-green-700 active:scale-90 mx-5">WhatsApp Us</Link>
            </div>
            
            <div className="md:hidden flex">
            { isOpen ? (
            <div>
                <X className="text-gray-600 active:scale-90" onClick={() => setIsOpen(false)}/>
            </div>) : (
            <div>
                <Menu className="text-gray-600 active:scale-90" onClick={() => setIsOpen(true)}/>
            </div>
            )}
            </div>

            { isOpen && (
                <div className="md:hidden absolute top-16 left-0 w-full text-white bg-blue-500 flex flex-col items-center gap-3 py-4">
                    <Link href='/' onClick={() => setIsOpen(false)}>Home</Link>
                    <Link href='#services' onClick={() => setIsOpen(false)}>Services</Link>
                    <Link href='#about' onClick={() => setIsOpen(false)}>About</Link>
                    <Link href='#contact' onClick={() => setIsOpen(false)}>Contact</Link>
                    <button className="bg-green-600 text-white text-sm font-bold py-2 px-3 rounded-sm cursor-pointer hover:bg-green-700 active:scale-90" onClick={() => setIsOpen(false)}>WhatsApp Me</button>
                </div>
            )}
        </nav>
    )
}