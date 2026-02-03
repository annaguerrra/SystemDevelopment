use("aula02")

db.people.insertMany([
    {
        name: "Anna",
        lastname: "Guerra",
        age: 19,
        salary: 2100
    },
    {
        name: "Lasnine",
        lastname: "Miranda",
        age: 18,
        salary: 2100
    },
    {
        name: "Leticia",
        lastname: "Burlinski",
        age: 18,
        salary: 2100
    },
    {
        name: "Cesar",
        lastname: "Stati",
        age: 50,
        salary: 8000
    },
    {
        name: "Nicolas",
        lastname: "Marques",
        age: 21,
        salary: 5000
    },
    {
        name: "Trevisan",
        lastname: "Leonardo",
        age: 26,
        salary: 10000
    },
    {
        name: "Patrick",
        lastname: "do Bigode",
        age: 24,
        salary: 5000
    },
    {
        name: "Queila",
        lastname: "Lima",
        age: 26,
        salary: 7000
    },
    {
        name: "Edson",
        lastname: "Eshima",
        age: 54,
        salary: 10000
    },
    {
        name: "Feh",
        lastname: "Fito",
        age: 20,
        salary: 2100
    }
])


use("aula02")
db.people.find() // busca todos os dados do bd

use("aula02")
db.people.find({name: "Anna"}) // atribuindo um parametro de busca

use("aula02")
db.people.find({name: /n/}) // busca qualquer nome que possui 'N'

use("aula02")
db.people.find({name: /^L.*e$/}) // busca um nome que começa com L e termina com E

use("aula02")
db.people.find({ $and: [{name: "Nicolas"}, {lastname: "Marques"}] })

use("aula02")
db.people.find({salary: {$gte: 7000}}, {name: 1, lastname: 1})

