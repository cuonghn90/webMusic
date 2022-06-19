import React from "react";
import { useState, useContext } from "react";
import styled from "styled-components";
import { ChangePage } from "../../App";

export default function InfoSong() {
  const data = useContext(ChangePage);
  return (
    <WapperInfo>
      <AvatarSong>
        <Avatar
          className={data.play.isPlaying == true ? "active" : "pause"}
          src={data.dataSong.image}
        ></Avatar>
      </AvatarSong>
      <AboutSong>
        <NameSong>{data.dataSong.name}</NameSong>
        <ArtistSong>{data.dataSong.artist} </ArtistSong>
      </AboutSong>
    </WapperInfo>
  );
}
const NameSong = styled.p`
  font-size: 17px;
`;
const ArtistSong = styled.p`
  font-size: 17px;
`;
const AboutSong = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  margin-left: 20px;
`;
const WapperInfo = styled.div`
  width: 100%;
  display: inline-flex;
  /* justify-content: center; */
  height: 100%;
  align-items: center;
  position: relative;
  padding-left: 20px;
  /* left: -40px; */
`;
const AvatarSong = styled.div`
  width: 50px;
  height: 50px;
  overflow: hidden;
`;
const Avatar = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  animation: myfirst 5s linear infinite;

  &.active {
  }
  &.pause {
    animation-play-state: paused;
  }
  @keyframes myfirst {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
