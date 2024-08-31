import mongoose from "mongoose";

const userSchema = mongoose.Schema ({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [
            /^[a-zA-Z0-9._%+-]+@gmail\.com$/,
            'Please use a valid Gmail address (e.g., user34@gmail.com)'
        ]
    },
    password: {
        type: String,
        required: true,
    },
    Owner: {
        type: Boolean,
        required: true,
        default: false,
    },
},{
    timestamp: true
})

const User = mongoose.model('User', userSchema);
export default User;