import { reduxActionTypes } from "./reduxActionTypes";

const initialState = {
  todos: null,
  hasMore: true,
};
const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case reduxActionTypes.SET_TODOS:
      return {
        ...state,
        todos: action.payload.todos,
      };
    case reduxActionTypes.GET_MORE_TODOS:
      return {
        ...state,
        todos: [...state.todos, ...action.payload.todos],
      };
    case reduxActionTypes.HAS_MORE_TODOS:
      return {
        ...state,
        hasMore: action.payload.hasMore,
      };
    case reduxActionTypes.UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map((el) => {
          if (el.id === action.payload.todo.id) {
            return action.payload.todo;
          }
          return el;
        }),
      };
    default:
      return state;
  }
};

export default todosReducer;
