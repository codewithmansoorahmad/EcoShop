import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductsByCategory } from "../services/API_Call";


export default function CategoryPage() {
  const { category } = useParams<{ category: string }>();

  const [products, setProducts] = useState([]);

  async function calledCategoryApi() {
    if (!category) return;

    const data = await getProductsByCategory(category);
    setProducts(data.products);
  }

  useEffect(() => {
    calledCategoryApi();
  }, [category]);


  return (
    <div>
    </div>
  );
}