import { useState } from "react";
import { useFetch } from "../../../../hooks/useFetch";
import { Form } from "../../../Form";

export const TodoItem = ({ title, deleteTodoItem, updateTodoList }) => {
    const [edit, setEdit] = useState(false);
    const fetchData = useFetch();
    const [newTitle, setNewTitle] = useState(title);

    const editText = edit ? "Отменить редактирование" : "Редактировать";

    const onSubmit = async (e) => {
        e.preventDefault();

        if (!newTitle) {
            alert("Введите заголовок");
            return;
        }

        const error = await fetchData(
            "http://localhost:3002/api/todos/edit",
            "PATCH",
            {
                oldTitle: title,
                newTitle,
            }
        );

        if (error) {
            alert(error);
            return;
        }

        updateTodoList();
        setEdit(false);
    };

    return (
        <>
            <div>
                {title} &nbsp;
                <button onClick={() => deleteTodoItem(title)}>Удалить</button>
                &nbsp;&nbsp;&nbsp;
                <button onClick={() => setEdit(!edit)}>{editText}</button>
                <br />
                <br />
                {edit && (
                    <Form
                        onSubmit={onSubmit}
                        header="Редактирование записи"
                        title={newTitle}
                        btnText="Сохранить изменения"
                        setTitle={setNewTitle}
                        defaultValue={title}
                    />
                )}
            </div>
        </>
    );
};
