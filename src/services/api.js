import axios from "axios";

export const animeAPI = axios.create({
  baseURL: "https://appanimeplus.tk/api-animesbr-10.php?",
});
