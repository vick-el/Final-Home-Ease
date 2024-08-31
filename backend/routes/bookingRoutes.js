import express from "express";
import authUser from "../middleware/authUser.js";
import { createBookings, getBookings } from "../controller/bookingController.js";

const bookingRouter = express.Router();

// Protected routes (user must be logged in)
bookingRouter.get('/', authUser, getBookings)
bookingRouter.post('/', authUser, createBookings);

export default bookingRouter;