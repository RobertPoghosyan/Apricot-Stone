import { reduxActionTypes } from "reducers/reduxActionTypes";
import fbService from "api/fbService";

export const setReduxTodos = (start, limit) => (dispatch) => {
  fbService.todoService.getPosts(start, limit).then((data) => {
    dispatch({
      type: reduxActionTypes.SET_TODOS,
      payload: {
        todos: data,
      },
    });
  });
};

export const getMoreReduxTodos = (newStart, limit) => (dispatch) => {
  return fbService.todoService.getPosts(newStart, limit).then((resJson) => {
    hasMoreReduxTodos(resJson.length < limit ? false : true);
    dispatch({
      type: reduxActionTypes.GET_MORE_TODOS,
      payload: {
        todos: resJson,
      },
    });
  });
};

export const hasMoreReduxTodos = (hasMore) => (dispatch) => {
  dispatch({
    type: reduxActionTypes.HAS_MORE_TODOS,
    payload: {
      hasMore,
    },
  });
};

export const updateTodoInList = (updatedTodo) => (dispatch) => {
  dispatch({
    type: reduxActionTypes.UPDATE_TODO,
    payload: {
      todo: updatedTodo,
    },
  });
};

// WITHOUT REDUX-THUNK IS WORKING

// export const setReduxTodos = (todos) => ({
//   type:reduxActionTypes.SET_POSTS,
//   payload:{
//     todos,
//   }
// });
// export const getMoreReduxTodos = (todos) => ({
//   type:reduxActionTypes.GET_MORE_TODOS,
//   payload:{
//     todos,
//   }
// });
// export const hasMoreReduxTodos = (hasMore) => ({
//   type:reduxActionTypes.HAS_MORE_TODOS,
//   payload:{
//     hasMore,
//   }
// });
