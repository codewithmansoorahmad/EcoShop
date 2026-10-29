import HeaderPage from "./pages/Header"
import HomePage from "./pages/Home"
import { Route,Routes } from "react-router-dom"
import ShopAllPage from "./pages/ShopAll"
import FavoritesPage from "./pages/Favorites"
import NewDealsPage from "./pages/NewDeals"
import NewArrivals from "./pages/NewArrivals"
import Login from "./pages/Login"
import CartItems from "./pages/Cart"
import CategoryPage from "./pages/Category"

function App() {

  return (
    <>
    <HeaderPage />
    <Routes>
      <Route path="" element={<HomePage/>} />
      <Route path="/ShopAll" element={<ShopAllPage/>} />
      <Route path="/Favorites" element={<FavoritesPage/>} />
      <Route path="/Login" element={<Login/>} />
      <Route path="/Cart" element={<CartItems/>} />
      <Route path="/Deals" element={<NewDealsPage/>} />
      <Route path="/NewArrivals" element={<NewArrivals/>} />
      <Route path="/category/:category" element={<CategoryPage/>} />
    </Routes>

      </>
  )
}
export default App