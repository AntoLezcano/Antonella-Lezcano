import { Router } from "express";
import { createOrderCtrl, getOrdersCtrl } from "../controllers/order.controller.js";
import { applyValidations } from "../middlewares/apply.validations.js";
import { createOrderValidation } from "../validations/orders.validations.js";


const ordersRouter = Router();

// ! NO FUNCIONA LA RUTA /orders
ordersRouter.get("/", getOrdersCtrl);

ordersRouter.post("/", createOrderValidation, applyValidations, createOrderCtrl);

export { ordersRouter };


