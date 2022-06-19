import React from "react";
import styled from "styled-components";
import { FcNext, FcPrevious } from "react-icons/fc";
export default function MusicVideosPage() {
  const handlePlayVideo = (e, id) => {
    const videoItem = document.querySelectorAll(".videoItem")[id];
    const playVideo = document.querySelectorAll(".playVideo")[id];
    if (playVideo.classList.contains("fa-play")) {
      playVideo.classList.remove("fa-play")
      playVideo.classList.add("fa-pause")
      videoItem.play()
    }
    else {
      playVideo.classList.add("fa-play")
      playVideo.classList.remove("fa-pause")
      videoItem.pause()
    }
    e.stopPropagation()
  }
  const handleVolumeVideo = (e) => {
    e.stopPropagation()
  }
  const handleExtendVideo = (e, id) => {
    e.stopPropagation()
    const videoItem = document.querySelectorAll(".videoItem")[id];
    const wapperVideo = document.querySelectorAll(".wapperVideo")[id];
    const wapperControls = document.querySelectorAll(".wapperControls")[id];
    const aboutVideo = document.querySelectorAll(".aboutVideo")[id];
    const wapperAvatar = document.querySelectorAll(".wapperAvatar")[id];
    const displayGrid = document.querySelector(".displayGrid");
    videoItem.classList.toggle("active")
    console.log(wapperVideo.offsetTop, wapperVideo.offsetLeft)
    if (videoItem.classList.contains("active")) {
      const listAbout = document.querySelectorAll(".aboutVideo")
      for (let i = 0; i < listAbout.length; i++) {
        listAbout[i].style.display = "none"
        if (i != id) {
          document.querySelectorAll(".videoItem")[i].style.display = "none"
        }
      }
      if (id < document.querySelectorAll(".videoItem").length / 2) {
        if (document.querySelectorAll(".videoItem")[id - 2] != undefined && document.querySelectorAll(".videoItem")[id + 3] != undefined) {
          videoItem.style.transformOrigin = "top right"
          wapperVideo.style.transformOrigin = "top right"
        }
        else if (document.querySelectorAll(".videoItem")[id - 1] != undefined && document.querySelectorAll(".videoItem")[id + 3] != undefined) {
          videoItem.style.transformOrigin = "top center"
          wapperVideo.style.transformOrigin = "top center"
        }
        else {
          videoItem.style.transformOrigin = "top left"
          wapperVideo.style.transformOrigin = "top left"
        }
      }
      else {
        if (document.querySelectorAll(".videoItem")[id + 2] != undefined && document.querySelectorAll(".videoItem")[id - 3] != undefined) {
          videoItem.style.transformOrigin = "bottom left"
          wapperVideo.style.transformOrigin = "bottom left"
          wapperVideo.style.bottom = "-50px"
          aboutVideo.style.display = "none"
          wapperAvatar.style.maxHeight = "100%"
        }
        else if (document.querySelectorAll(".videoItem")[id + 1] != undefined && document.querySelectorAll(".videoItem")[id - 3] != undefined) {
          videoItem.style.transformOrigin = "bottom center"
          wapperVideo.style.transformOrigin = "bottom center"
          wapperVideo.style.bottom = "-50px"
          aboutVideo.style.display = "none"
          wapperAvatar.style.maxHeight = "100%"
        }
        else {
          console.log("x")
          videoItem.style.transformOrigin = "bottom right"
          wapperVideo.style.transformOrigin = "bottom right"
          wapperVideo.style.bottom = "-50px"
          aboutVideo.style.display = "none"
          wapperAvatar.style.maxHeight = "100%"
        }
      }

      wapperVideo.style.transform = "scale" + "(" + ((displayGrid.offsetWidth - 60) / (videoItem.offsetWidth)) + ","
        + ((displayGrid.offsetHeight - 50) / (videoItem.offsetHeight)) + ")";
      wapperControls.style.fontSize = "7px"
      wapperVideo.style.zIndex = "10002"
    }
    else {
      const listAbout = document.querySelectorAll(".aboutVideo")
      for (let i = 0; i < listAbout.length; i++) {
        listAbout[i].style.display = "block"
        if (i != id) {
          document.querySelectorAll(".videoItem")[i].style.display = "block"
        }
      }
      wapperVideo.style.zIndex = "100"
      wapperControls.style.fontSize = "18px"
      wapperVideo.style.transform = "scale(1,1)";
      wapperAvatar.style.maxHeight = "75%"
      wapperVideo.style.bottom = "0"
    }
  }

  const handleOptionVideo = (e) => {
    e.stopPropagation()
  }
  const handleUpdate = (id) => {
    const videoItem = document.querySelectorAll(".videoItem")[id];
    const currentTime = document.querySelectorAll(".currentTime")[id];
    var currentTimeVideo = videoItem.currentTime;
    const durationVideo = videoItem.duration
    currentTime.style.width = (currentTimeVideo / durationVideo * 100) + "%"
    console.log(videoItem.currentTime, durationVideo, currentTimeVideo / durationVideo)
  }
  return (
    <WapperMusicVideos className="displayGrid">
      <DisplayGridVideos >
        <Video>
          <WapperAvatar className="wapperAvatar">
            <WapperVideo className="wapperVideo">
              <VideoItem onTimeUpdate={() => handleUpdate(0)} className="videoItem active"  >
                <source className="sourceVideo" src="./video/video1.mp4"></source>
              </VideoItem>
              <WapperControls className="wapperControls">
                <PlayVideo onClick={(e) => handlePlayVideo(e, 0)} className="fa fa-play playVideo" aria-hidden="true"></PlayVideo>
                <VolumeVideo onClick={(e) => handleVolumeVideo(e, 0)} className="fa fa-volume-down" aria-hidden="true"></VolumeVideo>
                <ExpandVideo onClick={(e) => handleExtendVideo(e, 0)} className="fa fa-arrows-alt" aria-hidden="true"></ExpandVideo>
                <OptionVideo onClick={(e) => handleOptionVideo(e, 0)} className="fa fa-bars" aria-hidden="true"></OptionVideo>
              </WapperControls>
              <ProgressVideo className="progressVideo">
              </ProgressVideo>
              <CurrentTime className="currentTime"></CurrentTime>
            </WapperVideo>
          </WapperAvatar>
          <AboutVideo className="aboutVideo">
            <NameVideo>Video 1</NameVideo>
            <AristVideo>Artist 1</AristVideo>
            <TopVideo>Top 1</TopVideo>
          </AboutVideo>
        </Video>
        <Video>
          <WapperAvatar className="wapperAvatar">
            <WapperVideo className="wapperVideo">
              <VideoItem onTimeUpdate={() => handleUpdate(1)} className="videoItem active"  >
                <source className="sourceVideo" src="./video/video1.mp4"></source>
              </VideoItem>
              <WapperControls className="wapperControls">
                <PlayVideo onClick={(e) => handlePlayVideo(e, 1)} className="fa fa-play playVideo" aria-hidden="true"></PlayVideo>
                <VolumeVideo onClick={(e) => handleVolumeVideo(e, 1)} className="fa fa-volume-down" aria-hidden="true"></VolumeVideo>
                <ExpandVideo onClick={(e) => handleExtendVideo(e, 1)} className="fa fa-arrows-alt" aria-hidden="true"></ExpandVideo>
                <OptionVideo onClick={(e) => handleOptionVideo(e, 1)} className="fa fa-bars" aria-hidden="true"></OptionVideo>
              </WapperControls>
              <ProgressVideo className="progressVideo">
              </ProgressVideo>
              <CurrentTime className="currentTime"></CurrentTime>
            </WapperVideo>
          </WapperAvatar>
          <AboutVideo className="aboutVideo">
            <NameVideo>Video 1</NameVideo>
            <AristVideo>Artist 1</AristVideo>
            <TopVideo>Top 1</TopVideo>
          </AboutVideo>
        </Video>
        <Video>
          <WapperAvatar className="wapperAvatar">
            <WapperVideo className="wapperVideo">
              <VideoItem onTimeUpdate={() => handleUpdate(2)} className="videoItem active"  >
                <source className="sourceVideo" src="./video/video1.mp4"></source>
              </VideoItem>
              <WapperControls className="wapperControls">
                <PlayVideo onClick={(e) => handlePlayVideo(e, 2)} className="fa fa-play playVideo" aria-hidden="true"></PlayVideo>
                <VolumeVideo onClick={(e) => handleVolumeVideo(e, 2)} className="fa fa-volume-down" aria-hidden="true"></VolumeVideo>
                <ExpandVideo onClick={(e) => handleExtendVideo(e, 2)} className="fa fa-arrows-alt" aria-hidden="true"></ExpandVideo>
                <OptionVideo onClick={(e) => handleOptionVideo(e, 2)} className="fa fa-bars" aria-hidden="true"></OptionVideo>
              </WapperControls>
              <ProgressVideo className="progressVideo">
              </ProgressVideo>
              <CurrentTime className="currentTime"></CurrentTime>
            </WapperVideo>
          </WapperAvatar>
          <AboutVideo className="aboutVideo">
            <NameVideo>Video 1</NameVideo>
            <AristVideo>Artist 1</AristVideo>
            <TopVideo>Top 1</TopVideo>
          </AboutVideo>
        </Video>
        <Video>
          <WapperAvatar className="wapperAvatar">
            <WapperVideo className="wapperVideo">
              <VideoItem onTimeUpdate={() => handleUpdate(3)} className="videoItem active"  >
                <source className="sourceVideo" src="./video/video1.mp4"></source>
              </VideoItem>
              <WapperControls className="wapperControls">
                <PlayVideo onClick={(e) => handlePlayVideo(e, 3)} className="fa fa-play playVideo" aria-hidden="true"></PlayVideo>
                <VolumeVideo onClick={(e) => handleVolumeVideo(e, 3)} className="fa fa-volume-down" aria-hidden="true"></VolumeVideo>
                <ExpandVideo onClick={(e) => handleExtendVideo(e, 3)} className="fa fa-arrows-alt" aria-hidden="true"></ExpandVideo>
                <OptionVideo onClick={(e) => handleOptionVideo(e, 3)} className="fa fa-bars" aria-hidden="true"></OptionVideo>
              </WapperControls>
              <ProgressVideo className="progressVideo">
              </ProgressVideo>
              <CurrentTime className="currentTime"></CurrentTime>
            </WapperVideo>
          </WapperAvatar>
          <AboutVideo className="aboutVideo">
            <NameVideo>Video 1</NameVideo>
            <AristVideo>Artist 1</AristVideo>
            <TopVideo>Top 1</TopVideo>
          </AboutVideo>
        </Video>
        <Video>
          <WapperAvatar className="wapperAvatar">
            <WapperVideo className="wapperVideo">
              <VideoItem onTimeUpdate={() => handleUpdate(4)} className="videoItem active"  >
                <source className="sourceVideo" src="./video/video1.mp4"></source>
              </VideoItem>
              <WapperControls className="wapperControls">
                <PlayVideo onClick={(e) => handlePlayVideo(e, 4)} className="fa fa-play playVideo" aria-hidden="true"></PlayVideo>
                <VolumeVideo onClick={(e) => handleVolumeVideo(e, 4)} className="fa fa-volume-down" aria-hidden="true"></VolumeVideo>
                <ExpandVideo onClick={(e) => handleExtendVideo(e, 4)} className="fa fa-arrows-alt" aria-hidden="true"></ExpandVideo>
                <OptionVideo onClick={(e) => handleOptionVideo(e, 4)} className="fa fa-bars" aria-hidden="true"></OptionVideo>
              </WapperControls>
              <ProgressVideo className="progressVideo">
              </ProgressVideo>
              <CurrentTime className="currentTime"></CurrentTime>
            </WapperVideo>
          </WapperAvatar>
          <AboutVideo className="aboutVideo">
            <NameVideo>Video 1</NameVideo>
            <AristVideo>Artist 1</AristVideo>
            <TopVideo>Top 1</TopVideo>
          </AboutVideo>
        </Video>
        <Video>
          <WapperAvatar className="wapperAvatar">
            <WapperVideo className="wapperVideo">
              <VideoItem onTimeUpdate={() => handleUpdate(5)} className="videoItem active"  >
                <source className="sourceVideo" src="./video/video1.mp4"></source>
              </VideoItem>
              <WapperControls className="wapperControls">
                <PlayVideo onClick={(e) => handlePlayVideo(e, 5)} className="fa fa-play playVideo" aria-hidden="true"></PlayVideo>
                <VolumeVideo onClick={(e) => handleVolumeVideo(e, 5)} className="fa fa-volume-down" aria-hidden="true"></VolumeVideo>
                <ExpandVideo onClick={(e) => handleExtendVideo(e, 5)} className="fa fa-arrows-alt" aria-hidden="true"></ExpandVideo>
                <OptionVideo onClick={(e) => handleOptionVideo(e, 5)} className="fa fa-bars" aria-hidden="true"></OptionVideo>
              </WapperControls>
              <ProgressVideo className="progressVideo">
              </ProgressVideo>
              <CurrentTime className="currentTime"></CurrentTime>
            </WapperVideo>
          </WapperAvatar>
          <AboutVideo className="aboutVideo">
            <NameVideo>Video 1</NameVideo>
            <AristVideo>Artist 1</AristVideo>
            <TopVideo>Top 1</TopVideo>
          </AboutVideo>
        </Video>
      </DisplayGridVideos>
      <PrevGridVideos>
        <FcNext />
      </PrevGridVideos>
      <NextGridVideos>
        <FcPrevious />
      </NextGridVideos>
    </WapperMusicVideos>
  );
}
const WapperVideo = styled.div`
  width: 100%;
  height:100%;
  position: relative;
  &:hover > .wapperControls{
          display: flex;
    }
  &:hover > .progressVideo{
    display: block;
  }
  &:hover > .currentTime{
    display: block;
  }
`
const CurrentTime = styled.div`
  z-index:100;
  position: absolute;
  bottom:3%;
  width: 20%;
  background-color: red;
  height:3px;
  cursor: pointer;
  display: none;
  cursor: pointer;
`
const ProgressVideo = styled.div`
  z-index:100;
  position: absolute;
  bottom:3%;
  width: 100%;
  background-color: rgba(0,0,0,0.3);
  height:3px;
  cursor: pointer;
  display: none;
`
const WapperControls = styled.div`
  width: 100%;
  position: absolute;
  align-items: flex-end;
  justify-content: space-evenly;
  bottom:8%;
  color:white;  
  z-index: 1000;
  display: none;
  font-size: 18px;
`
const ExpandVideo = styled.div`
  z-index: 100;
  cursor: pointer;

`
const OptionVideo = styled.div`
  z-index:100;
  cursor: pointer;

`

const PlayVideo = styled.div`
  z-index:100;
  cursor: pointer;

`
const VolumeVideo = styled.div`
  z-index:100;
  cursor: pointer;

`
const VideoItem = styled.video`
  width:329.5px;
  max-height:100%;
  object-fit: cover;
  padding:0 0 ;
  overflow: hidden;
  
`
const WapperMusicVideos = styled.div`
  height: 510px;
  /* overflow: hidden; */
  position: relative;
  padding: 40px 30px 0 30px;
  width: 100%;
`;

const DisplayGridVideos = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 32.33%);
  grid-gap: 1%;
  margin: 0 auto;
  overflow: hidden;
`;

const Video = styled.div`
  width: 100%;
  height: 230px;
`;

const WapperAvatar = styled.div`
  width:100%;
  max-height: 75%;
  position: relative;
  margin-bottom: 15px;
`;

const AvatarVideo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const AboutVideo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const NameVideo = styled.div`
  font-size: 16px;
`;

const AristVideo = styled.div`
  font-size: 15px;
`;

const TopVideo = styled.div`
  font-size: 16px;
  color: tomato;
`;

const NextGridVideos = styled.div`
  position: absolute;
  top: 10px;
  width: 30px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  cursor: pointer;
  left: 30px;
  opacity: 0.8;
  color: white;
  &:hover {
    opacity: 1;
  }
`;

const PrevGridVideos = styled.div`
  position: absolute;
  cursor: pointer;
  top: 10px;
  color: white;
  width: 30px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  opacity: 0.8;
  right: 30px;
  &:hover {
    opacity: 1;
  }
`;
