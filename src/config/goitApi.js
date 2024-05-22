import axios from "axios";

export const goitApi = axios.create({
  baseURL: "https://connections-api.herokuapp.com/",
});

export const createToken = () => {};

export const deleteToken = () => {};
