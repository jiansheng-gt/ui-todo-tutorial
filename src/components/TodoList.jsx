import React, { useContext } from "react";
import { Button } from "antd";
import { TodoContext } from "../context/TodoContextProvider";

const TodoTask = (props) => {
  return (
    <div className="todo-task">
      <div className="todo-task__name" data-cy="todo-task__name">
        {props.description}
      </div>
      <Button
        type="primary"
        shape="round"
        className="todo-task__button"
        data-cy="todo-task__button-update"
        onClick={() => {}}
      >
        Update
      </Button>
      <Button
        type="primary"
        shape="round"
        className="todo-task__button"
        data-cy="todo-task__button-delete"
        onClick={() => props.delete(props.id)}
      >
        Delete
      </Button>
    </div>
  );
};

export const TodoList = () => {
  const { state } = useContext(TodoContext);

  // useEffect(() => {
  //   const fetchTodos = async () => {
  //     const todos = await firebaseApi.fetchTodos();
  //     dispatch(setTodos(todos));
  //   }

  //   fetchTodos();
  // }, [dispatch]);

  const handleDeleteTodo = (id) => {
    // TODO: fill in
  };

  return (
    <div className="todo-list" data-cy="todo-list">
      {Object.entries(state.todos).map(([id, todo]) => (
        <TodoTask
          key={id}
          description={todo.description}
          delete={handleDeleteTodo}
          id={id}
        />
      ))}
    </div>
  );
};
