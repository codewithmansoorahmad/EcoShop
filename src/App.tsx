import HeaderPage from "./pages/Header"
import HomePage from "./pages/Home"
import { Route,Routes } from "react-router-dom"
import ShopAllPage from "./pages/ShopAll"
import FavoritesPage from "./pages/Favorites"
import NewDealsPage from "./pages/NewDeals"
import NewArrivals from "./pages/NewArrivals"

function App() {
  return (
    <>
    <HeaderPage />
    <Routes>
      <Route path="" element={<HomePage/>} />
      <Route path="/ShopAll" element={<ShopAllPage/>} />
      <Route path="/Favorites" element={<FavoritesPage/>} />
      <Route path="/Deals" element={<NewDealsPage/>} />
      <Route path="/NewArrivals" element={<NewArrivals/>} />
    </Routes>
      </>
  )
}
export default App