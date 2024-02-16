/*
-------------------------------------------------------------------------
NOME..: userController.js
LANG..: nodeJS
TITULO: Controlador do usuario
DATA..: 15/02/2024
-------------------------------------------------------------------------
Copyright (c) 2024 - CTConnect+ - Thomas Campos
-------------------------------------------------------------------------
Modifications.....:
Date          Rev    Author            Description
15/02/2024    0      Thomas Campos     Elaboração
---------------------------------------------------------------------------
*/

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Função para criar um novo usuário
async function createUser(req, res) {
  try {
    const { nome, email, telefone } = req.body;

    const newUser = await prisma.user.create({
      data: {
        nome,
        email,
        telefone,
      },
    });

    res.status(201).json(newUser);
  } catch (error) {
    console.error(`Erro ao criar usuário: ${error.message}`);
    res.status(500).json({ error: 'Erro interno do servidor ao criar usuário' });
  }
}
// Função para obter todos os usuários
async function getAllUsers(req, res) {
  try {
    const users = await prisma.user.findMany();
    res.status(200).json(users);
  } catch (error) {
    console.error(`Erro ao obter usuários: ${error.message}`);
    res.status(500).json({ error: 'Erro interno do servidor ao obter usuários' });
  }
}

// Função para obter um usuário por ID
async function getUserById(req, res) {
  const userId = req.params.id; // Obtendo o ID do parâmetro da URL

  try {
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!user) {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error(`Erro ao obter usuário: ${error.message}`);
    res.status(500).json({ error: 'Erro interno do servidor ao obter usuário' });
  }
}

// Função para atualizar um usuário por ID
async function updateUser(req, res) {
  const userId = req.params.id; // Obtendo o ID do parâmetro da URL
  const newData = req.body; // Obtendo os dados atualizados do corpo da requisição

  try {
    const updatedUser = await prisma.user.update({
      where: {
        id: userId,
      },
      data: newData,
    });

    res.status(200).json(updatedUser);
  } catch (error) {
    console.error(`Erro ao atualizar usuário: ${error.message}`);
    res.status(500).json({ error: 'Erro interno do servidor ao atualizar usuário' });
  }
}

// Função para excluir um usuário por ID
async function deleteUser(req, res) {
  const userId = req.params.id; // Obtendo o ID do parâmetro da URL

  try {
    const deletedUser = await prisma.user.delete({
      where: {
        id: userId,
      },
    });

    if (!deletedUser) {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }

    res.status(200).json(deletedUser);
  } catch (error) {
    console.error(`Erro ao excluir usuário: ${error.message}`);
    res.status(500).json({ error: 'Erro interno do servidor ao excluir usuário' });
  }
}

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
};
