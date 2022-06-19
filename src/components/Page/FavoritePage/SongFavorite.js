import React from "react";
import styled from "styled-components";
import { useState, useContext } from "react";
import { listTopSong } from "../DiscoverPage/ContantsDiscover";
import { ChangePage } from "../../../App";
export default function SongFavorite({ song }) {
  const data = useContext(ChangePage);
  const addToLocalStorage = (e, index) => {
    e.stopPropagation();
    data.addItemToLocalStorage("liked", index);
    data.handleArrayLiked("liked");
  };
  const handPlayTopSong2 = (id) => {
    const iconPlayFavorite = document.querySelectorAll(".iconPlayFavorite");
    const songTopFavorite = document.querySelectorAll(".songTopFavorite");
    const indIcon = data.liked.indexOf(id);
    const namePage = data.namePage
    data.handleSetPagePlaying(namePage)

    console.log(data.liked)
    for (let i = 0; i < songTopFavorite.length; i++) {
      if (data.liked.indexOf(id) == i) {
        console.log(i)
        const song = listTopSong[data.liked[i] - 1]
        data.handleChangeDataSong(song);
        songTopFavorite[i].classList.add("active");
        iconPlayFavorite[i].classList.add("fa-pause");
        iconPlayFavorite[i].classList.remove("fa-play");
        data.handleChangePlay(true, data.liked[i]);
      } else {
        songTopFavorite[i].classList.remove("active");
        iconPlayFavorite[i].classList.add("fa-play");
        iconPlayFavorite[i].classList.remove("fa-pause");
      }
    }
  };
  const togglePlay2 = (e, id) => {
    e.stopPropagation();
    const namePage = data.namePage
    data.handleSetPagePlaying(namePage)
    const iconPlayFavorite = document.querySelectorAll(".iconPlayFavorite");
    const songTopFavorite = document.querySelectorAll(".songTopFavorite");
    for (let i = 0; i < songTopFavorite.length; i++) {
      if (data.liked.indexOf(id) == i) {
        songTopFavorite[i].classList.add("active");
        if (iconPlayFavorite[i].classList.contains("fa-pause")) {
          data.handleChangePlay(false, data.liked[i]);
          iconPlayFavorite[i].classList.add("fa-play");
          iconPlayFavorite[i].classList.remove("fa-pause");
        } else {
          const song = listTopSong[data.liked[i] - 1]
          data.handleChangeDataSong(song);
          console.log(song)
          data.handleChangePlay(true, data.liked[i]);
          iconPlayFavorite[i].classList.remove("fa-play");
          iconPlayFavorite[i].classList.add("fa-pause");
        }
      } else {
        songTopFavorite[i].classList.remove("active");
        iconPlayFavorite[i].classList.add("fa-play");
        iconPlayFavorite[i].classList.remove("fa-pause");
      }
    }
    console.log(data.play.index)
  };
  return (
    <SongWapper
      onClick={() => handPlayTopSong2(song.id + 1)}
      className={
        data.play.index == song.id + 1
          ? "songTopFavorite active"
          : "songTopFavorite"
      }
    >
      <IconPlaySong>
        <TagI
          onClick={(e) => togglePlay2(e, song.id + 1)}
          className={
            data.play.index == song.id + 1 && data.play.isPlaying
              ? "iconPlayFavorite fa fa-pause"
              : "iconPlayFavorite fa fa-play"
          }
          aria-hidden="true"
        ></TagI>
      </IconPlaySong>
      <AvatarSong src={song.image}></AvatarSong>
      <NameAndArtist>
        <NameSong>{song.name}</NameSong>
        <ArtistSong>{song.artist}</ArtistSong>
      </NameAndArtist>
      <NameAlbumOfSong>{song.album}</NameAlbumOfSong>
      <AddSongToFavorite>
        <TagI
          onClick={(e) => addToLocalStorage(e, song.id + 1)}
          className={
            data.liked.includes(song.id + 1)
              ? "fa fa-heart active"
              : "fa fa-heart"
          }
        ></TagI>
      </AddSongToFavorite>
      <TimeSong>{song.time}</TimeSong>
      <AnotherOptionSong>option</AnotherOptionSong>
    </SongWapper>
  );
}
const SongWapper = styled.div`
  display: grid;
  grid-template-columns: 5% 10% 20% 40% 5% 10% 10%;
  margin: 10px 0;
  padding: 6px 5px;
  align-items: center;
  border-radius: 15px;
  cursor: pointer;
  background-color: azure;
  &.active {
    background-color: #999;
  }
`;
const IconPlaySong = styled.div`
  text-align: center;
  cursor: pointer;
`;
const AvatarSong = styled.img`
  width: 50%;
  transform: translateX(50%);
  object-fit: cover;
  height: 100%;
`;
const NameAndArtist = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
`;
const NameSong = styled.div``;
const ArtistSong = styled.div``;
const NameAlbumOfSong = styled.div`
  text-align: center;
`;
const TagI = styled.i`
  cursor: pointer;
  width: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
  &.active {
    color: red;
  }
`;
const AddSongToFavorite = styled.div`
  text-align: center;
  cursor: pointer;
`;
const TimeSong = styled.div`
  text-align: center;
`;
const AnotherOptionSong = styled.div`
  text-align: center;
  cursor: pointer;
`;
