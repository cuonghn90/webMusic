import React from "react";
import styled from "styled-components";
import SongPage from "../SongPage/SongPage";
import DiscoverPage from "../DiscoverPage/DiscoverPage";
import AlbumsPage from "../AlbumsPage/AlbumsPage";
import ArtistPage from "../ArtistPage/ArtistPage";
import Header from "../Header/Header";
import MusicVideosPage from "../MusicVideosPage/MusicVideosPage";
import RadioPage from "../RadioPage/RadioPage";
import HistoryPage from "../HistoryPage/HistoryPage";
import FavoritePage from "../FavoritePage/FavoritePage";
import DownloadItemsPage from "../DownloadItemsPage/DownloadItemsPage";
import LocalFilesPage from "../LocalFilesPage/LocalFilesPage";
import ReggeaMusicPage from "../ReggeaMusicPage/ReggeaMusicPage";
import DangdutMusicPage from "../DangdutMusicPage/DangdutMusicPage";
import PopMusicPage from "../PopMusicPage/PopMusicPage";
export default function ContentRight({ namePage }) {
  return (
    <WapperContentRight>
      <Header></Header>
      {namePage === "SongPage" ? <SongPage></SongPage> : ""}
      {namePage === "DiscoverPage" ? <DiscoverPage></DiscoverPage> : ""}
      {namePage === "AlbumsPage" ? <AlbumsPage></AlbumsPage> : ""}
      {namePage === "ArtistPage" ? <ArtistPage></ArtistPage> : ""}
      {namePage === "RadioPage" ? <RadioPage></RadioPage> : ""}
      {namePage === "FavoritePage" ? <FavoritePage></FavoritePage> : ""}
      {namePage === "HistoryPage" ? <HistoryPage></HistoryPage> : ""}
      {namePage === "LocalFilesPage" ? <LocalFilesPage></LocalFilesPage> : ""}
      {namePage === "ReggeaMusicPage" ? (
        <ReggeaMusicPage></ReggeaMusicPage>
      ) : (
        ""
      )}
      {namePage === "DangdutMusicPage" ? (
        <DangdutMusicPage></DangdutMusicPage>
      ) : (
        ""
      )}
      {namePage === "PopMusicPage" ? <PopMusicPage></PopMusicPage> : ""}
      {namePage === "DownloadItemsPage" ? (
        <DownloadItemsPage></DownloadItemsPage>
      ) : (
        ""
      )}
      {namePage === "MusicVideosPage" ? (
        <MusicVideosPage></MusicVideosPage>
      ) : (
        ""
      )}
    </WapperContentRight>
  );
}
const WapperContentRight = styled.div`
  /* height: 570px; */
  width: 80%;
  float: right;
  position: relative;
  top: 0px;
  right: 0px;
  background-color: rgb(153, 221, 255);
`;
