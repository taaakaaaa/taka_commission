import axios from "axios";

export const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API,
});

export const instanceSelf = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API,
});
