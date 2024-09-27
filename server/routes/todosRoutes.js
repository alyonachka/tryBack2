const { Router } = require("express");
const todosController = require("../controllers/todosConttroller")

const todoRoutes = new Router()

todoRoutes.get('/list', todosController.getTodos)
todoRoutes.post('/add', todosController.addTodo)
todoRoutes.delete('/delete', todosController.deleteTodo)
todoRoutes.patch('/edit', todosController.editTodo)

module.exports = todoRoutes