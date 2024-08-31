import express from "express";
import { startPayment, createPayment, getPayment } from "../controller/paymentController.js";

const paymentRouter = express.Router();

paymentRouter.post('/', startPayment);
paymentRouter.get('/createPayment', createPayment);
paymentRouter.get('/paymentDetails', getPayment);

export default paymentRouter;