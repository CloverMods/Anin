import axios from "axios";
import { final_agents, selectUserAgent } from "../utils/agent";

export const animeAPI = axios.create({
  baseURL: "https://appanimeplus.tk/api-animesbr-10.php",
});

animeAPI.interceptors.request.use(async (config) => {
  config.headers["User-Agent"] = final_agents[selectUserAgent(final_agents)];

  return config;
});
