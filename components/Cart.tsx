"use client";
import React from 'react';
import { CartItem, Props  } from '@/types/cartItems';

const Cart = ({ cartItems }: Props ) => {
 
  return (
    <div className="border p-4">
      <h2 className="font-bold text-xl mb-4">Cart</h2>
      <ul>
        {cartItems.map((item: CartItem) => (
          <li key={item.id} className="mb-2">
            {item.name} - Quantity {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;


