import React from "react";
import styled from "styled-components";
import { useState, useContext } from "react";
import { IoIosOptions } from "react-icons/io";
import {
  addToLocalStorage,
  handPlayTopSong,
  togglePlay,
} from "../constantFunction";
import { ChangePage } from "../../../App";
import { listTopSong } from "../DiscoverPage/ContantsDiscover";
import { listAlbum } from "../AlbumsPage/constantListAlbum";
import { ListMp3 } from "../../NavbarMusic/contants";
import { convertSongToListSong } from "../constantFunction";
export default function Song({ song, listTypeSong, typeSong1 }) {
  const data = useContext(ChangePage);
  const [listAlbumSongAdd, setListAlbumSongAdd] = useState([])
  return (
    <SongWapper
      onClick={() =>
        handPlayTopSong(
          song.id + 1,
          ".songPage",
          ".iconPlay",
          data,
          listTypeSong
        )
      }
      data-id={typeSong1}
      className={
        (data.play.index == song.id + 1 && data.typeSong == data.playThisTypeSong) ? "songPage active" : "songPage"
      }
    >
      <IconPlaySong>
        <TagI
          onClick={(e) =>
            togglePlay(
              e,
              song.id + 1,
              ".songPage",
              ".iconPlay",
              data,
              listTopSong
            )
          }
          data-id={typeSong1}
          className={
            (data.play.index == song.id + 1 && data.typeSong == data.playThisTypeSong && data.play.isPlaying)
              ? "iconPlay fa fa-pause"
              : "iconPlay fa fa-play"
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
          onClick={(e) => addToLocalStorage(e, song.id + 1, data)}
          className={
            data.liked.includes(song.id + 1)
              ? "fa fa-heart active"
              : "fa fa-heart"
          }
        ></TagI>
      </AddSongToFavorite>
      <TimeSong>{song.time}</TimeSong>
      <AnotherOptionSong >
        <IoIosOptions onClick={(e) => {
          e.stopPropagation()
          document.querySelectorAll(".tableOption")[song.id].classList.toggle("active")
        }} />
        <TableOption className="tableOption">
          <Option onClick={(e) => {
            e.stopPropagation()
          }}>
            <Icon className="fa fa-download" aria-hidden="true">
            </Icon>
            <Text href={song.source} download> Download</Text>
          </Option>
          <Option onClick={(e) => {
            e.stopPropagation()
          }}>
            <Icon className="fa fa-download" aria-hidden="true">
            </Icon>
            <Text onClick={(e) => {
              e.stopPropagation()
              document.querySelectorAll(".chooseAlbum")[song.id].classList.toggle("active")
            }}>
              Thêm vào album
            </Text>
          </Option>
          <ChooseAlbumToAddSong className="chooseAlbum" onClick={(e) => { e.stopPropagation() }}>
            <TextChooseAlbum>Chon album de them</TextChooseAlbum>
            <DisplayListAlbums>
              {listAlbum.map((album) => {
                return (<ChooseAlbum key={album.id}>
                  <Input type="checkbox" onClick={(e) => {
                    e.stopPropagation()

                  }} onChange={() => {
                    if (listAlbumSongAdd.includes(album.id)) {
                      const newList = listAlbumSongAdd.filter((param) => {
                        return param != album.id
                      })
                      setListAlbumSongAdd([...newList])
                    } else {
                      setListAlbumSongAdd([...listAlbumSongAdd, album.id])
                    }
                  }}>
                  </Input>
                  <NameAlbum>
                    {album.name}
                  </NameAlbum>
                </ChooseAlbum>)
              })}
            </DisplayListAlbums>
            <Buttons>
              <ButtonCancel onClick={(e) => {
                e.stopPropagation()
                document.querySelectorAll(".chooseAlbum")[song.id].classList.remove("active")
              }}>Huy</ButtonCancel>
              <ButtonAdd onClick={(e) => {
                e.stopPropagation()
                document.querySelectorAll(".chooseAlbum")[song.id].classList.remove("active")
                listAlbumSongAdd.map((id) => {
                  if (!listAlbum[id].listSong.includes(song.id)) {
                    const newSong = convertSongToListSong(song)
                    newSong.idSong = listAlbum[id].listSong.length
                    let check = true
                    listAlbum[id].listSong.map((song) => {
                      if (song.nameSong == newSong.nameSong && song.artistSong == newSong.artistSong) {
                        check = false
                      }
                    })
                    if (check) {
                      listAlbum[id].listSong.push(newSong)
                    }
                  }
                })
              }}>Them</ButtonAdd>
            </Buttons>
          </ChooseAlbumToAddSong>
        </TableOption>
      </AnotherOptionSong>
    </SongWapper >
  );
}
const ChooseAlbumToAddSong = styled.div`
  position: fixed;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
  z-index:1000;
  min-width:350px;
  height:300px;
  background-color: honeydew;
  display:none;
  flex-direction: column;
  justify-content: space-around;
  cursor: default;
  &.active{
    display: flex;
  }
`
const TextChooseAlbum = styled.h3`
  font-size: 19px;
  margin-bottom: 20px;
  margin-top:10px;
`
const DisplayListAlbums = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const ChooseAlbum = styled.div`
  display:flex;
  margin:5px 0;
  align-items:center;
`
const Input = styled.input`
margin:0 20px 0 0;
cursor: pointer;
`
const NameAlbum = styled.p`
  font-size: 17px;
`
const Buttons = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`
const ButtonAdd = styled.div`
  padding: 10px;
  border-radius: 5px;
  background-color:blanchedalmond ;
  &:hover{
    background-color:crimson;
  }
`
const ButtonCancel = styled.div`
  padding: 10px;
  border-radius: 5px;
  background-color:blanchedalmond;
  &:hover{
    background-color:crimson;
  }
`
const Option = styled.div`
  position: relative;
  width:100% ;
  display:flex ;
  align-items:center ;
  padding:5px 20px;
  overflow:hidden;
  &:hover{
    background-color:aqua;
  }
  &:nth-child(2){
    &::before{
    content:"";
    background-color:black ;
    width:100%;
    height:0px;
    position:absolute;
    left:0px;
    bottom:0px;
  }
  }
  &::before{
    content:"";
    background-color:black ;
    width:100%;
    height:1px;
    position:absolute;
    left:0px;
    bottom:0px;
  }
`
const Icon = styled.i`
  height:100%;
  display:block ;
  font-size: 17px ;
`
const Text = styled.a`
  height:100%;
  display:block ;
  font-size: 17px ;
  text-decoration:none ;
  margin-left:10px ;
  color:black;
`
const TableOption = styled.div`
  border-radius: 10px ;
  position:absolute ;
  left:-150px;
  top:-80%;
  background-color:white ;
  color:black;
  overflow: hidden;
  display:none ;
  &:first-child{
    border-top-left-radius:10px ;
    border-top-right-radius:10px ;
  }
  
  &.active{
    display:block;
  }
`
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
const SongWapper = styled.div`
  display: grid;
  grid-template-columns: 5% 10% 25% 35% 5% 10% 10%;
  margin: 10px 0;
  padding: 6px 5px;
  align-items: center;
  border-radius: 15px;
  background-color: azure;
  cursor: pointer;
  &.active {
    background-color: #999;
  }
`;
const IconPlaySong = styled.div`
  text-align: center;
  cursor: pointer;
  font-size: 17px;
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
const AddSongToFavorite = styled.div`
  text-align: center;
  cursor: pointer;
  font-size: 21px;
`;
const TimeSong = styled.div`
  text-align: center;
`;
const AnotherOptionSong = styled.div`
position:relative ;
  text-align: center;
  font-size: 21px;
  cursor: pointer;
`;
