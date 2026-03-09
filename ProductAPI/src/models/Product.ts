import mongoose, { Document, Schema } from "mongoose";

interface IProduct extends Document{
    name: string
    description: string
    price: number
    stock: number
    category: string
    createdAt: Date 
}

const productSchema: Schema = new Schema ({
    name: { type: String, required: true},
    price: { type: Number, required: true},
    stock: { type: Number, default: 0},
    createdAt: { type: Number, default: Date.now()}
});

const Product = mongoose.model<IProduct>('Product', productSchema)

export default Product;