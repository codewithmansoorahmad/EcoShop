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
console.log(products)

  return (
    <div>

   {
  products.map((item: {
    id: number;
    title: string;
    thumbnail: string;
    price: number;
    discountPercentage: number;
    rating: number;
    brand: string;
    category: string;
    availabilityStatus: string;
    stock: number;
  }) => {
    return (
      <div key={item.id}>
        <img src={item.thumbnail} alt={item.title} />
        <h3>{item.title}</h3>
        <p>{item.brand}</p>
        <p>{item.category}</p>
        <p>{item.price}</p>
        <p>{item.discountPercentage}% OFF</p>
        <p>{item.rating} ⭐</p>
        <p>{item.availabilityStatus}</p>
        <button>Add to Cart</button>
      </div>
    );
  })
}

    </div>
  );
}