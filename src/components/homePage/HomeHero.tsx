import { ArrowRight } from "lucide-react";

export default function HomeHero(){
    return <div className="sm:flex-row flex flex-col gap-3  ">
        <div className="flex justify-center gap-2 text-gray-800  flex-col sm:px-4 ">
<h1>Sustainable Living.</h1>
            <h2 className="text-black text-xl font-semibold">Greener Life starts .</h2>
            <p>Discover Best Products through EcoShop and make Your life Greener.   </p>
            <button className="bg-[#245C3A] hover:bg-[#1B472C] cursor-pointer py-2 flex items-center justify-center text-white rounded-sm ">Explore Products <span><ArrowRight size={18}/></span></button>
        </div>
        <div>
            <img src="/Hero.avif" alt="" className="rounded-sm md:h-92"/>
        </div>
    </div>
}