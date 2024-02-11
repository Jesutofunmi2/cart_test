import { useDispatch } from 'react-redux'
import { Product } from '@/types/products'
import { useGetProducts } from '@/services/api/products'
import { AiOutlineShopping } from 'react-icons/ai'
import { addTocartData } from '@/services/redux/features/cartSlice'

const ProductList = () => {
  const { data: products, isLoading, error } = useGetProducts()
  const dispatch = useDispatch()

  if (!products) return null
  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error fetching data</div>

  return (
    <>
      {products ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 pt-8 gap-4">
          {products?.map(
            (product: Product) =>
              !product.is_service &&
              product.variants.length === 0 && (
                <div key={product.id} className="border p-4">
                  <h3 className="font-bold text-lg mb-2">{product.name}</h3>
                  <p className="mb-2">
                    Selling Price: {product.store_product_properties[0]?.selling_price}
                  </p>
                  <p className="mb-2">
                    Stock Quantity: {product.store_product_properties[0]?.stock_quantity}
                  </p>
                  <p className="mb-2">
                    Expiration Date: {product.store_product_properties[0]?.expiry_date}
                  </p>

                  <button
                    onClick={() => dispatch(addTocartData(product))}
                    className=" bg-accent text-white text-[18px] font-bold py-2 px-4 rounded-full grip place-items-center"
                  >
                    <AiOutlineShopping />
                  </button>
                </div>
              )
          )}
        </div>
      ) : (
        <p> Loading...</p>
      )}
    </>
  )
}

export default ProductList
