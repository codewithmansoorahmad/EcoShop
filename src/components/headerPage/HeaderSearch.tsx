import { Search } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { getInput } from "../../redux/HeaderSlice";
import { useAppSelector } from "../../redux/Hook";

export default function HeaderSearch(){
    const dispatch=useDispatch()
    const val=useAppSelector((state)=>state.header.inputVal)
    console.log(val)
    return <div className="relative px-5 ">
        <span className="absolute top-4 left-7 "><Search strokeWidth={1.5} className="text-gray-500" size={18}/></span>
        <input type="text" onChange={(e)=>dispatch(getInput(e.target.value))} className="border-2 px-8  border-gray-300 rounded-lg focus:border-green-600 w-full h-12 focus:outline-none" placeholder="Search products" />
    </div>
}