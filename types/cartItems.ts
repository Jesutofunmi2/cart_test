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

  export interface Count {
    count: any[]
}

export interface CartState {
    cartItems: CartItem[];
  }
  
  export enum CartActionTypes {
    ADD_TO_CART = 'ADD_TO_CART',
    REMOVE_FROM_CART = 'REMOVE_FROM_CART',
    UPDATE_CART_ITEM = 'UPDATE_CART_ITEM',
  }
  
  export interface AddToCartAction {
    type: CartActionTypes.ADD_TO_CART;
    payload: CartItem;
  }
  
  export interface RemoveFromCartAction {
    type: CartActionTypes.REMOVE_FROM_CART;
    payload: number; // ID of the item to be removed
  }
  
  export interface UpdateCartItemAction {
    type: CartActionTypes.UPDATE_CART_ITEM;
    payload: CartItem;
  }
  
  export type CartAction = AddToCartAction | RemoveFromCartAction | UpdateCartItemAction;