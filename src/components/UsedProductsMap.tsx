import { Heart } from "lucide-react";
import type productType from "../typescript/ProductsType";
interface typeProducts{
    products:productType[]
}
export default function UsedProducts({products}:typeProducts){
    return <>
    return (
    <div className="grid ">

   {
  products.map((item: productType) => {
    return (
      <div key={item.id} 
      className="flex flex-col w-70 bg-gray-200 "
       >
        <button><Heart/></button>
        <div>

        <img src={item.thumbnail} alt={item.title} />
        </div>
<div>

        <h3>{item.title}</h3>
        <p>{item.brand}</p>
        <p>{item.category}</p>
        <p>{item.price}</p>
        <p>{item.discountPercentage}% OFF</p>
        <p>{item.rating} ⭐</p>
        <p>{item.availabilityStatus}</p>
        <button>Add to Cart</button>
</div>

      </div>
    );
  })
}

    </div>
  );
    </>
}