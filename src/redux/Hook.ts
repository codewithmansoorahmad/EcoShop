import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "./Store";

export const useAppSelector=useSelector.withTypes<RootState>()
