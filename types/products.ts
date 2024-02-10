

export interface Product {
  id: number;
  name: string;
  store_product_properties: {
    selling_price: number;
    stock_quantity: number;
    expiry_date: string;
  }[];
  is_service: boolean;
  variants: any[];
}

export interface Props {
    cartItems : any[]
}