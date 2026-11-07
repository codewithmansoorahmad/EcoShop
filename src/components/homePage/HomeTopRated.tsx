import { useEffect, useState } from "react"
import { getAllProducts } from "../../services/API_Call"

export default function HomeTopRatedProducts(){
    const [topRatedProducts,setTopRatedProducts]=useState()
    useEffect(()=>{
async function getTopRatedProducts(){
    const productsAll=await getAllProducts()
    setTopRatedProducts(productsAll)
}
getTopRatedProducts()
    },[])
    console.log(topRatedProducts)
    
    return <div>
        <h1>Top Rated Products</h1>
    </div>
}