import mongoose from 'mongoose';

const dbConnection =async () => {
    mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Home_ease connected to database');
    }).catch((err) => {
        console.log (`Some Error occured. ${err.message}`)
})
}
export default dbConnection
