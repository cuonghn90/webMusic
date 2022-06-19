import React from "react";
import styled from "styled-components";
import { useState, useContext, useEffect, useRef } from "react";
import { ChangePage } from "../../App";
import { listTopSong } from "../Page/DiscoverPage/ContantsDiscover";
import { convertDataSong } from "../Page/constantFunction";
import { listAlbum } from "../Page/AlbumsPage/constantListAlbum";
import { listArtist } from "../Page/constListArtist";
import { listSongNhacKpop, listSongNhacRemix, listSongNhacTre, listSongNhacVang } from "../Page/SongPage/constantTypeSong";
export default function ProgressSong() {
  const data = useContext(ChangePage);
  const getWidthProcess = useRef();
  useEffect(
    function () {
      const isPlaying = data.play.isPlaying;
      if (isPlaying == true) {
        document.querySelector(".radioSong").play();
      } else {
        document.querySelector(".radioSong").pause();
      }
    },
    [data.play.isPlaying]
  );
  useEffect(
    function () {
      const isPlaying = data.play.isPlaying;
      if (isPlaying == true) {
        document.querySelector(".radioSong").play();
      } else {
        document.querySelector(".radioSong").pause();
      }
    },
    [data.dataSong.source]
  );
  useEffect(
    function () {
      const isMuted = data.isMuted;
      if (isMuted == true) {
        document.querySelector(".radioSong").muted = true;
      } else {
        document.querySelector(".radioSong").muted = false;
      }
    },
    [data.isMuted]
  );
  useEffect(
    function () {
      document.querySelector(".radioSong").volume = data.numberVolume;
    },
    [data.numberVolume]
  );
  const playingInPage = (listSong) => {
    if (data.isLoopSong) {
      document.querySelector(".radioSong").currentTime = 0;
      document.querySelector(".radioSong").play();
    } else if (data.isRandom) {
      const indexSongRandom = Math.floor(Math.random() * (listSong.length));
      if (data.namePage == "AlbumsPage") {
        data.handleChangeDataSong(listSong[indexSongRandom]);
      }
      else if (data.namePage == "ArtistPage") {
        data.handleChangeDataSong(listSong[indexSongRandom]);
      }
      else {
        data.handleChangeDataSong(listSong[indexSongRandom]);
      }
      data.handleChangePlay(true, listSong[indexSongRandom].id ? listSong[indexSongRandom].id + 1 : listSong[indexSongRandom].idSong + 1);
    } else {
      let index = data.dataSong.id;
      const listId = listSong.map((song) => song.id ? song.id : song.idSong)
      let endId = listId.indexOf(data.dataSong.id)
      if (endId + 1 == listId.length) {
        if (data.namePage == "AlbumsPage") {
          data.handleChangeDataSong(listSong[0]);
        }
        else if (data.namePage == "ArtistPage") {
          data.handleChangeDataSong(listSong[0]);
        }
        else {
          data.handleChangeDataSong(listSong[0]);
        }
        data.handleChangePlay(true, listSong[0].id ? listSong[0].id + 1 : listSong[0].idSong + 1);
      } else {
        if (data.namePage == "AlbumsPage") {
          data.handleChangeDataSong(listSong[index]);
        }
        else if (data.namePage == "ArtistPage") {
          data.handleChangeDataSong(listSong[endId + 1]);
        }
        else {
          data.handleChangeDataSong(listSong[endId + 1]);
        }
        data.handleChangePlay(true, listSong[endId + 1].id ? listSong[endId + 1].id + 1 : listSong[endId + 1].idSong + 1);
      }
    }
  };
  const playingInFavoritePage = (listSong) => {
    if (data.isLoopSong) {
      document.querySelector(".radioSong").currentTime = 0;
      document.querySelector(".radioSong").play();
    } else if (data.isRandom) {
      const indexSongRandom =
        listSong[Math.floor(Math.random() * (listSong.length - 1))] - 1;
      data.handleChangeDataSong(listTopSong[indexSongRandom]);
      data.handleChangePlay(true, indexSongRandom + 1);
    } else {
      const index = data.dataSong.id + 1;
      const indNext = listSong.indexOf(index);
      if (indNext >= listSong.length - 1) {
        data.handleChangeDataSong(listTopSong[listSong[0] - 1]);
        data.handleChangePlay(true, listSong[0]);
      } else {
        data.handleChangeDataSong(listTopSong[listSong[indNext + 1] - 1]);
        data.handleChangePlay(true, listSong[indNext + 1]);
      }
    }
  };
  const handleUpdateRadio = () => {
    const timeCurrent = document.querySelector(".radioSong").currentTime;
    const percentTime =
      (timeCurrent / document.querySelector(".radioSong").duration) * 100;
    document.querySelector(".currentProgress").style.width = `${percentTime}%`;
    document.querySelector(".timeCurrent").innerHTML =
      Math.floor(timeCurrent / 60) +
      ":" +
      (Math.floor(timeCurrent % 60) < 10
        ? "0" + Math.floor(timeCurrent % 60)
        : Math.floor(timeCurrent % 60));
    if (
      document.querySelector(".radioSong").currentTime ==
      document.querySelector(".radioSong").duration
    ) {
      if (data.namePage == "DiscoverPage") {
        playingInPage(listTopSong);
      } else if (data.namePage == "FavoritePage") {
        playingInFavoritePage(data.liked);
      } else if (data.namePage == "ArtistPage") {
        playingInPage(listArtist[data.artist].topSongs);
      }
      else if (data.namePage == "AlbumsPage") {
        if (data.idCurrentAlbum == data.playThisAlbum) {
          playingInPage(listAlbum[data.idCurrentAlbum].listSong);
        }
        else {
          playingInPage(listAlbum[data.playThisAlbum].listSong);
        }
      }
      else if (data.namePage == "SongPage") {
        if (data.typeSong == "NhacTre" && data.playThisTypeSong == "NhacTre") {
          playingInPage(listSongNhacTre);
        } else if (data.typeSong == "NhacVang" && data.playThisTypeSong == "NhacVang") {
          playingInPage(listSongNhacVang);
        } else if (data.typeSong == "NhacKpop" && data.playThisTypeSong == "NhacKpop") {
          playingInPage(listSongNhacKpop);
        } else if (data.typeSong == "NhacRemix" && data.playThisTypeSong == "NhacRemix") {
          playingInPage(listSongNhacRemix);
        } else {
          if (data.playThisTypeSong == "NhacTre") {
            playingInPage(listSongNhacTre);
          } else if (data.playThisTypeSong == "NhacKpop") {
            playingInPage(listSongNhacKpop);
          } else if (data.playThisTypeSong == "NhacVang") {
            playingInPage(listSongNhacVang);
          } else if (data.playThisTypeSong == "NhacRemix") {
            playingInPage(listSongNhacRemix);
          } else {
            playingInPage(listTopSong);
          }
        }
      }
    }
  };
  const getPositionMouse = (e) => {
    e.stopPropagation();
    const percentTime =
      e.nativeEvent.offsetX / getWidthProcess.current.offsetWidth;
    data.handleSetTimeProcess(percentTime);
    document.querySelector(".radioSong").currentTime =
      percentTime * document.querySelector(".radioSong").duration;
    if (data.play.isPlaying) {
      document.querySelector(".radioSong").play();
    }
  };
  return (
    <Wapper>
      <Time className="timeCurrent">0:00</Time>
      <TaskProgress onClick={(e) => getPositionMouse(e)} ref={getWidthProcess}>
        <CurrentProgress className="currentProgress"></CurrentProgress>
      </TaskProgress>
      <audio
        controls
        hidden
        className="radioSong"
        ref={data.radioElement}
        src={data.dataSong.source}
        onTimeUpdate={() => handleUpdateRadio()}
      ></audio>
      <Time className="timeSong">{data.dataSong.time}</Time>
    </Wapper>
  );
}
const Wapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;
const Time = styled.p`
  font-size: 17px;
  margin: 0 13px;
`;
const TaskProgress = styled.div`
  width: 50%;
  flex: 1;
  height: 5px;
  position: relative;
  cursor: pointer;
  border-radius: 15px;
  background-color: #999;
`;
const CurrentProgress = styled.div`
  width: 0%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 15px;
  background-color: #333;
`;
