const URL="https://dummyjson.com/products";

export async function getAllProducts(){
    const response=await fetch(URL)
    const data =await response.json()
    return data.products

    
}