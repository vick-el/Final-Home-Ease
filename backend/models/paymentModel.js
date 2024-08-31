import mongoose from 'mongoose';

const paymentSchema = new mongoose.Schema ({
    full_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    reference: {
        type: String,
        required: true,
        unique: true
    },
    status: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

const Payment = mongoose.model ('Payment', paymentSchema);
export default Payment;