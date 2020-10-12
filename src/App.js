import React from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [animes, setAnimes] = React.useState([]);
  const [eps, setEps] = React.useState([]);
  const [currentEp, setCurrentEp] = React.useState([]);
  const [currentEpURL, setCurrentEpURL] = React.useState("");
  const [selected, setSelected] = React.useState([]);
  const searchValue = React.useRef(null);

  async function getAnimes(e) {
    e.preventDefault();
    const query = searchValue.current.value.replace(/[^a-zA-Zs]/g, "_");

    if (query !== "") {
      const { data } = await axios.get(
        `https://appanimeplus.tk/api-animesbr-10.php?letra=${query}`
      );
      setAnimes(data);
      console.log(data);
    }
  }

  React.useEffect(() => {
    async function getEps() {
      const { data } = await axios.get(
        `https://appanimeplus.tk/api-animesbr-10.php?cat_id=${selected.id}`
      );
      console.log(data);
      setEps(data);
    }

    getEps();
  }, [selected]);

  React.useEffect(() => {
    async function getCurrentEp() {
      const { data } = await axios.get(
        `https://appanimeplus.tk/api-animesbr-10.php?episodios=${currentEp.video_id}`
      );
      if (data) {
        console.log(data[0]);
        setCurrentEpURL(
          data[0]?.locationhd || data[0]?.locationsd || data[0]?.location
        );
      }
    }

    getCurrentEp();
  }, [currentEp]);

  return (
    <div className="App">
      <h1>Anime dart</h1>
      <form onSubmit={getAnimes}>
        <input
          type="search"
          ref={searchValue}
          placeholder="Pesquise um anime"
        />
        <button type="submit">Buscar</button>
      </form>

      <h1>{animes.length > 0 && "Escolha o anime"}</h1>
      <ul>
        {animes.length > 0 &&
          animes.map((anime) => (
            <li onClick={() => setSelected(anime)} key={anime.id}>
              {anime.category_name}
            </li>
          ))}
      </ul>

      <h1>{eps && "Escolha um episódio"}</h1>

      <ul>
        {eps &&
          eps.map((ep) => (
            <li onClick={(e) => setCurrentEp(ep)} key={ep.video_id}>
              {ep.title}
            </li>
          ))}
      </ul>
      {currentEpURL !== "" && <video src={currentEpURL} controls />}
    </div>
  );
}

export default App;
