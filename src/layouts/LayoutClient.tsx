import { Stack } from "@mui/material"
import axios from "axios"
import { useEffect } from "react"
import { Outlet } from "react-router-dom"
import Footer from "src/components/client/Footer"
import Header from "src/components/client/Header"
import { useCart } from "src/contexts/cart"
import { useOrder } from "src/contexts/order"
import { useUser } from "src/contexts/user"

const LayoutClient = () => {
  const {setOrder} = useOrder();
  const { setCart } = useCart();
  const { setUser } = useUser();

  const getAllOrders = async () => {
    try {
      const userJson = localStorage.getItem("user");
      const user = userJson ? JSON.parse(userJson)?.user : null;
      setUser(user);
      if (!user) return;
      const { data } = await axios.get(`/orders/user/${user._id}`);
      setOrder(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
   const getAllCarts = async () => {
      try {
          const userJson = localStorage.getItem("user");
          const user = userJson ? JSON.parse(userJson)?.user : null;
        setUser(user);
  
        if (!user) return;
        const { data } = await axios.get(`/carts/user/${user._id}`);
        console.log(data);
        setCart(data);
      } catch (error) {}
    };
  
    useEffect(() => {
      getAllCarts();
      getAllOrders();
    }, []);
  return (
    <Stack width={"99vw"} marginLeft={"-10px"}>
    <Header />
    <main>
        <Outlet />
    </main>
    <Footer />
</Stack>
  )
}

export default LayoutClient