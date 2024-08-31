import express from "express";
import authUser from "../middleware/authUser.js";
import {addPlace, getPlaces, updatePlace, singlePlace, userPlaces, searchPlaces} from "../controller/placeController.js"
const placeRouter = express.Router();

// Protected routes (user must be logged in)
placeRouter.post('/add-places', authUser, addPlace);
placeRouter.get('/user-places', authUser, userPlaces);
placeRouter.put('/update-place', authUser, updatePlace);

// Not Protected routed but sequence should not be interfered with above routes
placeRouter.get('/:id', singlePlace);
placeRouter.get('/search/:key', searchPlaces)


export default placeRouter;
