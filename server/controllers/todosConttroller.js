const TodosModel = require('../models/TodosModel')

class TodoControllers {
    async getTodos(req, res) {
        try {
            const result = await TodosModel.find({}, "title")
            res.status(200).json({ todos: result });
        } catch (e) {
            res.status(400).json({ message: "Произошла ошибка при получении" })
        }
    }

    async addTodo(req, res) {
        try {
            if (!req.body.title) {
                res.status(400).json({ message: "Добавьте заголовок" })
                return
            }

            const todoModel = new TodosModel({ title: req.body.title })

            await todoModel.save()

            res.status(200).json({ message: "Элемент успешно добавлен" })
        } catch (e) {
            res.status(400).json({ message: "Произошла ошибка при добавлении" })
        }
    }

    async deleteTodo(req, res) {
        try {
            if (!req.body.title) {
                res.status(400).json({ message: "Пж укажи заголовок" })
                return
            }
            const { deletedCount } = await TodosModel.deleteOne({ title: req.body.title })

            if (!deletedCount) res.status(400).json({ message: "Удаление не произошло" })

            res.status(200).json({ message: "Успешно удален" })
        } catch (e) {
            res.status(400).json({ message: "Произошла ошибка при удалении" })
        }
    }

    async editTodo(req, res) {
        try {
            if (!req.body.newTitle || !req.body.oldTitle) {
                res.status(400).json({ message: "Пж укажи заголовок, он не может быть пустым" })
                return
            }
            const { modifiedCount } = await TodosModel.updateOne({ title: req.body.oldTitle }, { title: req.body.newTitle })

            if (!modifiedCount) {
                res.status(400).json({ message: "Изменение не произошло" })
                return
            }

            res.status(200).json({ message: "Успешно изменен" })
        } catch (e) {
            res.status(400).json({ message: "Произошла ошибка при редактировании поста" })
        }
    }
}

module.exports = new TodoControllers()