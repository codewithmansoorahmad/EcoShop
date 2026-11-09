import { useEffect, useState } from "react"
import { getAllProducts } from "../../services/API_Call"
import type productType from "../../typescript/ProductsType"
import UsedProducts from "../UsedProductsMap"
import Loading from "../Loading"

export default function HomeTopRatedProducts(){
    const [topRatedProducts,setTopRatedProducts]=useState<productType[]>([])
    useEffect(()=>{
async function getTopRatedProducts(){
    const productsAll=await getAllProducts()
    setTopRatedProducts(productsAll)
}
getTopRatedProducts()
    },[])
    console.log(topRatedProducts)
    
    const sortProducts=topRatedProducts.length>0?topRatedProducts.sort((a,b)=>b.rating-a.rating):[];
    const topProducts=sortProducts?.slice(0,5)
    console.log(topProducts)
    

    return <div className="mx-4">
        <h1 className="text-green-900 font-semibold">Top Rated EcoShop Products</h1>
        {topRatedProducts.length>0?<UsedProducts products={topProducts} />:<Loading/>}
    </div>
}