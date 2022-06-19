import React from "react";
import { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import { ChangePage } from "../../../App";
import SongFavorite from "./SongFavorite";
import { listTopSong } from "../DiscoverPage/ContantsDiscover";
export default function FavoritePage() {
  const data = useContext(ChangePage);
  useEffect(() => {
    data.handleArrayLiked("liked");
  }, []);
  return (

    <WapperFavoritePage>
      <ListFavoriteSongs>
        {data.liked.length != 0 ? (
          listTopSong.map((song) => {
            if (data.liked.includes(song.id + 1)) {
              return (
                <SongFavorite song={song} key={song.id + 1}></SongFavorite>
              );
            }
          })
        ) : (
          <h2>Không có bài hát yêu thích nào</h2>

        )}
      </ListFavoriteSongs>
    </WapperFavoritePage>
  );
}

const WapperFavoritePage = styled.div`
  height: 510px;
  /* overflow-y: scroll; */
  padding: 20px 30px 0;
`;
const ListFavoriteSongs = styled.div`
  height: 500px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 0px;
  }
  /* margin-top: 20px; */
`;
