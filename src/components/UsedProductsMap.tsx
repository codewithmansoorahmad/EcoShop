
import { Heart } from "lucide-react";
import type productType from "../typescript/ProductsType";
import { useDispatch } from "react-redux";
import { addFavorites } from "../redux/FavoriteSlice";

interface typeProducts {
  products: productType[];
}
export default function UsedProducts({ products }: typeProducts) {
const dispatch=useDispatch();

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
      {products.map((item: productType) => {
        return (
          <div
            key={item.id}
            className="group flex flex-col relative overflow-hidden rounded-2xl border border-[#E5EAE3] bg-white p-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="relative flex h-40 sm:h-52 items-center justify-center overflow-hidden rounded-xl bg-[#F0F1EB] p-3">
              <button className="absolute right-3 cursor-pointer top-3 z-10 flex size-9 items-center justify-center rounded-full bg-white text-[#245C3A] shadow-sm transition-colors hover:bg-[#245C3A] hover:text-white"
onClick={()=>dispatch(addFavorites(item))}
              >
                <Heart size={18} />
              </button>

              <img
                src={item.thumbnail}
                alt={item.title}
                className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-110"
              />

              <span className="absolute bottom-2 left-2 rounded-full bg-[#245C3A] px-2 py-1 text-[10px] font-semibold text-white">
                {item.discountPercentage}% OFF
              </span>
            </div>

            <div className="flex flex-1 flex-col gap-2 pt-3">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-[#829080]">
                {item.category}
              </p>

              <h3 className="line-clamp-2 text-sm font-bold text-gray-800 sm:text-base">
                {item.title}
              </h3>

              <p className="truncate text-xs text-gray-500">
                {item.brand?`Brand: ${item.brand}`:"Brand: N/A"}
              </p>

              <div className="flex items-center justify-between gap-1">
                <p className="text-lg font-bold text-[#245C3A]">
                  ${item.price}
                </p>
                <p className="text-xs font-medium text-amber-500">
                  ⭐ {item.rating}
                </p>
              </div>

              <p className="text-xs text-gray-500">
                {item.availabilityStatus}
              </p>

              <button className="mt-auto w-full rounded-lg bg-[#245C3A] py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#1B472C]">
                Add to Cart
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
