import * as api from "../api/posts";
import {
  FETCH_ALL,
  CREATE,
  UPDATE,
  DELETE,
  LIKE,
} from "../config/actionsTypes";

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.getPosts();
    return dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.error(error);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.error(error);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.error(error);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.deletePost(id);
    dispatch({ type: DELETE, payload: data });
  } catch (error) {
    console.error(error);
  }
};

export const likePost = (id, post) => async (dispatch) => {
  const newPost = { ...post };
  try {
    newPost.likeCount++;
    dispatch({ type: UPDATE, payload: newPost });
    const updatedPost = await api.likePost(id);
    dispatch({ type: UPDATE, payload: updatedPost });
  } catch (error) {
    dispatch({ type: UPDATE, payload: post });
    console.error(error);
  }
};
// export const likePost = (id) => async (dispatch) => {
//   try {
//     const { data } = await api.likePost(id);
//     dispatch({ type: LIKE, payload: data });
//   } catch (error) {
//     console.error(error);
//   }
// };
