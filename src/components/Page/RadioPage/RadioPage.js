import React from "react";
import styled from "styled-components";
import { FcNext, FcPrevious } from "react-icons/fc";
export default function RadioPage() {
  return (
    <WapperRadioPage>
      <NavBarSearch className="active">
        <IconToggleNavBar>
          <FcPrevious />
        </IconToggleNavBar>
        <SearchSong>
          <TextSearch className="off">Tim kiem bai hat</TextSearch>
          <InputSearch className="off">
            <Input></Input>
            <IconSearch>Tim</IconSearch>
          </InputSearch>
        </SearchSong>
      </NavBarSearch>
      <DisplayLyricSong>
        <Lyrics>
          <LyricSong>1</LyricSong>
          <LyricSong>1</LyricSong>
          <LyricSong>1</LyricSong>
          <LyricSong>1</LyricSong>
          <LyricSong>1</LyricSong>
          <LyricSong>1</LyricSong>
          <LyricSong className="currentLine">1</LyricSong>
          <LyricSong>1</LyricSong>
          <LyricSong>1</LyricSong>
          <LyricSong>1</LyricSong>
          <LyricSong>1</LyricSong>
          <LyricSong>1</LyricSong>
          <LyricSong>1</LyricSong>
          <LyricSong>1</LyricSong>
          <LyricSong>1</LyricSong>
          <LyricSong>1</LyricSong>
          <LyricSong>1</LyricSong>
          <LyricSong>1</LyricSong>
          <LyricSong>1</LyricSong>
          <LyricSong>1</LyricSong>
          <LyricSong>1</LyricSong>
          <LyricSong>1</LyricSong>
          <LyricSong>1</LyricSong>
          <LyricSong>1</LyricSong>
          <LyricSong>1</LyricSong>
          <LyricSong>1</LyricSong>
          <LyricSong>1</LyricSong>
          <LyricSong>1</LyricSong>
          <LyricSong>1</LyricSong>
          <LyricSong>1</LyricSong>
          <LyricSong>1</LyricSong>
          <LyricSong>1</LyricSong>
          <LyricSong>1</LyricSong>
          <LyricSong>1</LyricSong>
          <LyricSong>1</LyricSong>
          <LyricSong>1</LyricSong>
          <LyricSong>1</LyricSong>
        </Lyrics>
        <LineLyricCurrent>
          <IconPlayLineLyric></IconPlayLineLyric>
        </LineLyricCurrent>
      </DisplayLyricSong>
    </WapperRadioPage>
  );
}
const WapperRadioPage = styled.div`
  height: 510px;
  overflow-y: scroll;
  width: 100%;
  &::-webkit-scrollbar {
    width: 5px;
  }
  &:hover::-webkit-scrollbar-thumb {
    background: #888;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
  display: flex;
`;

const NavBarSearch = styled.div`
  width: 40%;
  height: 100%;
  background-color: rgb(166, 166, 166);
  position: relative;
  &.active {
    width: 1%;
    background-color: transparent;
    margin-right: 2%;
  }
`;

const IconToggleNavBar = styled.div`
  font-size: 22px;
  position: absolute;
  top: 50%;
  right: -17px;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: white;
  border-radius: 50%;
  z-index: 100;
`;

const SearchSong = styled.div`
  height: 100%;
`;

const TextSearch = styled.div`
  font-size: 24px;
  text-align: center;
  margin: 10px;
  &.off {
    display: none;
  }
`;

const InputSearch = styled.div`
  display: flex;
  align-items: center;
  &.off {
    display: none;
  }
`;

const Input = styled.input`
  /* flex: 1; */
  margin: 0 10px;
  outline: none;
  line-height: 20px;
  border: none;
  border-radius: 10px;
  padding: 3px 7px;
  width: 80%;
  /* margin-right: 20px; */
`;

const IconSearch = styled.div`
  margin-left: 10px;
  cursor: pointer;
`;

const DisplayLyricSong = styled.div`
  flex: 1;
  background-color: rgb(89, 89, 89);
  color: rgb(242, 242, 242);
`;

const Lyrics = styled.div`
  width: 100%;
  height: 100%;
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

const LyricSong = styled.div`
  text-align: center;
  padding: 3px 0;
  &:hover {
    color: black;
    background-color: azure;
  }
  &.currentLine {
    background-color: azure;
    color: black;
  }
`;

const LineLyricCurrent = styled.div`
  background-color: azure;
`;

const IconPlayLineLyric = styled.div``;
