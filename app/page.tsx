'use client'
import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import ProductList from '@/components/ProductList';
import Cart from '@/components/Cart';
import { CartItem } from '@/types/cartItems';
import { Product } from '@/types/products';
import Navbar from '@/components/Navbar';

const queryClient = new QueryClient();

const App = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    const existingItemIndex = cartItems.findIndex((item) => item.id === product.id);
    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity += 1;
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { id: product.id, name: product.name, quantity: 1 }]);
    }
  };

  return (
   
    <QueryClientProvider client={queryClient}>
      <main>
      <Navbar />
      </main>
     
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2">
            <ProductList addToCart={addToCart} />
          </div>
          <div>
            <Cart cartItems={cartItems} />
          </div>
        </div>
      </div>
    </QueryClientProvider>
  );
};

export default App;