export interface CartItem {
    id: number;
    name: string;
    quantity: number;
}

export interface Props {
    cartItems: CartItem[];
}

export interface InitialState {
    currentCartItem: {
      data: CartItem
    } | null
  }