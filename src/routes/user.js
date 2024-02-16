/*
-------------------------------------------------------------------------
NOME..: user.js
LANG..: nodeJS
TITULO: Rota com funcionalidades
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
const router = express.Router()

const userController = require('../controller/userController')

router.post('/', userController.createUser) // criar usuario
router.get('/all', userController.getAllUsers) // lista todos user
router.get('/:id', userController.getUserById) // usuario por id
router.put('/:id', userController.updateUser) // atualizar user
router.delete('/:id', userController.deleteUser) // deletar user

module.exports = router