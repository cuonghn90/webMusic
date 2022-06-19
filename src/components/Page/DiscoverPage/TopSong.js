import React from "react";
import styled from "styled-components";
import TableTopSongs from "./TableTopSongs";

export default function TopSong() {
  return (
    <Wapper>
      <WapperHeader>
        <TextTopSongs>Top Songs</TextTopSongs>
        <TopFollowDWM>
          <Top className="TopDay active">Today</Top>
          <Top className="TopWeek">Week</Top>
          <Top className="TopMonth">Month</Top>
        </TopFollowDWM>
      </WapperHeader>
      <TableTopSongs></TableTopSongs>
    </Wapper>
  );
}
const Wapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 65%;
  /* background-color: red; */
  height: 430px;
`;
const WapperHeader = styled.div`
  align-items: center;
  display: flex;
  margin-bottom: 30px;
`;
const TextTopSongs = styled.p`
  margin-right: 50px;
  font-size: 20px;
`;
const TopFollowDWM = styled.div`
  display: flex;
  align-items: center;
`;
const Top = styled.div`
  cursor: pointer;
  position: relative;
  &.TopWeek {
    margin: 0 20px;
  }
  &.active {
    font-size: 18px;
  }
  &.active::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 2px;
    bottom: -5px;
    background-color: red;
  }
`;
