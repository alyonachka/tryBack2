import './App.css';
import { TodoList } from './components/TodoList';
import { useState, useEffect, useCallback } from 'react';
import { useGetTodoList } from './hooks/useGetTodoList';
import { AddTodoItem } from './components/AddTodoItem';

function App() {
  const [todoList, setTodoList] = useState([]);

  const getTodoList = useGetTodoList();

  const updateTodoList = useCallback(() => {
    getTodoList().then((data) => setTodoList(data.todos));
  }, [getTodoList])

  useEffect(() => {
    updateTodoList()
  }, [updateTodoList]);

  return (
    <div className="App">
      <h1>My tasks</h1>
      <TodoList todoList={todoList} updateTodoList={updateTodoList} />
      <hr />
      <AddTodoItem updateTodoList={updateTodoList} />
    </div>
  );
}

export default App;
