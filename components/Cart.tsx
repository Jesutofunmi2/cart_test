'use client'
import {
  addTocartData,
  clearCart,
  decreaseCart,
  getTotals,
  removeFromCart,
} from '@/services/redux/features/cartSlice'
import { RootState } from '@/services/redux/store'
import { CartItem } from '@/types/cartItems'
import { useEffect } from 'react'
import { AiOutlineClear, AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { useSelector, useDispatch } from 'react-redux'

const Cart = () => {
  const { carts, totalAmount } = useSelector((state: RootState) => state.cart)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTotals(carts))
  }, [carts, dispatch])

  return (
    <>
      <div className="container border p-4 mx-auto">
        <h2 className="font-bold text-xl mb-4">Shopping Cart</h2>
        {carts.length === 0 ? (
          <div className="cart-empty">
            <p>Your cart is currently empty</p>
          </div>
        ) : (
          <div className="container border p-4 mx-auto">
            {carts.map((item: CartItem) => (
              <div key={item.id}>
                <div className="bg-[#fff] max-w-[800px] mx-auto mt-4 py-2 px-6 flex gap-3 items-center justify-between">
                  <div className="font-bold text-2xl">{item.name}</div>

                  <div>
                    <div className="font-bold text-2xl">{item.price}</div>
                    <div className="flex gap-1 items-center justify-between">
                      Qty: <AiOutlineMinus onClick={() => dispatch(decreaseCart(item))} />{' '}
                      {item.quantity}{' '}
                      <AiOutlinePlus onClick={() => dispatch(addTocartData(item))} />
                    </div>
                  </div>

                  <div className="text-3xl font-bold">#{item.price * item.quantity}</div>

                  <button
                    onClick={() => dispatch(removeFromCart(item))}
                    className=" bg-accent text-white text-[18px] font-bold py-2 px-4 rounded-full grip place-items-center"
                  >
                    <AiOutlineClear />
                  </button>
                </div>
              </div>
            ))}

            <h2 className="text-right text-3xl font-bold">Total: #{totalAmount}</h2>
            <button
              className="text-right bg-red-600 text-white py-4 px-12 mt-4 block mx-auto hover:bg-red-800"
              onClick={() => dispatch(clearCart(carts))}
            >
              Clear
            </button>
          </div>
        )}
      </div>
    </>
  )
}

export default Cart
