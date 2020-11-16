import http from "../services/http";
import { API } from "../config";

const APIEndpoint = API + "/posts";

export const getPosts = () => http.get(APIEndpoint);
export const createPost = (post) => http.post(APIEndpoint, post);
export const updatePost = (id, post) =>
  http.patch(`${APIEndpoint}/${id}`, post);
export const deletePost = (id) => http.delete(`${APIEndpoint}/${id}`);
export const likePost = (id) => http.patch(`${APIEndpoint}/${id}/like`);
