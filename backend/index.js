import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import Pusher from "pusher";
dotenv.config();
import userRouter from "./routes/userRoutes.js";
import placeRouter from "./routes/placeRoutes.js";
import bookingRouter from "./routes/bookingRoutes.js";
import paymentRouter from "./routes/paymentRoutes.js";


const app = express();
const port = 2020;

//PUSHER FOR CHATBOX
const pusher = new Pusher({
    appId: "1853292",
    key: "d61f5271eb0ef62bb52d",
    secret: "2139b182b5d0707e8196",
    cluster: "eu",
    useTLS: true
});
  

//MIDDLEWARES
app.use (cors({ origin:['http://localhost:3000']}));
app.use(express.json());
app.use(express.urlencoded({extended:true}));


//DATABASE
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Home_ease connected to database');
    }).catch((err) => {
        console.log (`Some Error occured. ${err.message}`)
})


//SERVER CHECK
app.get('/', (req,res) => {
    res.send('We are live');
})

// api endpoints
app.use("/api/user", userRouter);
app.use("/api/places", placeRouter);
app.use("/api/bookings", bookingRouter);
app.use("/images",express.static('uploads'))
app.use('/api/HomeEase/pay', paymentRouter);
app.post('/api/messages', async(req,res) => {
    await pusher.trigger("chat", "message", {
        name: req.body.name,
        message: req.body.message
    });
    res.json([]);
})

//CONTACT US FORM
app.get('/contact-us', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
})

app.post('/formPost', (req,res) => {
    console.log(req.body)
})


//SERVER
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})



export default app;