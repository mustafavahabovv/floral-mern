import mongoose from "mongoose";


const productSchema = mongoose.Schema({
    title: String,
    price: Number,
    image: String
})

const FloraModel = mongoose.model('Product', productSchema)

export default FloraModel