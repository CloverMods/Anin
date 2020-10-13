import styled from "styled-components";

import Variables from "../../global/variables";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background: ${Variables.backgroundDark};
  padding: ${Variables.space} ${Variables.spaceXl};
  color: ${Variables.white};

  @media (max-width: 746px) {
    padding: ${Variables.spaceXs} ${Variables.spaceMd};
  }
`;

export const SearchBox = styled.div`
  width: 100%;
  padding: 20px;

  > form {
    margin: ${Variables.space} 0;
    > input {
      width: 100%;
      max-width: 400px;
      padding: 10px;
      border-radius: 15px;
      border: none;
      background: ${Variables.cinza};
      color: ${Variables.white};
    }
    > button {
      padding: 10px;
      background: ${Variables.salmao};
      border: none;
      color: ${Variables.white};
      margin-left: ${Variables.spaceSm};
      min-width: 100px;
      font-weight: bold;
      border-radius: 15px;
    }
  }

  @media (max-width: 605px) {
    > form {
      display: flex;
      flex-direction: column;
      align-items: center;

      > button {
        width: 100%;
        max-width: 400px;
        margin-left: 0;
        margin-top: ${Variables.spaceXs};
      }
    }
  }
`;

export const ListContainer = styled.div`
  color: ${Variables.white};

  > h1 {
    margin-bottom: ${Variables.space};
  }
`;

export const AnimeList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  width: 100%;
  grid-gap: 10px;
  grid-row-gap: 20px;

  @media (max-width: 746px) {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }

  @media (max-width: 521px) {
    place-items: center;
  }
`;

export const ImgAnime = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  margin-bottom: ${Variables.spaceSm};

  > img {
    width: 100%;
    object-fit: cover;
  }
`;

export const AnimeItem = styled.li`
  width: 180px;
  cursor: pointer;
  transition: all 0.2s ease-out;

  span {
    display: block;
    padding: 10px;
    color: ${Variables.white};
  }

  &:hover {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.47);
  }

  @media (max-width: 746px) {
    width: 150px;
  }
`;

export const EpsContainer = styled.div`
  color: ${Variables.white};

  > h1 {
    margin: ${Variables.space} 0;
  }
`;

export const ListEps = styled.ul`
  margin-top: ${Variables.space};
  display: flex;
  flex-direction: column;

  width: 100%;
`;

export const Ep = styled.li`
  padding: ${Variables.spaceSm};
  margin: ${Variables.spaceXs} 0;
  background: ${Variables.cinza};
  color: ${Variables.white};
  border-radius: 8px;
  cursor: pointer;
`;

export const VideoContainer = styled.div`
  position: absolute;
  display: ${(props) => (props.isVisible ? "unset" : "none")};
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.77);

  span {
    position: absolute;
    right: 40px;
    top: 40px;
    cursor: pointer;
  }

  > video {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 800px;
    width: 96%;
    margin: 0 auto;
  }
`;
