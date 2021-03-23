import { createStore, combineReducers, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import postReducer from "./postReducer";
import todosReducer from "./todosReducer";

const reducers = combineReducers({
  postsData: postReducer,
  todosData: todosReducer,
});

const initialState = {
  postsData: {
    posts: null,
    hasMore: true,
  },
  todosData: {
    todos: null,
    hasMore: true,
  },
};

export const store = createStore(
  reducers,
  initialState,
  applyMiddleware(reduxThunk)
);
