import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductsByCategory } from "../services/API_Call";
import UsedProducts from "../components/UsedProductsMap";
import Loading from "../components/Loading";


export default function CategoryPage() {
  const { category } = useParams<{ category: string }>();
  const [isLoading,setIsLoading]=useState<boolean>(false)
const [error,setError]=useState()
  const [products, setProducts] = useState([]);

  async function calledCategoryApi() {

    if (!category) return;
    try {
       setIsLoading(false)
    const data = await getProductsByCategory(category);
    setIsLoading(true)
    setProducts(data.products);

    } catch (err) {
      console.log(err)
    }
   
  }

  useEffect(() => {
    calledCategoryApi();
  }, [category]);
console.log(products)
return<>
{!isLoading ?<Loading/>:
<UsedProducts products={products}/>

}
</>
}