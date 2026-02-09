import express, { response } from 'express';
import { Express } from 'express';
import person from './person.js';

export default function (app: Express){
    app
        .use(express.json())
        .use(`/api/person`, person)
}