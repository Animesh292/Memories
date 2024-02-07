import axios from 'axios';

const url = 'http://localhost:5000/posts'; //simply returns all the posts that we curently have in backend router where all the posts resides in the dtabase.

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
export const deletePost = (id) => axios.patch(`${url}/${id}`);
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);