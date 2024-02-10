import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Product, Props } from '@/types/products';
import { useGetProducts } from '@/services/api/products';
import { AiOutlineShopping } from 'react-icons/ai';
import { cartData } from '@/services/redux/features/cartSlice';
import { RootState } from '@/services/redux/store';
import { CartItem } from '@/types/cartItems';



const ProductList = ( ) => {
  
  const { data: products, isLoading, error } = useGetProducts()
  const dispatch = useDispatch();
  const cartItem = useSelector( (state: RootState ) => state.cart.cart);
  const [cartItems, setCartItems] = useState<CartItem[]>(cartItem);
  
  if (!products) return null
  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error fetching data</div>



  const addToCart = (product: Product) => {
    const existingItemIndex = cartItems.findIndex((item) => item.id === product.id);
    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity += 1;
      setCartItems(updatedCartItems);
      console.log(updatedCartItems);
      dispatch(cartData(updatedCartItems));
    } else {
      setCartItems([...cartItems, { id: product.id, name: product.name, quantity: 1 }]);
      console.log(cartItems)
      dispatch(cartData(cartItems));
    }
  };

  return (
    <>
    { products ? <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 pt-8 gap-4">
      {products?.map((product: Product) => (

        <div key={product.id} className="border p-4">
          <h3 className="font-bold text-lg mb-2">{product.name}</h3>
          <p className="mb-2">Selling Price: {product.store_product_properties[0]?.selling_price}</p>
          <p className="mb-2">Stock Quantity: {product.store_product_properties[0]?.stock_quantity}</p>
          <p className="mb-2">Expiration Date: {product.store_product_properties[0]?.expiry_date}</p>

          { !product.is_service && product.variants.length === 0 && (
            <button 
              onClick={() => addToCart(product)}
              className=" bg-accent text-white text-[18px] font-bold py-2 px-4 rounded-full grip place-items-center"
            >
              
              <AiOutlineShopping />
            </button>
          )}
        </div>

          
      ))}
    </div> : <p> Loading...</p>
  }
 </>
  );
};

export default ProductList;