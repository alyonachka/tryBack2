import { useFetch } from "../../hooks/useFetch";
import { TodoItem } from "./components/TodoItem";

export const TodoList = ({ todoList, updateTodoList }) => {
    const fetchData = useFetch();

    const deleteTodoItem = async (title) => {
        const error = await fetchData(
            "http://localhost:3002/api/todos/delete",
            "delete",
            { title }
        );

        if (error) {
            alert(error);
            return;
        }

        updateTodoList();
    };

    return (
        <>
            {!todoList.length && <div>Loading...</div>}
            {todoList.map((todo) => (
                <TodoItem
                    key={todo._id}
                    title={todo.title}
                    deleteTodoItem={deleteTodoItem}
                    updateTodoList={updateTodoList}
                />
            ))}
        </>
    );
};
