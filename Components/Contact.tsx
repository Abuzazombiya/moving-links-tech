// 'use client'
// import { LocationEditIcon, Mail, PhoneCallIcon } from "lucide-react";
// import { useState } from "react";


// export function Contact() {

//     const [formData, setFormData] = useState({
//         name: '',
//         phone: '',
//         email: '',
//         service: 'cctv',
//         message: ''
//     });

//     const handleChange = (e) = {
//         setFormData({...formData, [e.target.name]: e.target.value});
//     }

//     const handleWhatsAppSubmit = (e) => {
//         e.preventDefault();

//         const receiverPhone = '233246795904';

//         const text = `*New Website Quote Request*%0A%0A` +
//         `*Name:* ${formData.name}%0A` +
//         `*Phone:* ${formData.phone}%0A` +
//         `*Email:* ${formData.email}%0A` +
//         `*Service:* ${formData.service}&0A` +
//         `*Message:* ${formData.message}%0A`;

//         const waUrl = `http://wa.me/${receiverPhone}?text=${text}`;

//         window.open(waUrl, '_blank');
//     }

//     return (
//         <main className="font-serif w-full my-10" id="contact">
//             <div className="items-center justify-center flex gap-3">
//             <div className="w-20 border border-blue-900"></div>
//                 <h1 className="text-xl md:text-3xl tracking-wider md:tracking-wider font-bold text-orange-500 uppercase">Contact Us</h1>
//              <div className="w-20 border border-blue-900"></div>
//             </div>

//             <div className="grid md:grid-cols-2 m-5 gap-5">
//                 <form onSubmit={handleWhatsAppSubmit} className="px-5 bg-blue-100 shadow-b shadow-lg flex flex-col gap-3 p-8 rounded-2xl">
//                     <h1 className="text-3xl text-blue-900 text-center font-bold">GET A FREE QUOTE.</h1>
//                     <input type="text" placeholder="Your Name" className="p-3 border border-blue-900 focus-within:outline-blue-400 rounded-2xl  transition-all text-lg text-gray-600 bg-gray-200" />
//                     <input type="email" placeholder="Email Address" className="p-3 border border-blue-900 focus-within:outline-blue-400 rounded-2xl  transition-all text-lg text-gray-600 bg-gray-200" />
//                     <input type="tel" placeholder="Phone Number" className="p-3 border border-blue-900 focus-within:outline-blue-400 rounded-2xl  transition-all text-lg text-gray-600 bg-gray-200" />

//                     <label htmlFor="" className="text-xl text-blue-900">Service of Interest</label>
//                     <select name="" id="" className="p-3 cursor-pointer transition-all border border-blue-900 focus-within:outline-blue-400 rounded-xl bg-gray-200">
//                         <option value="cctv" className="text-blue-900 transition bg-blue-300" >CCTV</option>
//                         <option value="starlink" className="text-blue-900 transition bg-blue-300" >Starlink</option>
//                         <option value="electrical" className="text-blue-900 transition bg-blue-300" >General Electrical</option>
//                     </select>
//                     <textarea name="" id="" placeholder="Your Optional Message" className="p-3 border border-blue-900 focus-within:outline-blue-400 text-lg bg-gray-2 bg-gray-200 rounded-2xl"></textarea>

//                     <button type="submit" className="px-5 py-2 bg-orange-500 cursor-pointer text-xl text-gray-100 active:scale-95 uppercase rounded-xl">Send Message</button>
//                 </form>

//                 <div className="px-5 bg-blue-100 shadow-b shadow-lg flex flex-col gap-3 p-8 rounded-2xl items-center justify-center">
//                     <h1 className="text-3xl text-blue-900 text-center font-bold">OUR DETAILS.</h1>
                    
//                     <div className="flex flex-col gap-2 text-blue-900 items-center justify-center text-center">
//                         <div className="bg-orange-500 rounded-full items-center justify-center p-5"><PhoneCallIcon size={50} /></div>

//                         <h1 className="text-2xl text-orange-500">Phone:</h1>
//                         <p className="text-xl">+233246795904 /</p>
//                         <p className="text-xl">+233243405413</p>
//                     </div>
//                     <div className="flex flex-col gap-2 text-blue-900 items-center justify-center text-center">
//                         <div className="bg-orange-500 rounded-full items-center justify-center p-5"><Mail size={50} /></div>

//                         <h1 className="text-2xl text-orange-500">Email:</h1>
//                         <p className="text-xl">akatem9@gamail.com</p>
//                     </div>
//                     <div className="flex flex-col gap-2 text-blue-900 items-center justify-center text-center">
//                         <div className="bg-orange-500 rounded-full items-center justify-center p-5"><LocationEditIcon size={50} /></div>

//                         <h1 className="text-2xl text-orange-500">Location:</h1>
//                         <p className="text-xl">Sackey Ansah Road, Accra, Ghana</p>
//                     </div>
                    
//                 </div>
//             </div>
//         </main>
//     )
// }

'use client'
import { LocationEditIcon, Mail, PhoneCallIcon } from "lucide-react";
import React, { useState } from "react";


export function Contact() {

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        service: 'cctv',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleWhatsAppSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const receiverPhone = '233246795904';

        const text = `Hello! New quote request from website.\n\n` +
            `👤 Name: ${formData.name}\n` +
            `📞 Phone: ${formData.phone}\n` +
            `📧 Email: ${formData.email}\n` +
            `🛠️ Service: ${formData.service}\n` +
            `💬 Message: ${formData.message || 'No message provided'}\n\n` +
            `Please get back to me soon. Thanks!`;

        const waUrl = `https://wa.me/${receiverPhone}?text=${encodeURIComponent(text)}`;

        window.open(waUrl, '_blank');
    }

    return (
        <main className="font-serif w-full my-10" id="contact">
            <div className="items-center justify-center flex gap-3">
                <div className="w-20 border border-blue-900"></div>
                <h1 className="text-xl md:text-3xl tracking-wider md:tracking-wider font-bold text-orange-500 uppercase">Contact Us</h1>
                <div className="w-20 border border-blue-900"></div>
            </div>

            <div className="grid md:grid-cols-2 m-5 gap-5">
                <form onSubmit={handleWhatsAppSubmit} className="px-5 bg-blue-100 shadow-b shadow-lg flex flex-col gap-3 p-8 rounded-2xl">
                    <h1 className="text-3xl text-blue-900 text-center font-bold">GET A FREE QUOTE.</h1>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        className="p-3 border border-blue-900 focus-within:outline-blue-400 rounded-2xl transition-all text-lg text-gray-600 bg-gray-200"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email Address"
                        className="p-3 border border-blue-900 focus-within:outline-blue-400 rounded-2xl transition-all text-lg text-gray-600 bg-gray-200"
                        required
                    />
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone Number"
                        className="p-3 border border-blue-900 focus-within:outline-blue-400 rounded-2xl transition-all text-lg text-gray-600 bg-gray-200"
                        required
                    />

                    <label htmlFor="service" className="text-xl text-blue-900">Service of Interest</label>
                    <select
                        name="service"
                        id="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="p-3 cursor-pointer transition-all border border-blue-900 focus-within:outline-blue-400 rounded-xl bg-gray-200"
                        required
                    >
                        <option value="CCTV Security" className="text-blue-900 transition bg-blue-300">CCTV Security</option>
                        <option value="Starlink Installation" className="text-blue-900 transition bg-blue-300">Starlink Installation</option>
                        <option value="Solar Systems" className="text-blue-900 transition bg-blue-300">Solar Systems</option>
                        <option value="General Electrical" className="text-blue-900 transition bg-blue-300">General Electrical</option>
                        <option value="Networking & PABS" className="text-blue-900 transition bg-blue-300">Networking & PABS</option>
                    </select>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your Optional Message"
                        className="p-3 border border-blue-900 focus-within:outline-blue-400 text-lg bg-gray-200 rounded-2xl"
                    ></textarea>

                    <button type="submit" className="px-5 py-2 bg-orange-500 cursor-pointer text-xl text-gray-100 active:scale-95 uppercase rounded-xl">Send Message</button>
                </form>

                <div className="px-5 bg-blue-100 shadow-lg flex flex-col gap-6 p-8 rounded-2xl items-center justify-center">
                    <h1 className="text-3xl text-blue-900 text-center font-bold mb-4">GET IN TOUCH</h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                        <div className="flex flex-col items-center justify-center text-center bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="bg-orange-500 rounded-full p-4 mb-4">
                                <PhoneCallIcon size={40} className="text-white" />
                            </div>
                            <h2 className="text-xl font-semibold text-blue-900 mb-2">Phone</h2>
                            <p className="text-gray-700">+233 246 795 904</p>
                            <p className="text-gray-700">+233 243 405 413</p>
                        </div>

                        <div className="flex flex-col items-center justify-center text-center bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="bg-orange-500 rounded-full p-4 mb-4">
                                <Mail size={40} className="text-white" />
                            </div>
                            <h2 className="text-xl font-semibold text-blue-900 mb-2">Email</h2>
                            <p className="text-gray-700">akatem9@gmail.com</p>
                        </div>

                        <div className="flex flex-col items-center justify-center text-center bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="bg-orange-500 rounded-full p-4 mb-4">
                                <LocationEditIcon size={40} className="text-white" />
                            </div>
                            <h2 className="text-xl font-semibold text-blue-900 mb-2">Location</h2>
                            <p className="text-gray-700">Sackey Ansah Road</p>
                            <p className="text-gray-700">Accra, Ghana</p>
                        </div>

                        <div className="flex flex-col items-center justify-center text-center bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="bg-orange-500 rounded-full p-4 mb-4">
                                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h2 className="text-xl font-semibold text-blue-900 mb-2">Business Hours</h2>
                            <p className="text-gray-700">Mon - Fri: 8:00 AM - 6:00 PM</p>
                            <p className="text-gray-700">Sat: 9:00 AM - 4:00 PM</p>
                            <p className="text-gray-600 text-sm">Sun: Closed</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}