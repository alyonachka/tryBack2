import { useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { Form } from "../Form";

export const AddTodoItem = ({ updateTodoList }) => {
    const [title, setTitle] = useState("");
    const fetchData = useFetch();

    const onSubmit = async (e) => {
        e.preventDefault();
        const error = await fetchData(
            "http://localhost:3002/api/todos/add",
            "POST",
            {
                title,
            }
        );

        if (error) {
            alert(error);
            return;
        }

        updateTodoList();
        setTitle("");
    };

    return (
        <Form
            onSubmit={onSubmit}
            header="Добавление записи"
            btnText="Добавить"
            setTitle={setTitle}
            title={title}
            placeholder="title"
            value={title}
        />
    );
};
