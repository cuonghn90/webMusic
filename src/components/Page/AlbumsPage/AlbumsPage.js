import React from "react";
import styled, { keyframes } from "styled-components";
import { useState, useContext } from "react";
import { FcNext, FcPrevious } from "react-icons/fc";
import { GrFormAdd } from "react-icons/gr";
import { BsFillPlayFill } from "react-icons/bs";
import { FaPlay } from "react-icons/fa";
import { AiTwotoneHeart } from "react-icons/ai";
import { listAlbum } from "./constantListAlbum";
import DetailCurrentAlbum from "./DetailCurrentAlbum";
import { ChangePage } from "../../../App";
export default function AlbumsPage() {

  const [widthNext, setWidthNext] = useState(0);
  const data = useContext(ChangePage);
  const [toggleFormCreate, setToggleFormCreate] = useState(false)
  const [currentAlbum, setCurrentAlbum] = useState(listAlbum[0])
  const handleNextSlideAlbum = (e) => {
    e.stopPropagation();
    const displaySlideAlbum = document.querySelector(".displaySlide");
    const numberAlbum = document.querySelectorAll(".yourAlbum");
    if (Math.abs(widthNext) < (numberAlbum.length - 3) * 315) {
      displaySlideAlbum.style.left = `${widthNext - 315}px`;
      setWidthNext(widthNext - 315);
    }
  };
  const handlePrevSlideAlbum = (e) => {
    e.stopPropagation();
    const displaySlideAlbum = document.querySelector(".displaySlide");
    const numberAlbum = document.querySelectorAll(".yourAlbum");
    if (Math.abs(widthNext) > 0) {
      displaySlideAlbum.style.left = `${widthNext + 315}px`;
      setWidthNext(widthNext + 315);
    }
  };
  const handleCreateNewAlbum = (e) => {
    e.preventDefault();
    const listNameAlbumExited = listAlbum.map((album) => album.name)
    const valueInputName = document.querySelector("#inputNewNameAlbum").value
    const errorMessage = document.querySelector(".message")
    if (valueInputName == "") {
      errorMessage.innerHTML = "Vui lòng nhập tên album";
      errorMessage.classList.add("error")
    }
    else if (listNameAlbumExited.includes(valueInputName)) {
      errorMessage.innerHTML = "Tên này đã tồn tại";
      errorMessage.classList.add("error")
    }
    else {
      const newId = listAlbum.length > 0 ? listAlbum.length : 0
      const objectNewAlbum = {
        id: newId,
        name: valueInputName,
        listSong: []
      }
      listAlbum.push(objectNewAlbum)
      document.querySelector("#inputNewNameAlbum").value = ""
      errorMessage.classList.remove("error")
      setToggleFormCreate(false)
    }
  }
  const handlePlayAlbum = (album) => {
    data.handleSetIdCurrentAlbum(album.id)
    const listYourAlbum = document.querySelectorAll(".effectAlbum")
    for (let i = 0; i < listAlbum.length; i++) {
      if (listAlbum[i].id == album.id) {
        listYourAlbum[album.id].classList.add("active")
      }
      else {
        listYourAlbum[listAlbum[i].id].classList.remove("active")
      }
    }
    setCurrentAlbum(album)
  }
  return (
    <WapperAlbumsPage>
      <TextAlbums>Your Albums</TextAlbums>
      <SlideYourAlbums>
        <PrevSlide
          className="prevSlide"
          onClick={(e) => handlePrevSlideAlbum(e)}
        >
          <FcPrevious />
        </PrevSlide>
        <NextSlide
          className="nextSlide"
          onClick={(e) => handleNextSlideAlbum(e)}
        >
          <FcNext />
        </NextSlide>
        <WapperSlide>
          <DisplaySlide className="displaySlide">
            {listAlbum.map((album, index) => {
              return (
                <YourAlbums className="yourAlbum" key={index} onClick={() => handlePlayAlbum(album)}>
                  <AvatarAlbum
                    src={
                      album.listSong.length > 0
                        ? album.listSong[0].imageSong
                        : "./image/anh1.jpg"
                    }
                  ></AvatarAlbum>
                  <InfoAlbum>
                    <NameAlbum>{album.name}</NameAlbum>
                    <SongsOfAlbum>
                      {album.listSong.length} Songs In Album
                    </SongsOfAlbum>
                  </InfoAlbum>
                  <EffectPlayAlbum className="effectAlbum">
                    <Column className="column1" style={{ "--i": "0" }}></Column>
                    <Column className="column2" style={{ "--i": "1" }}></Column>
                    <Column className="column3" style={{ "--i": "2" }}></Column>
                    <Column className="column4" style={{ "--i": "3" }}></Column>
                    <Column className="column5" style={{ "--i": "4" }}></Column>
                  </EffectPlayAlbum>
                </YourAlbums>
              );
            })}
            {listAlbum.length >= 3 ? (
              ""
            ) : (
              <DefaultAlbum>
                <IconAddNewAlbum onClick={() => setToggleFormCreate(true)}>
                  <GrFormAdd />
                </IconAddNewAlbum>
                <TextNewAlbum>Create New Album</TextNewAlbum>
              </DefaultAlbum>
            )}
          </DisplaySlide>
        </WapperSlide>
      </SlideYourAlbums>
      <CreateNewAlbum>
        <IconAddNewAlbum onClick={() => setToggleFormCreate(true)}>
          <GrFormAdd />
        </IconAddNewAlbum>
        <TextNewAlbum>Create New Album</TextNewAlbum>
      </CreateNewAlbum>
      <DetailCurrentAlbum currentAlbum={currentAlbum}></DetailCurrentAlbum>
      <FormCreateNewAlbum className={toggleFormCreate ? "active" : ""}>
        <form>
          <h3 style={{ color: "white", textAlign: "center", margin: "30px 0 30px 0" }}>Tạo album mới</h3>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", }}>
            <label style={{ color: "#F8F5F2" }} htmlFor="nameNewAlbum">
              Tên  Album
            </label>
            <input style={{
              border: "none", padding: "6px 5px", width: "65%",
              marginLeft: "20px", borderRadius: "10px", outline: "none"
            }}
              name="nameNewAlbum" type="text" id="inputNewNameAlbum" /><br />
          </div>
          <ErrorInput className="message"></ErrorInput>
          <button onClick={(e) => handleCreateNewAlbum(e)} style={{
            color: "#2988BC", padding: "5px 10px", border: "none",
            borderRadius: "7px", cursor: "pointer", textAlign: "center", justifyContent: "center",
            position: "absolute", bottom: "0", left: "50%", transform: "translateX(-50%)"
          }} >Tạo</button>
        </form>
        <CloseForm onClick={() => setToggleFormCreate(false)}>
          <TagI className="fa fa-times-circle-o" aria-hidden="true">
          </TagI>
        </CloseForm>
      </FormCreateNewAlbum>
    </WapperAlbumsPage>
  );
}
const EffectPlayAlbum = styled.div`
  position:absolute ;
  top:50%;
  left:50%;
  display:flex ;
  align-items:flex-end ;
  height:30px ;
  transform:translate(-50%,-50%);
  display:none ;
  &.active{
    display:flex ;
  }
`
const Column = styled.div`
  width: 8px ;
  margin:0 0px;
  animation: run linear 1s infinite;
  background-color:red ;
  transform-origin:center bottom ;
  animation-delay:calc(-0.3s * var(--i)) ;
  &.column1{
    background-color: blue;
    height:10px;
  }
  &.column2{
    background-color: pink;
    height:10px;
  }
  &.column3{
    background-color: yellow;
    height:10px;
  }
  &.column4{
    background-color: green;
    height:10px;
  }
  &.column5{
    background-color: orange;
    height:10px;
  }
  @keyframes run{
  0%{
    height:10px;
  }
  50%{
    height:30px;
  }
  100%{
    height:10px;
  }
}
`

const ErrorInput = styled.div`
  display:none ;
  margin-left:8px;
  margin-top:14px;
  color:#ffff66;
  &.error{
    display:block;
  }
`
const CloseForm = styled.div`
  position: absolute;
  right:5px;
  top:5px;
`
const TagI = styled.i`
  font-size: 26px ;
  cursor:pointer;
  color:white;
`
const FormCreateNewAlbum = styled.div`
  position: absolute ;
  display:none ;
  top:20%;
  left:30%;
  height: 200px;
  border-radius: 15px ;
  background-color: #2988BC;
  color:#F4AEDE;
  width: 300px;
  &.active{
    display:block;
  }
`;
const WapperAlbumsPage = styled.div`
  padding: 20px 20px 0 30px;
  background-color: rgb(153, 221, 255);
  height: 510px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 0px;
  }
`;
const TextAlbums = styled.div`
  font-size: 21px;
`;
const SlideYourAlbums = styled.div`
  position: relative;
  height: 200px;
  margin: 0 auto;
  width: 90%;
  margin-top: 20px;
  margin-bottom: 20px;
`;
const PrevSlide = styled.div`
  position: absolute;
  left: -40px;
  cursor: pointer;
  top: 50%;
  transform: translateY(-50%);
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: white;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  z-index: 10000;
  display: flex;
`;
const NextSlide = styled.div`
  position: absolute;
  cursor: pointer;
  font-size: 20px;
  z-index: 10000;
  justify-content: center;
  right: -40px;
  top: 50%;
  transform: translateY(-50%);
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: white;
  align-items: center;
  display: flex;
`;
const WapperSlide = styled.div`
  width: 100%;
  position: relative;
  height: 100%;
  overflow: hidden;
`;
const DisplaySlide = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  /* width: 100%; */
  height: 100%;
`;
const YourAlbums = styled.div`
  cursor: pointer;
  position: relative;
  height: 100%;
  min-width: 295px;
  margin: 0 10px;
  background-color: gray;
`;
const AvatarAlbum = styled.img`
  min-width: 100%;
  height: 200px;
  object-fit: cover;
`;
const InfoAlbum = styled.div`
  position: absolute;
  bottom: 20px;
  left: 30px;
  color: white;
  font-size: 18px;
`;
const NameAlbum = styled.div``;
const SongsOfAlbum = styled.div``;
const PlayALbum = styled.div`
  position: absolute;
  color: white;
  bottom: 70px;
  left: 30px;
`;
const EditAlbum = styled.div`
  color: white;
  position: absolute;
  top: 10px;
  right: 20px;
`;
const DefaultAlbum = styled.div`
  display: flex;
  height: 100%;
  width: 295px;
  background-color: white;
  align-items: center;
  justify-content: center;
  margin: 0 0.5%;
`;
const IconAddNewAlbum = styled.div`
  cursor: pointer;
  margin-right: 10px;
  width: 30px;
  font-size: 23px;
  height: 30px;
  border-radius: 50%;
  background-color: gray;
  justify-content: center;
  align-items: center;
  display: flex;
`;
const TextNewAlbum = styled.div`
  font-size: 19px;
`;
const CreateNewAlbum = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
