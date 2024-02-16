/*
-------------------------------------------------------------------------
NOME..: app.js
LANG..: nodeJS
TITULO: Modulo controlador Back-End site da CTConnect+
DATA..: 15/02/2024
-------------------------------------------------------------------------
Copyright (c) 2024 - CTConnect+ - Thomas Campos
-------------------------------------------------------------------------
Modifications.....:
Date          Rev    Author            Description
15/02/2024    0      Thomas Campos     Elaboração
---------------------------------------------------------------------------
*/
const express = require('express')
const path = require('path')
const app = express()

const userRouter = require('./routes/user')
app.use(express.json())
app.use('/user', userRouter)

app.listen(Number(process.env.PORT) || 3001, '0.0.0.0', () => {
    console.log('Servidor rodando na porta 3001');
  });
  
module.exports = app