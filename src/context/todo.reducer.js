import { SET_TODOS, ADD_TODO, UPDATE_TODO, DELETE_TODO } from "./todo.actions";

export const todoReducer = (state, action) => {
  const { type, data } = action;
  switch (type) {
    case SET_TODOS:
      return { ...state, todos: data };
    case ADD_TODO:
      const todos = {
        ...state.todos,
        [data.id]: { description: data.description },
      };
      return { ...state, todos };
    case UPDATE_TODO:
      const updatedTodos = { ...state.todos };
      if (updatedTodos[data.id]) {
        updatedTodos[data.id].description = data.description;
      }
      return { ...state, todos: updatedTodos };

    case DELETE_TODO:
      const todosAfterDelete = { ...state.todos };
      delete todosAfterDelete[data];
      return { ...state, todos: todosAfterDelete };
    default:
      return state;
  }
};
