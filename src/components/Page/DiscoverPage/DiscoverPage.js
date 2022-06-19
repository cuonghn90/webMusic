import React from "react";
// import { useEffect } from "react";
import styled from "styled-components";
import AlbumsSlide from "./AlbumsSlide";
import TopSong from "./TopSong";
import TrendMusic from "./TrendMusic";

export default function DiscoverPage() {
  const albumsSlide = document.querySelectorAll(".albumsSlide");
  var lengthSlide = albumsSlide.length;
  var numberNextSlide = 8 - 3;
  var numberPrevSlide = 0;
  const handlePrevSlide = () => {
    const slideAlbums = document.querySelector(".SlideAlbums");
    if (numberPrevSlide > 0) {
      numberPrevSlide -= 1;
      numberNextSlide += 1;
      slideAlbums.style.left = "-" + numberPrevSlide * 330.31 + "px";
    }
  };
  const handleNextSlide = () => {
    const slideAlbums = document.querySelector(".SlideAlbums");
    console.log(lengthSlide);
    if (numberNextSlide > 0) {
      numberPrevSlide += 1;
      numberNextSlide -= 1;
      slideAlbums.style.left = "-" + numberPrevSlide * 330.31 + "px";
    }
  };
  return (
    <Wapper>
      <RecomendedAlbums>
        <TextAndNextPrevAlbums>
          <TextRecomendedAlbums>Recomended Albums</TextRecomendedAlbums>
          <NextAndPrev>
            <PrevAlbums onClick={() => handlePrevSlide()}>
              <TagI className="fa fa-angle-left" aria-hidden="true"></TagI>
            </PrevAlbums>
            <NextAlbums onClick={() => handleNextSlide()}>
              <TagI className="fa fa-angle-right" aria-hidden="true"></TagI>
            </NextAlbums>
          </NextAndPrev>
        </TextAndNextPrevAlbums>
        <WapperSlideAlbums>
          <WapperInnerSlide className="WapperInnerSlide">
            <SlideAlbums className="SlideAlbums">
              <AlbumsSlide ind={1} className="albumsSlide"></AlbumsSlide>
              <AlbumsSlide ind={2} className="albumsSlide"></AlbumsSlide>
              <AlbumsSlide ind={3} className="albumsSlide"></AlbumsSlide>
              <AlbumsSlide ind={4} className="albumsSlide"></AlbumsSlide>
              <AlbumsSlide ind={5} className="albumsSlide"></AlbumsSlide>
              <AlbumsSlide ind={6} className="albumsSlide"></AlbumsSlide>
              <AlbumsSlide ind={7} className="albumsSlide"></AlbumsSlide>
              <AlbumsSlide ind={8} className="albumsSlide"></AlbumsSlide>
            </SlideAlbums>
          </WapperInnerSlide>
        </WapperSlideAlbums>
      </RecomendedAlbums>
      <TopSongAndTrendMusic>
        <TopSong></TopSong>
        <TrendMusic></TrendMusic>
      </TopSongAndTrendMusic>
    </Wapper>
  );
}
const Wapper = styled.div`
  padding: 20px 20px 0 30px;
  background-color: rgb(153, 221, 255);
  height: 510px;
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
const TopSongAndTrendMusic = styled.div`
  display: flex;
  height: 430px;
`;
const RecomendedAlbums = styled.div`
  margin-bottom: 40px;
`;
const TextAndNextPrevAlbums = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;
const TextRecomendedAlbums = styled.p`
  font-size: 20px;
`;
const NextAndPrev = styled.div`
  display: flex;
  align-items: center;
`;
const TagI = styled.i`
  font-size: 20px;
`;
const PrevAlbums = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: aqua;
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: center;
  margin: 0 10px;
`;
const NextAlbums = styled.div`
  width: 30px;
  cursor: pointer;
  height: 30px;
  border-radius: 50%;
  background-color: aqua;
  display: flex;
  align-items: center;
  margin: 0 10px;
  justify-content: center;
`;
const WapperInnerSlide = styled.div`
  width: 95%;
  position: relative;
  overflow: hidden;
  height: 100%;
`;
const WapperSlideAlbums = styled.div`
  /* padding: 0px 30px 0 15px; */
  height: 200px;
  width: 100%;
  display: flex;
  justify-content: center;
`;
const SlideAlbums = styled.div`
  min-width: 100%;
  height: 100%;
  display: flex;
  /* overflow: hidden; */
  position: absolute;
  width: auto;
`;
