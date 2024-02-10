import Cart from "@/components/Cart";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/services/redux/store";

const Checkout = () => {
  const cartItem = useSelector((state: RootState) => state.cart.cart);

  return (
    <>
      <Cart cartItems={cartItem} />
    </>
  );
};

export default Checkout;
