import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { useState } from "react";

const TodoContainer = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "할 일1",
      content: "할 일1 내용",
      isDone: false,
    },
    {
      id: 2,
      title: "할 일2",
      content: "할 일2 내용",
      isDone: true,
    },
  ]);

  const workingTodos = todos.filter((todo) => !todo.isDone);
  const doneTodos = todos.filter((todo) => todo.isDone);

  return (
    <section className="container">
    <h1 className="title">Todo List</h1>
    <TodoForm setTodos={setTodos}/>
    <TodoList title="Working" todos={workingTodos} setTodos={setTodos} />
    <TodoList title="Done" todos={doneTodos} setTodos={setTodos} />
</section>
  );
};

export default TodoContainer;
