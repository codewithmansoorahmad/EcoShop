export default function HomeCategory(){
    type porduct={
        id:number,
        name:string,
        img:string

    }
    const Products:porduct[]=[
        {id:1,name:"home",img:"/Home.avif"},
        {id:2,name:"sports",img:"/sports.avif"},
        {id:3,name:"cloths",img:"/Cloth.avif"},
        {id:4,name:"beauty",img:"/beauty.avif"},

    ]
    return <div className="sm:px-4 ">
        <h1>Explore our Collection</h1>
        <h2 className="text-xl font-semibold">Shop By category </h2>
        <div>

        </div>

    </div>
}