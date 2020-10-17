import axios from "axios";
import { selectUserAgent } from "../utils/agent";

export const animeAPI = axios.create({
  baseURL: "http://appanimeplus.tk/",
});

animeAPI.interceptors.request.use(async (config) => {
  config.headers["user-agent"] = selectUserAgent();

  return config;
});
