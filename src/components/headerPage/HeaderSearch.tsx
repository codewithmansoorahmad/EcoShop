import { Search } from "lucide-react";

export default function HeaderSearch(){
    return <div className="relative px-5 ">
        <span className="absolute top-3 left-7 "><Search strokeWidth={1.5} className="text-gray-500" size={18}/></span>
        <input type="text" className="border-2 px-8  border-gray-300 rounded-lg focus:border-green-600 w-full h-10 focus:outline-none" placeholder="Search products" />
    </div>
}