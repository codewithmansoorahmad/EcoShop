import { Heart, Leaf,  ShoppingBag,  User } from "lucide-react";

export default function HeaderNav(){
    return <div className="flex justify-between items-center px-5 py-4">
<div>
   <h1 className="flex items-center text-2xl font-semibold gap-1"> <span><Leaf className=" text-green-700 text-xs"/></span> EcoShop</h1>
</div>
<div className=" flex gap-3 ">
    <span className=" p-2   rounded-md cursor-pointer bg-gray-100">< User strokeWidth={1.5} className="size-5  sm:size-6"/></span>
    <span className=" p-2  rounded-md cursor-pointer bg-gray-100">< Heart strokeWidth={1.5} className="size-5  sm:size-6"/></span>
    <span className=" p-2 cursor-pointer rounded-md  bg-gray-100">< ShoppingBag strokeWidth={1.5} className="size-5 sm:size-6"/></span>
</div>
    </div>
}
