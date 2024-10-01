
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
       
    },
    lastname: {
        type: String,
        required: true,
        
    },
    username: {
        type: String,
        required: true,
        
    },
    email: {
        type: String,
        required: true,
        
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String
    }
});

const User = mongoose.model('User', userSchema);

export default User;
