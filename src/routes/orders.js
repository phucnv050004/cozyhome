import { Router } from "express";
import OrdersController from "../controllers/orders.js";

const ordersRouter = Router();

const ordersController = new OrdersController();

ordersRouter.get("/", ordersController.getAllOrders);
ordersRouter.get("/:id", ordersController.getOrderDetail);
ordersRouter.get("/user/:id", ordersController.getOrderUser);
ordersRouter.post("/", ordersController.createOrder);
ordersRouter.put("/:id", ordersController.updateOrder);
ordersRouter.delete("/:id", ordersController.deleteOrder);

export default ordersRouter;
