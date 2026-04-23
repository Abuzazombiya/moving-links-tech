import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-300 pt-10 font-serif">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-slate-800 pb-8">
                {/* Brand Section */}
                <div className="space-y-4">
                    <div className="flex items-center gap-2">
                        <Link href='/' className="flex gap-1">
                            <img src="\assets\logo.JPG" alt="Logo" className="w-8 rounded-sm object-cover"/>   
                            <h3 className="text-blue-100 font-bold md:text-xl mt-1">Moving Links Tech</h3>
                        </Link>
                    </div>
                
                    <p className="text-sm leading-relaxed text-slate-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quod aspernatur ut debitis odio eaque adipisci eum quae sint excepturi asperiores, qui cumque aut iste. Harum voluptates beatae molestiae reiciendis.</p>
                <div className="flex gap-4">
                    
                </div>
                </div>
                {/* Quick Links Section */}
                <div>
                    <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Quick Links</h4>
                    <ul className="space-y-2 text-sm">
                        <li><Link href='/' className="hover:text-white transition">Buy Properties</Link></li>
                        <li><Link href='/' className="hover:text-white transition">Rent Properties</Link></li>
                        <li><Link href='/' className="hover:text-white transition">Luxury Villa</Link></li>
                        <li><Link href='/' className="hover:text-white transition">Contact Us</Link></li>
                    </ul>
                </div>

                {/* Services */}
                <div>
                    <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Services</h4>
                    <ul className="space-y-2 text-sm">
                        <li><Link href='/' className="hover:text-white transition">Property Valuation</Link></li>
                        <li><Link href='/' className="hover:text-white transition">Legal Consulting</Link></li>
                        <li><Link href='/' className="hover:text-white transition">Interior Design</Link></li>
                        <li><Link href='/' className="hover:text-white transition">Agents Program</Link></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Contact</h4>
                    <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-3">
                            
                            <span>Amasaman, Accra, Ghana</span>
                        </li>
                        <li className="flex items-center gap-3">
                            
                            <span>+233 257 182 413</span>
                        </li>
                        <li className="flex items-center gap-3">
                            
                            <span>info@movinglinkstechnology.com</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Copy Right Section */}
            <div className="max-w-7xl mx-auto px-6 pt-8 flex flex-col md:flex-row justify-between items-center tex-xs text-slate-400 gap-4">
                <p>© 2026 Moving Links Tech. All rights reserved.</p>
                <div className="flex gap-6">
                    <Link href='/' className="hover:text-white transition">Privacy Policy</Link>
                    <Link href='/' className="hover:text-white transition">Terms Of Service</Link>
                </div>
            </div>
        </footer>
    );
}