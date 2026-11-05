import HeaderPage from "./pages/Header"
import HomePage from "./pages/Home"
import { Route,Routes } from "react-router-dom"
import ShopAllPage from "./pages/ShopAll"
import FavoritesPage from "./pages/Favorites"
import Login from "./pages/Login"
import CartItems from "./pages/Cart"
import CategoryPage from "./pages/Category"
import PageNotFound from "./pages/404"
import Loading from "./components/Loading"

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
      <Route path="/category/:category" element={<CategoryPage/>} />
      <Route path="/*" element={<PageNotFound/>}/>
    </Routes>
      </>
  )
}
export default App