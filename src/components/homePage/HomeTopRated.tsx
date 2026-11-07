import { useEffect, useState } from "react"
import { getAllProducts } from "../../services/API_Call"
import type productType from "../../typescript/ProductsType"

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
    
    const sortProducts=topRatedProducts.length>0?topRatedProducts.sort((a,b)=>b.rating-a.rating):"not sorted"
    console.log(sortProducts)
    console.log(topRatedProducts)

    return <div>
        <h1>Top Rated Products</h1>
    </div>
}