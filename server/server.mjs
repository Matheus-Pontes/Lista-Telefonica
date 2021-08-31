import express from "express";
import bodyParser from "body-parser";

// const express = require("express");
// const bodyParser = require("body-parser");

const app = express();
const port = 3000 | process.env.PORT;

const serialGenerator = () => {
  var serial = "";

  while(serial.length < 10) { 
    serial += String.fromCharCode(Math.floor(Math.random() * 64) + 32);
  }

  return serial;
};

const contatos = [
  {
    nome: "Bruno da silva",
    telefone: "9999-2222",
    data: new Date(),
    operadora: { nome: "Oi", codigo: 14, categoria: "Celular" },
    serial: serialGenerator(),
  },
  {
    nome: "Sandra albuquerque",
    telefone: "9999-3333",
    data: new Date(),
    operadora: { nome: "Vivo", codigo: 15, categoria: "Celular" },
    serial: serialGenerator(),
  },
  {
    nome: "Mariana Freitas",
    telefone: "9999-9999",
    data: new Date(),
    operadora: { nome: "Tim", codigo: 41, categoria: "Celular" },
    serial: serialGenerator(),
  },
];

const operadoras = [
  { nome: "Oi", codigo: 14, categoria: "Celular", preco: 2 },
  { nome: "Vivo", codigo: 15, categoria: "Celular", preco: 1 },
  { nome: "Tim", codigo: 41, categoria: "Celular", preco: 3 },
  { nome: "GVT", codigo: 25, categoria: "Fixo", preco: 1 },
  { nome: "Embratel", codigo: 21, categoria: "Fixo", preco: 2 }
];

// 
app.use(express.static('/public'));
app.use(bodyParser.json());

// Altorização para acesso as requisição ajax
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// criando rota de contatos
app.get('/contatos', function (req, res) {
  res.json(contatos); // os contatos em tela
});

// Postando em tela os contatos
app.post('/contatos', function (req, res) {
  contatos.push(req.body); // coloca o que foi enviado em pelo front 
  
  res.json(contatos);
});

// Postando em tela os contatos
app.get('/contatos/:id', function (req, res) {
  res.json(contatos);
});

app.delete('/contatos', (res, req) => {
  console.log(res.body);
});

// criando rota de operadoras
app.get('/operadoras', function (req, res) {
  res.json(operadoras);
  
});

// Abrindo a porta(port);
app.listen(port, function () {
  console.log(`A porta aberta foi http://localhost:${port}`);
});
