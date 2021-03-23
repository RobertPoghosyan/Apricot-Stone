import { reduxActionTypes } from "./reduxActionTypes";

const initialState = {
  posts: null,
  hasMore: true,
};
const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case reduxActionTypes.SET_POSTS:
      return {
        ...state,
        posts: action.payload.posts,
      };
    case reduxActionTypes.GET_MORE_POSTS:
      return {
        ...state,
        posts: [...state.posts, ...action.payload.posts],
      };
    case reduxActionTypes.HAS_MORE_POSTS:
      return {
        ...state,
        hasMore: action.payload.hasMore,
      };
    case reduxActionTypes.UPDATE_POST:
      return {
        ...state,
        posts: state.posts.map((el) => {
          if (el.id === action.payload.post.id) {
            return action.payload.post;
          }
          return el;
        }),
      };
    default:
      return state;
  }
};

export default postReducer;
