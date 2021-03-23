import { reduxActionTypes } from "reducers/reduxActionTypes";
import fbService from "api/fbService";

export const postLimit = 14;

export const setReduxPosts = (start, limit) => (dispatch) => {
  fbService.postsService.getPosts(start, start + limit).then((data) => {
    dispatch({
      type: reduxActionTypes.HAS_MORE_POSTS,
      payload: {
        postsHasMore: data.length < postLimit ? false : true,
      },
    });
    dispatch({
      type: reduxActionTypes.SET_POSTS,
      payload: {
        posts: data,
      },
    });
  });
};
export const getMoreReduxPosts = (newStart, limit) => (dispatch) => {
  return fbService.postsService
    .getPosts(newStart, newStart + limit)
    .then((resJson) => {
      dispatch({
        type: reduxActionTypes.HAS_MORE_POSTS,
        payload: {
          postsHasMore: resJson.length < limit ? false : true,
        },
      });

      dispatch({
        type: reduxActionTypes.GET_MORE_POSTS,
        payload: {
          posts: resJson,
        },
      });
    });
};

export const hasMoreReduxPosts = (hasMore) => (dispatch) => {
  dispatch({
    type: reduxActionTypes.HAS_MORE_POSTS,
    payload: {
      hasMore,
    },
  });
};

export const updatePostInList = (updatedPost) => (dispatch) => {
  dispatch({
    type: reduxActionTypes.UPDATE_POST,
    payload: {
      post: updatedPost,
    },
  });
};
