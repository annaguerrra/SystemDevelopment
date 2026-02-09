import express, { response } from 'express';

const port = 8080;
const app = express();


app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})

app.get('/', (req, res) => {
    res.send({response: "Api funcionando"})
})

const pessoa = {
    name: 'Anna',
    lastname: 'Guerra',
    age: 19
}

app.get('/objeto', (req, res) => {
    res.send({pessoas: pessoa})
})

app.get('/', (req, res) => {
    res.status(200).send({response: "Api funcionando"})
})

// app.get('/direto', (req, res) => {
//     res.send({pessoa})
// })



