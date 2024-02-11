'use client'
import { useSelector } from 'react-redux'
import { RootState } from '@/services/redux/store'
import Link from 'next/link'

interface Props {
  size: string
}

const CartCountBadge = ({ size }: Props) => {
  const cartItems = useSelector((state: RootState) => state.cart.carts)
  return (
    <div
      className={`absolute bg-red-600 text-white text-[14px] ${size} -right-3 -top-1 rounded-full grid place-items-center`}
    >
      <Link href="/cart"> {cartItems.length} </Link>
    </div>
  )
}

export default CartCountBadge
