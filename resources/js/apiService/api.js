import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1/api",
});

export const getComments = async () => {
  const response = await api.get("/comments/");
  return response.data;
};

export const getComment = async (id) => {
  const response = await api.get(`/comments/${id}`);
  return response.data;
};

export const createComment = async ({ name, text, date }) => {
  const comment = { name, text, date };
  const response = await api.post("/comments/", comment);
  return response.data;
};

export const deleteComment = async (id) => {
  const response = await api.delete(`/comments/${id}`);
  return response.data;
};

export const updateComment = async (id, comment) => {
  const response = await api.patch(`/comments/${id}`, comment);
  return response.data;
};