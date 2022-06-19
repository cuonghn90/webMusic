import React from "react";
import styled from "styled-components";
import { IoIosOptions } from "react-icons/io";
import { FaPlay } from "react-icons/fa";
import { FcNext, FcPrevious } from "react-icons/fc";
import { useState, useContext } from "react";
import { AiTwotoneHeart } from "react-icons/ai";
import { listArtist } from "../constListArtist"
import { ChangePage } from "../../../App";
import { addToLocalStorage } from "../constantFunction";
export default function ArtistPage() {
  const data = useContext(ChangePage);
  var lengthFeature = listArtist[data.artist].featureArtist.length
  var numberNext = lengthFeature - 4
  var numberPrev = 0
  const handlePrevFeature = () => {
    const slideFeature = document.querySelector(".slideFeature")
    if (numberPrev > 0) {
      numberPrev -= 1;
      numberNext += 1;
      slideFeature.style.left = `-${(numberPrev * 25)}%`
    }
  }
  const handleNextFeature = () => {
    const slideFeature = document.querySelector(".slideFeature")
    console.log(numberNext)
    if (numberNext > 0) {
      console.log(slideFeature)
      numberPrev += 1;
      numberNext -= 1;
      slideFeature.style.left = `-${(numberPrev * 25)}%`
    }
  }
  return (
    <WapperArtistSong>
      <AboutAritst>
        <DecriptionArtist>
          <NameArtist>{listArtist[1].infoArtist.nameArtist}</NameArtist>
          <DetailArtist>
            {listArtist[1].infoArtist.decriptionArtist}
          </DetailArtist>
        </DecriptionArtist>
        <WapperImg>
          <AvatarArtist src={listArtist[1].infoArtist.imageArtist}></AvatarArtist>
        </WapperImg>
      </AboutAritst>
      <ListTopSongOfArtist>
        <TextTopSongs>Top Songs</TextTopSongs>
        <DisplaySongs>
          {listArtist[0].topSongs.map((song, index) =>
            <Song key={song.idSong} className={(data.play.isPlaying && data.play.index == song.idSong + 1) ? "active" : ""}>
              <WapperAvatarSong>
                <AvatarSong src={song.imageSong}></AvatarSong>
              </WapperAvatarSong>
              <IndexSong>{index + 1}</IndexSong>
              <AddToFavorite >
                <TagI
                  onClick={(e) => addToLocalStorage(e, song.idSong + 1, data)}
                  className={
                    data.liked.includes(song.idSong + 1)
                      ? "fa fa-heart active"
                      : "fa fa-heart"
                  }
                ></TagI>
              </AddToFavorite>
              <NameSong>{song.nameSong}</NameSong>
              <NameAlbum>{song.NameAlbum}</NameAlbum>
              <TimeSong>{song.timeSong}</TimeSong>
              <ViewSong>{song.playSong}</ViewSong>
              <OtherOption>
                <DowloadSong>
                  <Text href={song.sourceSong} download><Icon className="fa fa-download" aria-hidden="true">
                  </Icon></Text></DowloadSong>
              </OtherOption>
              <IconPlay className={(data.play.isPlaying && data.play.index == song.idSong) ? "iconPlay active" : "iconPlay"}
                onClick={() => {
                  data.handleChangeDataSong(song)
                }}>
                {
                  (data.play.isPlaying && data.play.index == song.idSong + 1) ? <IPLay onClick={() => {
                    const namePage = data.namePage
                    data.handleSetPagePlaying(namePage)
                    data.handleChangePlay(false, song.idSong + 1)
                  }} className="fa fa-pause" aria-hidden="true">
                  </IPLay> : <IPLay onClick={() => {
                    const namePage = data.namePage
                    data.handleSetPagePlaying(namePage)
                    data.handleChangePlay(true, song.idSong + 1)
                  }} className="fa fa-play" aria-hidden="true">
                  </IPLay>
                }
              </IconPlay>
            </Song>
          )}
        </DisplaySongs>
      </ListTopSongOfArtist>
      <TextFeature>Feature</TextFeature>
      <FeatureCardio>
        <TextAndButton>
          <TextCardio>Cardio</TextCardio>
          <NextPrev>
            <PrevFeature onClick={() => handlePrevFeature()}>
              <FcPrevious />
            </PrevFeature>
            <NextFeature onClick={() => handleNextFeature()}>
              <FcNext />
            </NextFeature>
          </NextPrev>
        </TextAndButton>
        <WapperFeature>
          <SlideFeature className="slideFeature">
            {listArtist[0].featureArtist.map((image, index) =>
              <Album key={index}>
                <ImgAlbum src={image}></ImgAlbum>
              </Album>
            )}
          </SlideFeature>
        </WapperFeature>
      </FeatureCardio>
    </WapperArtistSong >
  );
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
const Text = styled.a`
  height:100%;
  display:block ;
  font-size: 17px ;
  text-decoration:none ;
  margin-left:10px ;
  color:black;
`
const Icon = styled.i`
  height:100%;
  display:block ;
  font-size: 17px ;
`
const IconPlay = styled.div`
  position: absolute;
  left:-7%;
  top:0;
  width:7%;
  height:100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index:1001;
  cursor: pointer;
  &.active{
    left:0;
  }
`
const IPLay = styled.i`
font-size:23px;
color:paleturquoise;
`
const WapperArtistSong = styled.div`
  height: 510px;
  padding: 30px 40px 0;
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
const AboutAritst = styled.div`
  display: grid;
  grid-template-columns: 48% 50%;
  grid-column-gap: 2%;
  height: 250px;
  margin-bottom: 20px;
`;
const DecriptionArtist = styled.div``;
const NameArtist = styled.div`
  font-size: 20px;
  margin-bottom: 10px;
`;
const DetailArtist = styled.div`
  word-wrap: break-word;
`;
const WapperImg = styled.div`
  width: 100%;
  height: 250px;
`;
const AvatarArtist = styled.img`
  width: 50%;
  height: 100%;
  object-fit: cover;
`;
const ListTopSongOfArtist = styled.div`
  margin-bottom: 30px;
`;
const TextTopSongs = styled.div`
  font-size: 23px;
  margin-bottom: 10px;
`;
const DisplaySongs = styled.div``;
const Song = styled.div`
  display: grid;
  padding: 10px 0;
  align-items: center;
  border-radius: 14px;
  position:relative;
  background-color: azure;
  grid-template-columns: 7% 5% 5% 33% 18% 10% 15% 7%;
  margin: 10px 0;
  overflow: hidden;
  &.active{
    &::before{
      content:"";
      background-color: rgba(0,0,0,0.5);
      z-index:1000;
      top:0;
      left:0;
      position:absolute;
      width:100%;
      height:100%;
    }
    > .iconPlay{
      /* transition: 0.2s ease-in-out; */
      left:0px;
    }
  }
  &:hover > .iconPlay{
    transition: 0.2s ease-in-out;
    left:0px;
  }
`;
const WapperAvatarSong = styled.div`
  display: flex;
  justify-content: center;
`;
const AvatarSong = styled.img`
  width: 80%;
  height: 40px;
  object-fit: cover;
  text-align: center;
  left: 30px;
`;
const IndexSong = styled.div`
  display: flex;
  justify-content: center;
`;
const AddToFavorite = styled.div`
  font-size: 21px;
  cursor: pointer;
  display: flex;
  justify-content: center;
`;
const NameSong = styled.div`
  display: flex;
  justify-content: center;
`;
const NameAlbum = styled.div`
  display: flex;
  justify-content: center;
`;
const TimeSong = styled.div`
  display: flex;
  justify-content: center;
`;
const ViewSong = styled.div`
  display: flex;
  justify-content: center;
`;
const OtherOption = styled.div`
  display: flex;
  font-size: 21px;
  align-items: center;
  cursor: pointer;
  justify-content: center;
`;
const ExpandOption = styled.div``;
const ContentOption = styled.div`
  display: none;
`;
const DowloadSong = styled.div``;
const TextFeature = styled.div`
  font-size: 24px;
`;
const FeatureCardio = styled.div``;
const TextAndButton = styled.div`
  display: flex;
  justify-content: space-between;
`;
const TextCardio = styled.div`
  font-size: 20px;
  margin-bottom: 10px;
`;
const NextPrev = styled.div`
  display: flex;
  align-items: center;
`;
const PrevFeature = styled.div`
  cursor: pointer;
  margin-right: 5px;
  width: 30px;
  height: 30px;
  background-color: azure;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`;
const NextFeature = styled.div`
  margin-left: 5px;
  cursor: pointer;
  width: 30px;
  height: 30px;
  background-color: azure;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`;
const WapperFeature = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: 10px;
  height: 200px;
  overflow: hidden;
`;
const SlideFeature = styled.div`
  position: absolute;
  height: 100%;
  max-width: 100%;
  display: flex;
  /* overflow: hidden; */
`;
const ImgAlbum = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Album = styled.div`
  height: 100%;
  min-width: 24%;
  margin: 0 0.5%;
`;
