import express, { response } from 'express';
import routes from './routes/routes.ts';

const port = 8080;
const app = express();

app.get('/', (req, res) => {
    res.send({response: "Api's working"})
})

const pessoa = {
    name: 'Anna',
    lastname: 'Guerra',
    age: 19
}

app.get('/object', (req, res) => {
    res.send({pessoas: pessoa})
})

app.get('/', (req, res) => {
    res.status(200).send({response: "Api's working"})
})

routes(app)
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})

// app.get('/direto', (req, res) => {
//     res.send({pessoa})
// })



