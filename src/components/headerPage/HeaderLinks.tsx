import { NavLink } from "react-router-dom"
export default function HeaderLinks(){
    return <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/">ShopAll</NavLink></li>
        <li><NavLink to="/"><select  >
            <option value="categories">Categories</option>
            <option value="electronics">Electronics</option>
            <option value="cothing">Clothing</option>
            <option value="beauty">Beauty & Personal Care</option>
            <option value="accessories">Accessories</option>
            <option value="home">Home & Living </option>
            <option value="sports">Sports & Fitness</option>
            <option value="stationary">Stationary</option>
            </select></NavLink></li>
        <li><NavLink to="/">New Arrivals</NavLink></li>
        <li><NavLink to="/">New Deals</NavLink></li>
    </ul>
}