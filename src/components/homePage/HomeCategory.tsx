export default function HomeCategory(){
    type porduct={
        id:number,
        name:string,
        img:string

    }
    const products:porduct[]=[
        {id:1,name:"Home",img:"/Home.avif"},
        {id:2,name:"Sports",img:"/sports.avif"},
        {id:3,name:"Cloths",img:"/Cloth.avif"},
        {id:4,name:"Beauty",img:"/beauty.avif"},

    ]
    return <div className="sm:px-4 ">
        <h1>Explore our Collection</h1>
        <h2 className="text-xl font-semibold">Shop By category </h2>
        <div className="grid grid-cols-4 gap-2 ">
            {
                products.map((item)=>{
                    return <div key={item.id} className="  h-48 rounded-md shadow border-2 border-red-500 bg-white  ">
                        <img className="md:w-60  h-40 object-cover rounded-md " src={item.img} alt="" />
                        <p>{item.name}</p>
                    </div>
           })
            }
        </div>

    </div>
}