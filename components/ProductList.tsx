import React from 'react';
import { Product, Props } from '@/types/products';
import { useGetProducts } from '@/services/api/products';


const ProductList = ({ addToCart } : Props ) => {
  
  const { data: products, isLoading, error } = useGetProducts()
  
  if (!products) return null
  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error fetching data</div>

  return (
    <>
    { products ? <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {products?.map((product: Product) => (


        <div key={product.id} className="border p-4">
          <h3 className="font-bold text-lg mb-2">{product.name}</h3>
          <p className="mb-2">Selling Price: {product.store_product_properties[0]?.selling_price}</p>
          <p className="mb-2">Stock Quantity: {product.store_product_properties[0]?.stock_quantity}</p>
          <p className="mb-2">Expiration Date: {product.store_product_properties[0]?.expiry_date}</p>

          { !product.is_service && product.variants.length === 0 && (
            <button
              onClick={() => addToCart(product)}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Add to Cart
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