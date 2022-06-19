import React from "react";
import styled from "styled-components";
import { useState, useContext } from "react";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import { FaPlay } from "react-icons/fa";
import { handPlayTopSong, togglePlay, convertDataSong } from "../constantFunction";
import { listTopSong } from "../DiscoverPage/ContantsDiscover";
import { ChangePage } from "../../../App";

export default function DetailCurrentAlbum({ currentAlbum }) {
  const data = useContext(ChangePage);
  const [iconPlayAll, setIconPlayAll] = useState(false);
  const [deleteSong, setDeleteSong] = useState(0)
  const handleDeleteSongFromAlbum = (e, idCurrentAlbum, idSong) => {
    let id = 0;
    e.stopPropagation();
    const newList1 = currentAlbum.listSong.filter((song) => {
      return song.idSong != idSong
    })
    for (let i = 0; i < newList1.length; i++) {
      newList1[i].idSong = i;
    }
    currentAlbum.listSong = [...newList1]
    data.handleChangePlay(data.play.isPlaying, 0)
    setDeleteSong(deleteSong + 1)
  }
  return (
    <DisplayCurrentAlbum>
      <AvatarCurrentAlbum src={currentAlbum.listSong.length > 0 ? currentAlbum.listSong[0].imageSong : "./image/anh3.jpg"}></AvatarCurrentAlbum>
      <InfoCurrentAlbum>
        <NameCurrentAlbum>Cường Nguyễn</NameCurrentAlbum>
        <NameOfCurrentAlbum>{currentAlbum.name}</NameOfCurrentAlbum>
        <OptionCurrentAlbum>
          <PlayCurrentAlbum>
            {iconPlayAll ? <BsPauseFill onClick={() => setIconPlayAll(false)} />
              : <BsFillPlayFill onClick={() => setIconPlayAll(true)} />}

          </PlayCurrentAlbum>
          <AddCurrentAlbumToFavorite>
            Add To Favorite
          </AddCurrentAlbumToFavorite>
          <i style={{
            fontSize: "20px", marginLeft: "20px", cursor: "pointer", display: "flex",
            alignItems: "center", justifyContent: "center", width: "30px", height: "30px",
            borderRadius: "50%", backgroundColor: "white"
          }} className="fa fa-trash" aria-hidden="true"></i>
        </OptionCurrentAlbum>
        <ListSongOfCurrentAlbum>
          {currentAlbum.listSong.length > 0 ? currentAlbum.listSong.map((song) => {
            return <Song onClick={() => {
              handPlayTopSong(
                song.idSong + 1,
                ".songPage",
                ".iconPlay",
                data,
                currentAlbum.listSong
              )
            }
            }
              className={
                (data.play.index == song.idSong + 1 && data.playThisAlbum == currentAlbum.id) ? "songPage active" : "songPage"
              }
              data-id={currentAlbum.id}
              key={song.idSong}>
              <IconPlaySong>
                <TagI
                  onClick={(e) =>
                    togglePlay(
                      e,
                      song.idSong + 1,
                      ".songPage",
                      ".iconPlay",
                      data,
                      currentAlbum.listSong
                    )
                  }
                  className={
                    (data.play.index == song.idSong + 1 && data.playThisAlbum == currentAlbum.id && data.play.isPlaying)
                      ? "iconPlay fa fa-pause"
                      : "iconPlay fa fa-play"
                  }
                  aria-hidden="true"
                ></TagI>
              </IconPlaySong>
              <NameOfSong>{song.nameSong} - {song.artistSong}</NameOfSong>
              <TimeOfSong>{song.timeSong}</TimeOfSong>
              <DeleteSongFromAlbum onClick={(e) => handleDeleteSongFromAlbum(e, currentAlbum.id, song.idSong)} className="fa fa-trash" aria-hidden="true"></DeleteSongFromAlbum>
            </Song>
          }) : <h3>Không có bài hát nào trong album</h3>
          }

        </ListSongOfCurrentAlbum>
      </InfoCurrentAlbum>
    </DisplayCurrentAlbum>
  )
}
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
const DeleteSongFromAlbum = styled.i`
    text-align:center ;
    font-size: 21px ;
`
const DisplayCurrentAlbum = styled.div`
  display: grid;
  grid-template-columns: 48% 50%;
  margin-bottom: 10px;
  grid-column-gap: 2%;
`;
const AvatarCurrentAlbum = styled.img`
  width: 100%;
  object-fit: cover;
  height: 480px;
`;
const InfoCurrentAlbum = styled.div``;
const NameCurrentAlbum = styled.div`
  font-size: 24px;
`;
const NameOfCurrentAlbum = styled.div`
  font-size: 19px;
  margin: 10px 0;
`;
const OptionCurrentAlbum = styled.div`
  display: flex;
  margin-bottom: 10px;
  align-items: center;
`;
const PlayCurrentAlbum = styled.div`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: center;
  font-size: 21px;
  margin-right: 20px;
`;
const AddCurrentAlbumToFavorite = styled.div`
  padding: 8px 13px;
  background-color: white;
  cursor: pointer;

  border-radius: 15px;
`;
const ListSongOfCurrentAlbum = styled.div`
  height: 355px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 2px;
  }
  &:hover::-webkit-scrollbar-thumb {
    background: #888;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;
const Song = styled.div`
  display: grid;
  grid-template-columns: 10% 70% 10% 10%;
  padding: 15px 0;
  background-color: azure;
  border-radius: 13px;
  cursor: pointer;
  align-items: center;
  margin: 10px 0;
  &.playing {
    background-color: red;
  }
  &.active {
    background-color: #999;
  }
`;
const IconPlaySong = styled.div`
  text-align: center;
  cursor: pointer;
`;
const AddSongToFavorite = styled.div`
  text-align: center;
  font-size: 21px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
const NameOfSong = styled.div`
  text-align: center;
`;
const TimeOfSong = styled.div`
  text-align: center;
`;
