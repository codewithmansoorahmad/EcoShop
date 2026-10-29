const URL="https://dummyjson.com/products";

export async function getAllProducts(){
    const response=await fetch(URL)
    const data =await response.json()
    return data.products
}


export async function getProductsByCategory(category:string|undefined){
    const response=await fetch(URL+"/category/"+category)
    const data=response.json()
    return data
}
