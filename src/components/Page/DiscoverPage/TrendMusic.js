import React from "react";
import styled from "styled-components";

export default function TrendMusic() {
  var numberNextSlide = 3;
  var numberPrevSlide = 0;
  const handlePrevSlide = () => {
    const slideVideo = document.querySelector(".slideVideo");
    if (numberPrevSlide > 0) {
      numberPrevSlide -= 1;
      numberNextSlide += 1;
      slideVideo.style.left = "-" + numberPrevSlide * 100 + "%";
    }
  };
  const handleNextSlide = () => {
    const slideVideo = document.querySelector(".slideVideo");
    if (numberNextSlide > 0) {
      numberPrevSlide += 1;
      numberNextSlide -= 1;
      slideVideo.style.left = "-" + numberPrevSlide * 100 + "%";
    }
  };
  return (
    <Wapper>
      <HeaderTrend>
        <TextTrendMusic>Trending Music Videos</TextTrendMusic>
        <NextAndPrevTrend>
          <PrevTrend onClick={() => handlePrevSlide()}>
            <TagI className="fa fa-chevron-left" aria-hidden="true"></TagI>
          </PrevTrend>
          <NextTrend onClick={() => handleNextSlide()}>
            <TagI className="fa fa-chevron-right" aria-hidden="true"></TagI>
          </NextTrend>
        </NextAndPrevTrend>
      </HeaderTrend>
      <DisplayImageTrend>
        <SlideVideo className="slideVideo">
          <ImageTrendSongs src="./image/anh2.jpg"></ImageTrendSongs>
          <ImageTrendSongs src="./image/anh3.jpg"></ImageTrendSongs>
          <ImageTrendSongs src="./image/anh4.jpg"></ImageTrendSongs>
          <ImageTrendSongs src="./image/anh5.jpg"></ImageTrendSongs>
        </SlideVideo>
      </DisplayImageTrend>
    </Wapper>
  );
}
const Wapper = styled.div`
  height: 90%;
  float: right;
  margin-left: 2%;
  width: 33%;
`;
const HeaderTrend = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const TextTrendMusic = styled.p`
  font-size: 20px;
`;
const NextAndPrevTrend = styled.div`
  display: flex;
`;
const PrevTrend = styled.div`
  cursor: pointer;
  width: 30px;
  height: 30px;
  margin-right: 10px;
  border-radius: 50%;
  background-color: #999;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const TagI = styled.i``;
const NextTrend = styled.div`
  width: 30px;
  cursor: pointer;
  height: 30px;
  border-radius: 50%;
  background-color: #999;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const DisplayImageTrend = styled.div`
  /* padding: 10px; */
  margin-top: 30px;
  height: 80%;
  width: 100%;
  overflow: hidden;
  position: relative;
`;
const ImageTrendSongs = styled.img`
  height: 100%;
  min-width: 100%;
  border-radius: 10px;
  /* position: absolute; */
  object-fit: cover;
`;
const SlideVideo = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
`;
