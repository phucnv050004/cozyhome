import { useRoutes } from "react-router-dom";
import LayoutAdmin from "src/layouts/LayoutAdmin";
import LayoutClient from "src/layouts/LayoutClient";
import AdminAddProduct from "src/pages/admin/Add";
import AdminEditProduct from "src/pages/admin/Edit";
import AdminProductList from "src/pages/admin/List";

import Login from "src/pages/auth/Login";
import Register from "src/pages/auth/Register";
import Checkout from "src/pages/client/Checkout";
import HomePage from "src/pages/client/HomePage";
import OrderDetail from "src/pages/client/OrderDetail";
import pageCart from "src/pages/client/pageCart";
import ProductDetail from "src/pages/client/ProductDetail";
import Products from "src/pages/client/Products";
import ShowOrder from "src/pages/client/ShowOrder";

const Router = () => {
  const router = useRoutes([
    {
      path: "/",
      Component: LayoutClient,
      children: [
        { path: "/", Component: HomePage },
        { path: "products/:id", Component: ProductDetail },
        { path: "products", Component: Products },
        { path: "cart", Component: pageCart },
        { path: "checkout", Component: Checkout },
        {path:"orders",Component:ShowOrder},
        {path:"orders/:id",Component:OrderDetail}
      ],
    },

    {
      path: "/admin",
      Component: LayoutAdmin,
      children: [
        { path: "/admin", Component: AdminProductList },
        { path: "/admin/product/add", Component: AdminAddProduct },
        {
          path: "/admin/product/edit/:id",
          Component: AdminEditProduct,
        },
      ],
    },
    { path: "/register", Component: Register },
    { path: "/login", Component: Login },
    // {path:'*',element:<Notfound/>}
  ]);
  return router;
 
};

export default Router;
