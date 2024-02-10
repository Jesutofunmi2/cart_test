import { useSelector } from "react-redux"
import { cartData } from '@/services/redux/features/cartSlice';
import { RootState } from "@/services/redux/store";
import { Link } from "react-router-dom";

interface Props {
    size : string
}

const CartCountBadge = ({size}: Props) => {
    const cartItem = useSelector( (state: RootState ) => state.cart.cart)
  return  <div className={`absolute bg-red-600 text-white text-[14px] ${size} -right-3 -top-1 rounded-full grid place-items-center`}>
    <Link to="/checkout">{ cartItem.length }</Link> 
  </div>
}

export default CartCountBadge