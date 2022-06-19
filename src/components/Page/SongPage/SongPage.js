import React from "react";
import styled from "styled-components";
import { useState, useEffect, useContext } from "react";
import Song from "./Song";
import {
  listTypeSongEN,
  listTypeSongVN,
  listSongNhacTre,
  listSongNhacKpop,
  listSongNhacVang,
  listSongNhacRemix,
} from "./constantTypeSong";
import { listTopSong } from "../DiscoverPage/ContantsDiscover";
import { ChangePage } from "../../../App";
export default function SongPage() {
  const data = useContext(ChangePage);
  const [typeSong1, setTypeSong1] = useState("")
  useEffect(() => {
    const name = "listSong" + data.typeSong;
    setTypeSong1(data.typeSong)
    if (name == "listSongNhacTre") {
      data.handleSetNameListSong([...listSongNhacTre]);
    } else if (name == "listSongNhacKpop") {
      data.handleSetNameListSong([...listSongNhacKpop]);
    } else if (name == "listSongNhacVang") {
      data.handleSetNameListSong([...listSongNhacVang]);
    } else if (name == "listSongNhacRemix") {
      data.handleSetNameListSong([...listSongNhacRemix]);
    } else {
      data.handleSetNameListSong([...listTopSong]);
    }
  }, [data.typeSong]);
  return (
    <WapperSongPage>
      <OptionTypeSongs>
        {listTypeSongVN.map((type, index) => {
          return (
            <TypeSong
              key={index}
              onClick={() => data.handleSetTypeSong(listTypeSongEN, index)}
              className={data.typeSong == listTypeSongEN[index] ? "active" : ""}
            >
              {type}
            </TypeSong>
          );
        })}
      </OptionTypeSongs>
      <ListSongs>
        {data.typeSong == "All"
          ? listTopSong.map((song) => {
            return (
              <Song
                song={song}
                listTypeSong={data.nameListSong}
                key={song.id}
                typeSong1={typeSong1}
              ></Song>
            );
          })
          : data.nameListSong.map((song) => {
            return (
              <Song
                song={song}
                listTypeSong={data.nameListSong}
                key={song.id}
                typeSong1={typeSong1}
              ></Song>
            );
          })}
      </ListSongs>
    </WapperSongPage>
  );
}
const WapperSongPage = styled.div`
  height: 510px;
  padding: 30px 40px 0;
`;
const OptionTypeSongs = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  align-items: center;
  &::before {
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: gray;
    content: "";
    bottom: -10px;
  }
`;
const TypeSong = styled.div`
  margin: 0 10px;
  padding: 10px;
  background-color: aliceblue;
  border-radius: 15px;
  cursor: pointer;
  &.active {
    background-color: black;
    color: white;
  }
`;
const ListSongs = styled.div`
  margin-top: 30px;
  height: 400px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 5px;
  }
  &:hover::-webkit-scrollbar-thumb {
    background: #888;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;
