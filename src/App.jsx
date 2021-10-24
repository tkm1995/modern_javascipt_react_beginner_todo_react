import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState(["aa", "bb"]);
  const [completeTodos, setCompleteTodos] = useState(["cc", "dd"]);

  // Todoの追加
  const onChangeTodoText = (event) => setTodoText(event.target.value);
  const onClickAdd = (event) => {
    if (todoText !== "") {
      const newTodos = [...incompleteTodos, todoText];
      setIncompleteTodos(newTodos);
      setTodoText("");
    }
  };

  // Todoの削除
  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  // 完了ボタン
  const onClickComplete = (index) => {
    // 完了リストに追加
    const completeTodo = incompleteTodos[index];
    const newTodos = [...completeTodos, completeTodo];
    setCompleteTodos(newTodos);

    // 未完了リストから削除
    onClickDelete(index);
  };

  // 戻すボタン
  const onClickBack = (index) => {
    // 未完了リストに追加
    const backTodo = completeTodos[index];
    const newTodos = [...incompleteTodos, backTodo];
    setIncompleteTodos(newTodos);

    // 完了リストから削除
    completeTodos.splice(index, 1);
  };

  return (
    <React.Fragment>
      {/* <InputTodo
        todoTextProp={todoText}
        onChangeProp={onChangeTodoText}
        onClickProp={onClickAdd}
      /> */}
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        disabled={incompleteTodos.length >= 5}
      />
      {incompleteTodos.length >= 5 && (
        <p style={{ color: "red" }}>登録できるタスクは5個まで</p>
      )}
      <IncompleteTodos
        incompleteTodosProp={incompleteTodos}
        onClickCompleteProp={onClickComplete}
        onClickDeleteProp={onClickDelete}
      />
      <CompleteTodos
        completeTodosProp={completeTodos}
        onClickBackProp={onClickBack}
      />
    </React.Fragment>
  );
};
