import axios from "axios";
import { toast } from "react-toastify";
import { useCart } from "src/contexts/cart";
import { useUser } from "src/contexts/user";
import { TProduct } from "src/interfaces/TProduct";

type AddToCart = {
  product: TProduct;
  quantity: number;
};

export function useProductCart() {
  const { user } = useUser();
  const { cart, setCart } = useCart();
  const getCartUser = async () => {
    if (!user) return;
    const { data } = await axios.get(`/carts/user/${user._id}`);
    console.log(data);
    setCart(data);
  };

  const addToCart = async ({ product, quantity }: AddToCart) => {
    if (!user) return;
    if (!cart) {
      try {
        await axios.post("/carts", {
          product,
          quantity,
          user: user._id,
        });
        getCartUser();
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        await axios.put(`/carts/${cart._id}`, {
          product,
          quantity,
          user: user._id,
        });
        getCartUser();
      } catch (error) {}
    }
    toast.success("Add product cart successfully");
  };

  const removeToCart = async (productId: string) => {
    if (!user) return;
    if (window.confirm("Remove Item Cart")) {
      try {
        await axios.delete(`/carts/user/${user._id}/product/${productId}`);
        getCartUser();
      } catch (error) {
        console.log(error);
      }
    }
    toast.success("Remove product cart successfully");
  };
  
  return {
    getCartUser,
    addToCart,
    removeToCart,
  };
}
