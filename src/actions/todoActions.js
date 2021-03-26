import { reduxActionTypes } from "reducers/reduxActionTypes";
import fbService from "api/fbService";

export const todoLimit = 14;

export const setReduxTodos = (start, limit) => (dispatch) => {
  fbService.todoService.getPosts(start, start + limit).then((data) => {
    dispatch({
      type: reduxActionTypes.HAS_MORE_TODOS,
      payload: {
        hasMore: data.length < todoLimit ? false : true,
      },
    });
    dispatch({
      type: reduxActionTypes.SET_TODOS,
      payload: {
        todos: data,
      },
    });
  });
};

export const getMoreReduxTodos = (newStart, limit) => (dispatch) => {
  return fbService.todoService
    .getPosts(newStart, newStart + limit)
    .then((resJson) => {
      dispatch({
        type: reduxActionTypes.HAS_MORE_TODOS,
        payload: {
          hasMore: resJson.length < limit ? false : true,
        },
      });

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
