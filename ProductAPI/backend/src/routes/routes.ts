import  { Express } from 'express'
import express from 'express';
import products from './productRoutes.js'

export default function (app: Express){
    app
        .use(express.json())
        .use('/api', products)
}