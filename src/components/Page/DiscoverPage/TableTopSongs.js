import React, { createContext } from "react";
import styled from "styled-components";
import { useState, useContext, useEffect } from "react";
import { listTopSong } from "./ContantsDiscover";
import { ChangePage } from "../../../App";

export default function TableTopSongs() {
  const data = useContext(ChangePage);
  useEffect(() => {
    if (localStorage.getItem("liked")) {
      data.handleArrayLiked("liked");
    }
  }, []);
  const handPlayTopSong = (id) => {
    const namePage = data.namePage
    data.handleSetPagePlaying(namePage)
    const iconPlay = document.querySelectorAll(".iconPlay");
    const songTop = document.querySelectorAll(".songTop");
    for (let i = 1; i <= songTop.length; i++) {
      if (i == id) {
        data.handleChangeDataSong(listTopSong[i - 1]);
        songTop[i - 1].classList.add("active");
        iconPlay[i - 1].classList.add("fa-pause");
        iconPlay[i - 1].classList.remove("fa-play");
        data.handleChangePlay(true, i);
      } else {
        songTop[i - 1].classList.remove("active");
        iconPlay[i - 1].classList.add("fa-play");
        iconPlay[i - 1].classList.remove("fa-pause");
      }
    }
  };
  const togglePlay = (e, id) => {
    e.stopPropagation();
    const namePage = data.namePage
    data.handleSetPagePlaying(namePage)
    const iconPlay = document.querySelectorAll(".iconPlay");
    const songTop = document.querySelectorAll(".songTop");
    for (let i = 1; i <= iconPlay.length; i++) {
      if (i == id) {
        songTop[i - 1].classList.add("active");
        if (iconPlay[i - 1].classList.contains("fa-pause")) {
          data.handleChangePlay(false, i);
          iconPlay[i - 1].classList.add("fa-play");
          iconPlay[i - 1].classList.remove("fa-pause");
        } else {
          data.handleChangeDataSong(listTopSong[i - 1]);
          data.handleChangePlay(true, i);
          iconPlay[i - 1].classList.remove("fa-play");
          iconPlay[i - 1].classList.add("fa-pause");
        }
      } else {
        songTop[i - 1].classList.remove("active");
        iconPlay[i - 1].classList.add("fa-play");
        iconPlay[i - 1].classList.remove("fa-pause");
      }
    }
  };
  const addToLocalStorage = (e, index) => {
    e.stopPropagation();
    data.addItemToLocalStorage("liked", index);
    data.handleArrayLiked("liked");
  };
  return (
    <Wapper>
      <Partron>
        <PartronFirstColumn></PartronFirstColumn>
        <PartronSecondColumn>#</PartronSecondColumn>
        <PartronThirdColumn>Track/Artist</PartronThirdColumn>
        <PartronFourColumn>Album</PartronFourColumn>
        <PartronFiveColumn>Time</PartronFiveColumn>
        <PartronSixColumn>Plays</PartronSixColumn>
        <PartronSevenColumn>Add</PartronSevenColumn>
      </Partron>
      <WapperColumnTable>
        {console.log(data.pagePlaying)}
        {listTopSong.map(function (song) {
          return (
            <ColumnTable
              onClick={() => handPlayTopSong(song.id + 1)}
              className={
                (data.play.index == song.id + 1 && data.pagePlaying == data.namePage) ? "songTop active" : "songTop"
              }
              key={song.id}
            >
              <FirstColumn>
                <TagI
                  onClick={(e) => togglePlay(e, song.id + 1)}
                  className={
                    data.play.index == song.id + 1 && data.play.isPlaying && data.pagePlaying == data.namePage
                      ? "iconPlay fa fa-pause"
                      : "iconPlay fa fa-play"
                  }
                  aria-hidden="true"
                ></TagI>
              </FirstColumn>
              <SecondColumn>{song.id}</SecondColumn>
              <ThirdColumn>
                <Image src={song.image}></Image>
                <InfoSong>
                  <NameSong>{song.name}</NameSong>
                  <ArtistSong>{song.artist}</ArtistSong>
                </InfoSong>
              </ThirdColumn>
              <FourColumn>{song.album}</FourColumn>
              <FiveColumn>{song.time}</FiveColumn>
              <SixColumn>{song.play}</SixColumn>
              <SevenColumn>
                <TagI
                  onClick={(e) => addToLocalStorage(e, song.id + 1)}
                  className={
                    data.liked.includes(song.id + 1)
                      ? "fa fa-heart active"
                      : "fa fa-heart"
                  }
                ></TagI>
              </SevenColumn>
            </ColumnTable>
          );
        })}
      </WapperColumnTable>
    </Wapper >
  );
}
const Wapper = styled.div`
  width: 100%;
`;
const WapperColumnTable = styled.div`
  height: 350px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 0px;
  }
  &:hover::-webkit-scrollbar-thumb {
    background: #888;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;
const Partron = styled.div`
  z-index: 2;
  height: 20px;
  display: grid;
  grid-template-columns: 5% 5% 40% 20% 10% 10% 10%;
  width: 100%;
  padding: 0 20px;
  margin-bottom: 10px;
  position: relative;
  &::before {
    position: absolute;
    width: 95%;
    height: 1px;
    background-color: black;
    transform: translateX(-50%);
    left: 50%;
    content: "";
    bottom: -5px;
  }
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
const Image = styled.img`
  margin-right: 10px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  object-fit: cover;
`;
const InfoSong = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
const NameSong = styled.div``;
const ArtistSong = styled.div``;
const FirstColumn = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  /* flex: 1; */
`;
const SecondColumn = styled.div`
  /* flex: 1; */
`;
const ThirdColumn = styled.div`
  display: flex;
  /* flex: 1; */
`;
const FourColumn = styled.div`
  /* flex: 1; */
`;
const FiveColumn = styled.div`
  /* flex: 1; */
`;
const SixColumn = styled.div`
  /* flex: 1; */
`;
const SevenColumn = styled.div`
  /* flex: 1; */
`;

const ColumnTable = styled.div`
  padding: 0 20px;
  height: 70px;
  cursor: pointer;
  display: grid;
  align-items: center;
  grid-template-columns: 5% 5% 40% 20% 10% 10% 10%;
  &.active {
    background-color: #999;
  }
`;
const PartronFirstColumn = styled.div`
  /* flex: 1; */
`;
const PartronSecondColumn = styled.div`
  /* flex: 1; */
`;
const PartronThirdColumn = styled.div`
  /* flex: 1; */
`;
const PartronFourColumn = styled.div`
  /* flex: 1; */
`;
const PartronFiveColumn = styled.div`
  /* flex: 1; */
`;
const PartronSixColumn = styled.div`
  /* flex: 1; */
`;
const PartronSevenColumn = styled.div`
  text-align: center;
  /* flex: 1; */
`;
