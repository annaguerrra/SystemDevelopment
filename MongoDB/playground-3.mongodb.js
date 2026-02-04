use("aula03")

// 1. Inserção de dados

db.contacts.insertMany([
  {
    nome: "Ana Silva",
    telefone: "999912345",
    email: "ana.silva@gmail.com",
    cidade: "São Paulo",
    dataCadastro: new Date("2023-02-10")
  },
  {
    nome: "Bruno Costa",
    telefone: "41987654321",
    email: "bruno.costa@hotmail.com",
    cidade: "Curitiba",
    dataCadastro: new Date("2022-11-05")
  },
  {
    nome: "Amanda Souza",
    telefone: "988776655",
    email: "amanda.souza@gmail.com",
    cidade: "Rio de Janeiro",
    dataCadastro: new Date("2024-01-15")
  },
  {
    nome: "Carlos Pereira",
    telefone: "41911223344",
    email: "carlos@empresa.com",
    cidade: "Curitiba",
    dataCadastro: new Date("2023-06-20")
  },
  {
    nome: "Daniel Rocha",
    telefone: "977665544",
    email: "daniel.rocha@gmail.com",
    cidade: "São Paulo",
    dataCadastro: new Date("2021-09-30")
  }
])

// 2. Busca com Regex

use("aula03")
db.contacts.find({nome: /^a/i}); // nome que começa com a letra "A"

use("aula03")
db.contacts.find({telefone: /^9/}); // telefones que começam com "9"

use("aula03")
db.contacts.find({email: /gmail.com/}); // encontrar e-mails que contém "gmail.com"

use("aula03")
db.contacts.find({cidade: /São Paulo/}); 

use("aula03")
db.contacts.find({dataCadastro: {$gte: new Date("2023-01-01")}}); // pessoas cadastradas após 01/01/2023

// 3. Atualização de dados

use("aula03")
db.contacts.updateOne(
    { _id: ObjectId('69832ada982b54ade6771e43')},
    { $set: 
        { email: "silva.ana@gmail.com", 
          telefone: "999012345"}
    }
);

use("aula03");
db.contacts.updateOne(
    { nome: "Amanda Souza"},
    { $set: {cidade: "Curitiba"}}
);

use("aula03");
db.contacts.updateOne(
    {telefone: /^41/},
    { $set: {cidade: "Curitiba"}}
);

use("aula03");
db.contacts.find({telefone: /^41/}); 

// 4. Deleção de dados

use("aula03");
db.contacts.deleteOne(
    { email: /amanda/}
);

use("aula03");
db.contacts.deleteOne(
    {cidade: "Curitiba"}
);