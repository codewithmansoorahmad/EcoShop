
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { NavLink } from "react-router-dom"
import { getCategory } from "../../redux/HeaderSlice"
import { useAppSelector } from "../../redux/Hook"

export default function HeaderLinks() {
    const [isIcon, setIsIcon] = useState<boolean>(false)
    const dispatch=useDispatch()
    const val=useAppSelector((state)=>state.header.category)
    console.log(val)


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
  className="cursor-pointer border-none outline-none -ml-1.25"
  onChange={(e) => {
    dispatch(getCategory(e.target.value))
    setIsIcon(false)

  }}
  
>
  <option className="text-gray-900" value="">
    Categories
  </option>
  <option className="text-gray-900" value="beauty">Beauty</option>
  <option className="text-gray-900" value="fragrances">Fragrances</option>
  <option className="text-gray-900" value="furniture">Furniture</option>
  <option className="text-gray-900" value="groceries">Groceries</option>
  <option className="text-gray-900" value="home-decoration">Home Decoration</option>
  <option className="text-gray-900" value="kitchen-accessories">Kitchen Accessories</option>
  <option className="text-gray-900" value="laptops">Laptops</option>
  <option className="text-gray-900" value="mens-shirts">Men's Shirts</option>
  <option className="text-gray-900" value="mens-shoes">Men's Shoes</option>
  <option className="text-gray-900" value="mens-watches">Men's Watches</option>
  <option className="text-gray-900" value="mobile-accessories">Mobile Accessories</option>
  <option className="text-gray-900" value="motorcycle">Motorcycle</option>
  <option className="text-gray-900" value="skin-care">Skin Care</option>
  <option className="text-gray-900" value="smartphones">Smartphones</option>
  <option className="text-gray-900" value="sports-accessories">Sports Accessories</option>
  <option className="text-gray-900" value="sunglasses">Sunglasses</option>
  <option className="text-gray-900" value="tablets">Tablets</option>
  <option className="text-gray-900" value="tops">Tops</option>
  <option className="text-gray-900" value="vehicle">Vehicle</option>
  <option className="text-gray-900" value="womens-bags">Women's Bags</option>
  <option className="text-gray-900" value="womens-dresses">Women's Dresses</option>
  <option className="text-gray-900" value="womens-jewellery">Women's Jewellery</option>
  <option className="text-gray-900" value="womens-shoes">Women's Shoes</option>
  <option className="text-gray-900" value="womens-watches">Women's Watches</option>
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
