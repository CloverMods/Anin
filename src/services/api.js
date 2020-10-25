import axios from "axios";
import { selectUserAgent } from "../utils/agent";

export const animeAPI = axios.create({
  baseURL: "https://appanimeplus.tk",
  headers: {
    "Content-type": "application/json",
  },
});

animeAPI.interceptors.request.use(async (config) => {
  config.headers["user-agent"] = selectUserAgent();

  return config;
});
