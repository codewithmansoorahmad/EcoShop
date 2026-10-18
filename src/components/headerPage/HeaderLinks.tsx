
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { NavLink } from "react-router-dom"

export default function HeaderLinks() {
    const [isIcon, setIsIcon] = useState(false)

    return (
        <div className="relative px-5 py-3">
            <button
                className="sm:hidden cursor-pointer"
                onClick={() => setIsIcon(!isIcon)}
                aria-label={isIcon ? "Close menu" : "Open menu"}
            >
                {isIcon ? <X size={24} /> : <Menu size={24} />}
            </button>

            <ul
                className={`${isIcon ? "absolute left-5 top-full z-50 flex w-52 flex-col items-start gap-4 rounded-lg border border-gray-200 bg-white p-4 shadow-lg" : "hidden"} sm:static sm:flex sm:w-auto sm:flex-row sm:items-center sm:justify-center sm:gap-6 sm:border-0 sm:bg-transparent sm:p-0 sm:shadow-none`}
            >
                <li>
                    <NavLink to="/" onClick={() => setIsIcon(false)}>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/" onClick={() => setIsIcon(false)}>Shop All</NavLink>
                </li>
                <li>
                    <select
                        className=" -ml-1.25 cursor-pointer bg-transparent  outline-none"
                        defaultValue="categories"
                        onChange={() => setIsIcon(false)}
                    >
                        <option value="categories" >Categories</option>
                        <option value="electronics">Electronics</option>
                        <option value="clothing">Clothing</option>
                        <option value="beauty">Beauty</option>
                        <option value="accessories">Accessories</option>
                        <option value="home">Home</option>
                        <option value="sports">Sports</option>
                        <option value="fitness">Fitness</option>
                        <option value="stationery">Stationery</option>
                    </select>
                </li>
                <li>
                    <NavLink to="/" onClick={() => setIsIcon(false)}>New Arrivals</NavLink>
                </li>
                <li>
                    <NavLink to="/" onClick={() => setIsIcon(false)}>New Deals</NavLink>
                </li>
            </ul>
        </div>
    )
}
