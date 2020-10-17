import React from "react";
import { animeAPI } from "../../services/api";

import {
  Container,
  SearchBox,
  ListContainer,
  AnimeList,
  AnimeItem,
  ImgAnime,
  EpsContainer,
  ListEps,
  Ep,
  VideoContainer,
} from "./styles";

function Home() {
  const [animes, setAnimes] = React.useState([]);
  const [eps, setEps] = React.useState([]);
  const [currentEp, setCurrentEp] = React.useState([]);
  const [currentEpURL, setCurrentEpURL] = React.useState("");
  const [selected, setSelected] = React.useState([]);
  const searchValue = React.useRef(null);
  const [showPlayer, setShowPlayer] = React.useState(false);

  function togglePlayerVisibility() {
    setShowPlayer(!showPlayer);
  }

  React.useEffect(() => {
    async function loadPopular() {
      const { data } = await animeAPI.get("?populares");
      setAnimes(data.slice(0, 10));
    }
    loadPopular();
  }, []);

  async function getAnimes(e) {
    e.preventDefault();
    const query = searchValue.current.value.replace(/[^a-zA-Zs]/g, "_");

    if (query !== "") {
      const { data } = await animeAPI.get(`?letra=${query}`);

      setAnimes(data);
      /*   console.log(data); */
    }
  }

  React.useEffect(() => {
    async function getEps() {
      const { data } = await animeAPI.get(`?cat_id=${selected.id}`);
      /*      console.log(data); */
      setEps(data);
    }

    getEps();
  }, [selected]);

  React.useEffect(() => {
    async function getCurrentEp() {
      const { data } = await animeAPI.get(`?episodios=${currentEp.video_id}`);
      if (data) {
        /* console.log(data[0]); */
        setCurrentEpURL(
          data[0]?.locationhd || data[0]?.locationsd || data[0]?.location
        );
      }
    }

    getCurrentEp();
  }, [currentEp]);

  return (
    <Container>
      <SearchBox>
        <h1>Anime Dart</h1>
        <form onSubmit={getAnimes}>
          <input
            type="search"
            ref={searchValue}
            placeholder="Pesquise um anime"
          />
          <button type="submit">Buscar</button>
        </form>
      </SearchBox>

      {animes?.length > 0 && !showPlayer ? (
        <ListContainer>
          <h1>Escolha o anime</h1>
          <AnimeList>
            {animes.length > 0 &&
              animes.map((anime) => (
                <AnimeItem onClick={() => setSelected(anime)} key={anime.id}>
                  <ImgAnime>
                    <img
                      src={`https://cdn.appanimeplus.tk/img/${anime.category_image}`}
                      alt=""
                    />
                  </ImgAnime>
                  <span>{anime.category_name}</span>
                </AnimeItem>
              ))}
          </AnimeList>
        </ListContainer>
      ) : (
        <span>Nenhum resultado encontrado</span>
      )}

      {eps && !showPlayer ? (
        <>
          <h1>Escolha um episódio</h1>
          <EpsContainer>
            <ListEps>
              {eps.map((ep) => (
                <Ep
                  onClick={(e) => {
                    setCurrentEp(ep);
                    togglePlayerVisibility();
                  }}
                  key={ep.video_id}
                >
                  {ep.title}
                </Ep>
              ))}
            </ListEps>
          </EpsContainer>
        </>
      ) : (
        ""
      )}

      <VideoContainer isVisible={showPlayer}>
        <span onClick={togglePlayerVisibility}>X</span>
        {currentEpURL !== "" && <video src={currentEpURL} controls />}
      </VideoContainer>
    </Container>
  );
}

export default Home;
