import { ArrowLeft } from "lucide-react"
import UsedProducts from "../components/UsedProductsMap"
import { useAppSelector } from "../redux/Hook"
import { useNavigate } from "react-router-dom"

export default function FavoritesPage(){
    const favorite=useAppSelector((state)=>state.favorites.favoriteProducts)
    console.log(favorite)
    const navigate=useNavigate()
    return <div className="mx-4">
        {
            favorite.length>0?
            <>
        <h1  className="my-2 text-green-800 font-semibold">Products you favorited. </h1>
        <UsedProducts products={favorite} />
        </>:
        <>
        <p>No Favorite Products added.</p>
        <button onClick={()=>{navigate("/")}} className="bg-green-800 text-white  rounded-md px-3 py-2 flex justify-center items-center  "><ArrowLeft size={18}/> <span>Home</span> </button>
        </>
}
    </div>
}