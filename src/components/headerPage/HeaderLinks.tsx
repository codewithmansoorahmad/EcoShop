
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { NavLink } from "react-router-dom"

export default function HeaderLinks() {
    const [isIcon, setIsIcon] = useState<boolean>(false)

    return (
        <div className="relative mx-5 my-3 rounded-md py-2 px-2 bg-green-800 text-white">
            <button
                className="sm:hidden cursor-pointer"
                onClick={() => setIsIcon(!isIcon)}
                aria-label={isIcon ? "Close menu" : "Open menu"}
            >
                {isIcon ? <X size={24} /> : <Menu size={24} />}
            </button>

            <ul
                className={`${isIcon ? "absolute left-5 top-full z-50 text-gray-800 sm:text-white flex w-52 flex-col items-start gap-4 rounded-lg border border-gray-200 bg-white p-4 shadow-lg" : "hidden"} sm:static sm:flex sm:w-auto sm:flex-row sm:items-center sm:justify-center sm:gap-6 sm:border-0 sm:bg-transparent sm:p-0 sm:shadow-none`}
            >
                <li>
                    <NavLink to="/" onClick={() => setIsIcon(false)}>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/ShopAll" onClick={() => setIsIcon(false)}
                    >Shop All</NavLink>
                </li>
                <li>
                    <select
   className="cursor-pointer border-none outline-none -ml-1.25 "
                        onChange={() => setIsIcon(false)}
                    >
                        <option className="text-gray-900"  value="categories" >Categories</option>
                        <option className="text-gray-900" value="electronics">Electronics</option>
                        <option className="text-gray-900" value="clothing">Clothing</option>
                        <option className="text-gray-900" value="beauty">Beauty</option>
                        <option className="text-gray-900" value="accessories">Accessories</option>
                        <option className="text-gray-900" value="home">Home</option>
                        <option className="text-gray-900" value="sports">Sports</option>
                        <option className="text-gray-900" value="fitness">Fitness</option>
                        <option className="text-gray-900" value="stationery">Stationery</option>
                    </select>
                </li>
                <li>
                    <NavLink to="/NewArrivals" onClick={() => setIsIcon(false)}>New Arrivals</NavLink>
                </li>
                <li>
                    <NavLink to="Deals/" onClick={() => setIsIcon(false)}>New Deals</NavLink>
                </li>
            </ul>
        </div>
    )
}
