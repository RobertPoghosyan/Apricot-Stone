import {createStore,combineReducers} from 'redux';
import postReducer from './postReducer';
//import todosReducer from './todosReducer';

// const initialState = {
//     count:0,
//     posts:null,
//     hasMore:true,
//   }
  
  const reducers = combineReducers({
      postsData: postReducer,
      //todosData:todosReducer,
  })
  
  export const store = createStore(reducers);