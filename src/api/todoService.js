import firebase from "firebase/app";
import "firebase/database";

import firebaseConfig from "./firebaseConfig";

class TodoService {
  constructor() {
    if (firebase.apps.length === 0) {
      firebase.initializeApp(firebaseConfig);
    }
  }

  getAllPosts = async () => {
    const res = await firebase.database().ref("tours").get();
    const data = res.toJSON();
    return Object.values(data);
  };

  getPosts = async (startAt = 0, endAt = 14) => {
    const res = await firebase
      .database()
      .ref("tours")
      .orderByKey()
      .startAt(startAt.toString())
      .endAt(endAt.toString())
      .get();
    const data = res.toJSON();
    console.log("res: " + res);
    return Object.values(data);
  };

  updatePost = async (postData) => {
    const postRef = firebase.database().ref(`tours/${postData.id}`);
    await postRef.update(postData);
    const res = await postRef.get();
    return res.val();
  };

  getPost = async (id) => {
    const res = await firebase.database().ref(`tours/${id}`).get();
    return res.val();
  };

  createPost = async (postData) => {
    const res = await firebase
      .database()
      .ref("tours")
      .orderByKey()
      .limitToLast(1)
      .get();
    const lastItemJson = res.toJSON();
    const lastItem = Object.values(lastItemJson)[0];
    const { id } = lastItem;
    const newItem = {
      ...postData,
      id: id + 1,
    };

    await firebase
      .database()
      .ref(`tours/${id + 1}`)
      .set(newItem);

    return newItem;
  };

  removePost = async (id) => {
    const postRef = firebase.database().ref(`tours/${id}`);
    await postRef.remove();

    const todos = await this.getAllPosts();
    await firebase
      .database()
      .ref("tours")
      .set(
        todos.map((el, idx) => {
          return {
            ...el,
            id: idx,
          };
        })
      );
  };
}

const todoService = new TodoService();
export default todoService;
