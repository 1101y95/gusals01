import mongoose from 'mongoose'

const phoneSchema = new mongoose.Schema({
    phone: String,
    token: String,
    isAuth:Boolean
});

export const Token = mongoose.model("Token", phoneSchema)