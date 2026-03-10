import  { Express } from 'express'
import express from 'express';
import product from './productRoutes.js'

export default function (app: Express){
    app
        .use(express.json())
        .use('/api, product')
}