import HomeCategory from "../components/homePage/HomeCategory";
import HomeHero from "../components/homePage/HomeHero";
import HomeTopRatedProducts from "../components/homePage/HomeTopRated";

export default function HomePage(){
    return <div className="px-5 py-3">
        <HomeHero/>
        <HomeCategory/>
        <HomeTopRatedProducts/>
    </div>
}