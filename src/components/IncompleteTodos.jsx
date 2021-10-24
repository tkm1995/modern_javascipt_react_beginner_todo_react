import React from "react";

export const IncompleteTodos = (props) => {
  const { incompleteTodosProp, onClickCompleteProp, onClickDeleteProp } = props;
  return (
    <div className="incomplete-area">
      <p className="title">未完了のTODO</p>
      <ul>
        {incompleteTodosProp.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickCompleteProp(index)}>完了</button>
              <button onClick={() => onClickDeleteProp(index)}>削除</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
