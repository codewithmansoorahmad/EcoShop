import { Heart } from "lucide-react";
import type productType from "../typescript/ProductsType";
interface typeProducts{
    products:productType[]
}
export default function UsedProducts({products}:typeProducts){
    return (
    <div className="grid ">

   {
  products.map((item: productType) => {
    return (
      <div key={item.id} 
      className="flex flex-col w-70 border  rounded-md py-2   relative px-3 mx-20 "
       >
        <div className="bg-[#F0F1EB]">
        <button className="right-4 top-4  cursor-pointer size-8 bg-white flex items-center justify-center rounded-full  absolute "><Heart size={16}/></button>

        <img src={item.thumbnail} alt={item.title} className="rounded-md " />
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
}