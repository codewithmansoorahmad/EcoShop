import { useAppSelector } from "../redux/Hook"

export default function FavoritesPage(){
    const favorite=useAppSelector((state)=>state.favorites.favoriteProducts)
    console.log(favorite)
    return <div className="mx-4">
        <h1 className="text-green-800 font-semibold">Products you favorited. </h1>
    </div>
}