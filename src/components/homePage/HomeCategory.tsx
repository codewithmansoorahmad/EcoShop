export default function HomeCategory() {
    type porduct = {
        id: number,
        name: string,
        img: string
    }

    const products: porduct[] = [
        { id: 1, name: "Home", img: "/Home.avif" },
        { id: 2, name: "Sports", img: "/sports.avif" },
        { id: 3, name: "Cloths", img: "/Cloth.avif" },
        { id: 4, name: "Beauty", img: "/beauty.avif" },
        { id: 5, name: "Accessories", img: "/Accessories.avif" },
        { id: 6, name: "Stationary", img: "/Stationary.avif" },
        { id: 7, name: "Electronics", img: "/Electronics.avif" },
        { id: 7, name: "Fitness", img: "/Fitness.avif" },
    ]
    return (
        <div className="px-4 py-8">
            <h1 className="text-sm text-green-700 font-medium">
                Explore our Collection
            </h1>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Shop By Category
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {products.map((item) => (
                    <div
                        key={item.id}
                        className="flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md"
                    >
                        <img
                            className="w-full h-36 sm:h-44 object-cover"
                            src={item.img}
                            alt={item.name}
                        />

                        <p className="p-3 text-center font-semibold text-gray-800">
                            {item.name}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}