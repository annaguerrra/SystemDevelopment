import e, {Request, Response } from 'express';
import Product from '../models/Product.js';

class ProductController {
    static async create( req: Request, res: Response){
        try{
            const {  name, price, stock, category, description } = req.body;
    
            if( !name || price == undefined){
                return res.status(400).json({
                    e: "Please, fill in all the required fileds!"
                });
            }
    
            const product = new Product({
                name,
                category,
                price: Number(price) ,
                stock: Number(stock),
                description
            });
    
            await product.save();
            return res.status(201).json(product)
        } catch(e) {
            return res.status(500).json({
                e: "Error completing request"
            });
        }
    }
    static async findAll( req: Request, res: Response){
        try{
            const { name, category, minPrice, maxPrice, inStock } = req.query;
            const filters: any = {};

            if(name) filters.name = { $regex: name, $options: "i"};
            if(category) filters.category = category;

            if(minPrice || maxPrice){
                filters.price = {};

                if(minPrice) filters.price.$gte = Number(minPrice)
                if(maxPrice) filters.price.$gte = Number(maxPrice)
            }
            
            if(inStock === "true") filters.stock = { $gt: 0};

            const products = await Product.find(filters);

            return res.json(products);

        } catch(e) {
            return res.status(500).json({ e: "Error completing request."})
        }
    }
    static async findById( req: Request, res: Response){
        const { id } = req
    }
}