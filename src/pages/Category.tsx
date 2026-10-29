import { useParams } from "react-router-dom";
import { useAppSelector } from "../redux/Hook";

export default function CategoryPage(){
  const {category}=useParams()

    return <div>
        <h1>{category}</h1>
    </div>
}