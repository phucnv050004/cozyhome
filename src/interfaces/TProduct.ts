export type TProduct = {
    _id: string;
    title: string;
    price: number;
    image: string;
    description: string;
    category: Category;
    isShow: boolean;
  };
  
  export type Category = {
    _id: string;
    name: string;
    description: string;
  };
  export type ProductFormParams = {
    title: string;
    price: number;
    image: string;
    description: string;
    category: string;
    isShow: boolean;
  };
  export type CartItem = {
    product: TProduct;
    quantity: number;
  };
  
  export type Cart = {
    _id: string;
    user: string;
    products: CartItem[];
  };
  export type Order = {
    _id: string;
    user: string;
    products: CartItem[];
    address: string;
    phone: string;
    name: string;
    totalPrice: number;
    payment: string;
    
  }