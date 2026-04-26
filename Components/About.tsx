import { Eye, GraduationCap, LucideBowArrow, LucidePackageX, Star } from "lucide-react";


export default function About() {
    return(
        <main className="font-serif w-full" id="about">
            <div className="items-center justify-center flex gap-3">
            <div className="w-20 border border-blue-900"></div>
                <h1 className="text-2xl md:text-3xl tracking-tighter md:tracking-wider font-bold text-orange-500 uppercase">About Us</h1>
             <div className="w-20 border border-blue-900"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-5 px-5 items-center justify-center">
                <div>
                <h1 className="text-4xl my-5 text-center tracking-widest font-bold text-blue-900 uppercase">Our foundation, <br /> Our values.</h1>
                <p className="text-left text-lg">Moving Links Technology history, founded by Muhammad Akati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, suscipit sed doloremque aliquid molestias corrupti rem provident libero dolore ab animi a dolorem. Neque debitis distinctio, vero numquam ea ratione! Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quos sint sequi ab eligendi asperiores. Praesentium illo soluta aperiam facere neque, doloribus, fugiat eaque quasi cumque est incidunt ab aut! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti officiis illo enim?</p> 
                <p className="text-left text-lg my-5"> Molestiae voluptatibus inventore sint id. Sunt, architecto! Dolorem rem rerum soluta doloribus nobis natus iste, consequuntur asperiores a? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi earum ad adipisci reiciendis delectus nostrum, sequi fugiat, quas tempore autem vitae nihil vero iste architecto? Neque hic consectetur cupiditate est.</p>

                <div className="flex flex-col gap-10 text-blue-900 px-5">
                    <div>
                        <h1 className="flex gap-2 text-3xl font-bold"><LucideBowArrow size={30} className="mt-1"/> Our Mission</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, quam! Qui, vel cupiditate aut voluptatum aspernatur quas. Similique rem cum temporibus suscipit aliquam molestiae, vero beatae autem, sapiente atque eveniet!</p>
                    </div>
                    <div>
                        <h1 className="flex gap-2 text-3xl font-bold"><Eye size={30} className="mt-1"/> Our Vision</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, quam! Qui, vel cupiditate aut voluptatum aspernatur quas. Similique rem cum temporibus suscipit aliquam molestiae, vero beatae autem, sapiente atque eveniet!</p>
                    </div>
                    <div>
                        <h1 className="flex gap-2 text-3xl font-bold"><GraduationCap size={30} className="mt-1"/> Our Core Values</h1>
                        <ul className="list-disc">
                            <li>Lorem ipsum dolor sit.</li>
                            <li>Lorem ipsum dolor sit amet.</li>
                            <li>Lorem ipsum dolor.</li>
                            <li>Lorem ipsum dolor sit amet.</li>
                        </ul>
                    </div>
                </div>
                </div>

                <div className="flex flex-col gap-5 items-center justify-center px-5 mt-5">
                    <div className="shadow-b shadow-blue-300 p-3 rounded-2xl bg-blue-200 shadow-lg w-full md:w-100">
                        <img src="assets\2025_11_15_21_42_IMG_2261.JPG" alt="Picture of Muhammed Akati" className="w-full rounded-2xl md:h-120 md:w-100 object-cover" />

                        <h1 className="text-3xl text-blue-900">Muhammad Akati</h1>
                        <p className="py-3">Founder, Managing Director</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi beatae sunt, dolores non suscipit at doloremque, commodi expedita quis repudiandae natus neque. Deleniti quo, ut voluptatem iure numquam nemo voluptatibus.</p>
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