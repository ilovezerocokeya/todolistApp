/* eslint-disable react/prop-types */
import { useState } from "react";

const TodoForm = ({ setTodos }) => {
  const [error, setError] = useState("");

  const onSubmit = (e) => {
    e.preventDefault(); // 폼의 기본 제출 동작 방지

    const formData = new FormData(e.target);
    const title = formData.get("title");
    const content = formData.get("content");

    if (!title.trim() || !content.trim()) {
      setError("제목과 내용을 입력해주세요.");
      return;
    }

    const nextTodo = {
      id: crypto.randomUUID(),
      title,
      content,
      isDone: false,
    };

    setTodos((prev) => [...prev, nextTodo]);
    setError("");
    e.target.reset();
  };

  return (
    <div className="form">
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="제목" name="title" />
        <input type="text" placeholder="할 일을 적어주세요" name="content" />

        <button className="btn" type="submit">
          등록
        </button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default TodoForm;
