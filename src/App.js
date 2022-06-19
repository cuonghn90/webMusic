import React from "react";
import { useState, createContext, useRef } from "react";
import "./App.css";
import ContentRight from "./components/Page/ContentRight/ContentRight";
import FooterWeb from "./components/Footer/FooterWeb";
import ContentLeft from "./components/NavbarMusic/ContentLeft";

export const ChangePage = createContext();
function App() {
  const [liked, setLiked] = useState([]);
  const radioElement = useRef();
  const [isLoopSong, setIsLoopSong] = useState(false);
  const [isRandom, setIsRandom] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [timeProcess, setTimeProcess] = useState(0);
  const [numberVolume, setNumberVolume] = useState(0.5);
  const [namePage, setNamePage] = useState("DiscoverPage");
  const [play, setPlay] = useState({
    isPlaying: false,
    index: 1,
  });
  const [artist, setArtist] = useState(0)
  const [nameListSong, setNameListSong] = useState([]);
  const [typeSong, setTypeSong] = useState("All");
  const [pagePlaying, setPagePlaying] = useState("")
  const [playThisTypeSong, setPlayThisTypeSong] = useState("");
  const handleSetPlayThisTypeSong = (name) => {
    setPlayThisTypeSong(name)
  }
  const [playThisAlbum, setPlayThisAlbum] = useState(-1);
  const handSetArtist = (id) => {
    setArtist(id)
  }
  const handleSetPagePlaying = (page) => {
    console.log(page)
    setPagePlaying(page)
  }
  const handleSetPlayThisAlbum = (bool) => {
    setPlayThisAlbum(bool)
  }
  const [idCurrentAlbum, setIdCurrentAlbum] = useState(0);
  const handleSetIdCurrentAlbum = (id) => {
    setIdCurrentAlbum(id)
  };
  const handleSetTypeSong = (listTypeSongEN, index) => {
    setTypeSong(listTypeSongEN[index]);
  };
  const handleSetNameListSong = (listTypeSong) => {
    setNameListSong([...listTypeSong]);
  };
  const setItemLocalStorage = (name, value) => {
    localStorage.setItem(name, value);
  };
  const getItemLocalStorage = (name) => {
    return localStorage.getItem(name);
  };
  const handleArrayLiked = (name) => {
    if (localStorage.getItem(name)) {
      setLiked([...JSON.parse(localStorage.getItem(name))].sort());
    }
    else {
      setLiked([])
    }
  };
  const addItemToLocalStorage = (name, index) => {
    if (localStorage.getItem(name)) {
      const listLiked = JSON.parse(localStorage.getItem(name));
      if (listLiked.includes(index)) {
        const newListLiked = listLiked.filter((id) => {
          return id != index;
        });
        localStorage.setItem(name, JSON.stringify([...newListLiked]));
      } else {
        localStorage.setItem(name, JSON.stringify([...listLiked, index]));
      }
    } else {
      localStorage.setItem(name, JSON.stringify([index]));
    }
  };
  const handleSetIsLoopSong = () => {
    setIsLoopSong(!isLoopSong);
  };
  const handleSetTimeProcess = (time) => {
    setTimeProcess(time);
  };
  const handleSetNumberVolume = (numberVolume) => {
    setNumberVolume(numberVolume);
  };
  const handleSetIsMuted = () => {
    setIsMuted(!isMuted);
  };
  const handleSetIsRandom = () => {
    setIsRandom(!isRandom);
  };
  const handleSetIsLoopSong2 = () => {
    setIsLoopSong(false);
  };
  const handleSetIsRandom2 = () => {
    setIsRandom(false);
  };
  const [dataSong, setDataSong] = useState({
    id: 0,
    image: "./image/CenturesImg.jpg",
    artist: "Fall All Boy",
    name: "Centures",
    album: "album 1",
    time: 3.47,
    play: 81001,
    source: "./mp3/Centuries.mp3",
  });
  const handleChangeNamePage = (text) => {
    setNamePage(text);
  };
  const handleChangePlay = (isPlaying, index) => {
    setPlay({
      isPlaying: isPlaying,
      index: index,
    });
  };
  const handleChangeDataSong = (song) => {
    const newData = {
      id: song.id ? song.id : song.idSong,
      image: song.image ? song.image : song.imageSong,
      artist: song.artist ? song.artist : song.artistSong,
      name: song.name ? song.name : song.nameSong,
      album: song.album ? song.album : song.albumSong,
      time: song.time ? song.time : song.timeSong,
      play: song.time ? song.time : song.timeSong,
      source: song.source ? song.source : song.sourceSong,
    }
    newData.id = song.id ? song.id : song.idSong
    setDataSong(newData);
    console.log(newData)
  };
  return (
    <ChangePage.Provider
      value={{
        namePage,
        radioElement,
        isMuted,
        isLoopSong,
        isRandom,
        timeProcess,
        numberVolume,
        liked,
        play,
        dataSong,
        typeSong,
        nameListSong,
        idCurrentAlbum,
        playThisAlbum,
        playThisTypeSong,
        artist,
        pagePlaying,
        handleSetPagePlaying,
        handSetArtist,
        handleSetPlayThisTypeSong,
        handleSetPlayThisAlbum,
        handleSetIdCurrentAlbum,
        handleSetNameListSong,
        handleSetTypeSong,
        handleChangeDataSong,
        handleChangePlay,
        handleChangeNamePage,
        handleArrayLiked,
        handleSetNumberVolume,
        handleSetTimeProcess,
        handleSetIsMuted,
        handleSetIsLoopSong,
        handleSetIsRandom,
        handleSetIsLoopSong2,
        handleSetIsRandom2,
        setItemLocalStorage,
        getItemLocalStorage,
        addItemToLocalStorage,
      }}
    >
      <ContentLeft></ContentLeft>
      <ContentRight namePage={namePage}></ContentRight>
      <FooterWeb></FooterWeb>
    </ChangePage.Provider>
  );
}
export default App;
