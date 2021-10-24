import React from "react";

export const CompleteTodos = (props) => {
  const { completeTodosProp, onClickBackProp } = props;
  return (
    <div className="complete-area">
      <p className="title">完了したTODO</p>
      <ul>
        {completeTodosProp.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickBackProp(index)}>戻す</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
