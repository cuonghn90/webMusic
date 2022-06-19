import React from "react";
import styled from "styled-components";
import { useState, useContext, useRef } from "react";
import { ChangePage } from "../../App";
export default function VolumeSong() {
  const getWidthVolume = useRef();
  const data = useContext(ChangePage);
  const handleVolume = () => {
    data.handleSetIsMuted();
    // const volume = document.querySelector(".volume i");
    // const currentVolume = document.querySelector(".currentVolume");
    // if (volume.classList.contains("fa-volume-up")) {
    //   volume.classList.remove("fa-volume-up");
    //   volume.classList.add("fa-volume-off");
    //   currentVolume.style.display = "none";
    // } else {
    //   volume.classList.add("fa-volume-up");
    //   volume.classList.remove("fa-volume-off");
    //   currentVolume.style.display = "block";
    // }
  };
  const getPositionMouse = (e) => {
    e.stopPropagation();
    const x = e.nativeEvent.offsetX / getWidthVolume.current.offsetWidth;
    const percentTime = x;
    data.handleSetNumberVolume(percentTime);
    if (data.isMuted) {
      data.handleSetIsMuted();
    }
    document.querySelector(".currentVolume").style.width = `${x * 100}%`;
    // document.querySelector(".radioSong").currentTime =
    //   percentTime * document.querySelector(".radioSong").duration;
    // document.querySelector(".radioSong").play();
    // console.log(e.nativeEvent.offsetX, getWidthVolume.current.offsetWidth);
  };
  return (
    <WapperVolume>
      <IconVolume className="volume" onClick={() => handleVolume()}>
        <i
          className={data.isMuted ? "fa fa-volume-down" : "fa fa-volume-up"}
          aria-hidden="true"
        ></i>
      </IconVolume>
      <LevelVolume onClick={(e) => getPositionMouse(e)} ref={getWidthVolume}>
        <CurrentLevelVolume
          style={data.isMuted ? { display: "none" } : { display: "block" }}
          className="currentVolume"
        ></CurrentLevelVolume>
      </LevelVolume>
    </WapperVolume>
  );
}
const WapperVolume = styled.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
`;
const IconVolume = styled.div`
  font-size: 24px;
  height: 30px;
  width: 30px;
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-right: 10px;
`;
const LevelVolume = styled.div`
  width: 150px;
  height: 6px;
  background-color: red;
  cursor: pointer;
  z-index: 1;
  position: relative;
  border-radius: 15px;
`;
const CurrentLevelVolume = styled.div`
  position: absolute;
  height: 100%;
  top: 0;
  left: 0;
  width: 50%;
  background-color: black;
  border-radius: 15px;
`;
