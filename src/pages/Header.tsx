import HeaderHead from "../components/headerPage/HeaderHead";
import HeaderLinks from "../components/headerPage/HeaderLinks";
import HeaderNav from "../components/headerPage/HeaderNav";
import HeaderSearch from "../components/headerPage/HeaderSearch";

export default function HeaderPage(){
    return <div>

        <HeaderHead/>
        <HeaderNav/>
        <HeaderSearch/>
        <HeaderLinks/>
    </div>
}