import React from "react";
import styled from "styled-components";
import { FaPlay } from "react-icons/fa";
export default function HistoryPage() {
  return (
    <WapperHistoryPage>
      <WapperTilte>
        <TitleHistory>Ten Bai Hat</TitleHistory>
        <DateTimeHistory>Chi tiết</DateTimeHistory>
      </WapperTilte>
      <ListSongsRecently>
        <List>
          <Song>
            <IconPlay>
              <FaPlay />
            </IconPlay>
            <AvatarSong src="./image/anh4.jpg"></AvatarSong>
            <InfoSong>
              <NameSong>BAI 1</NameSong>
              <ArtistSong>Artist 1</ArtistSong>
            </InfoSong>
            <TimeSong>4:17</TimeSong>
          </Song>
          <Time>Ngày 8 tháng 10 Năm 2001</Time>
        </List>
        <List>
          <Song>
            <IconPlay>
              <FaPlay />
            </IconPlay>
            <AvatarSong src="./image/anh4.jpg"></AvatarSong>
            <InfoSong>
              <NameSong>BAI 1</NameSong>
              <ArtistSong>Artist 1</ArtistSong>
            </InfoSong>
            <TimeSong>4:17</TimeSong>
          </Song>
          <Time>Ngày 8 tháng 10 Năm 2001</Time>
        </List>
        <List>
          <Song>
            <IconPlay>
              <FaPlay />
            </IconPlay>
            <AvatarSong src="./image/anh4.jpg"></AvatarSong>
            <InfoSong>
              <NameSong>BAI 1</NameSong>
              <ArtistSong>Artist 1</ArtistSong>
            </InfoSong>
            <TimeSong>4:17</TimeSong>
          </Song>
          <Time>Ngày 8 tháng 10 Năm 2001</Time>
        </List>
        <List>
          <Song>
            <IconPlay>
              <FaPlay />
            </IconPlay>
            <AvatarSong src="./image/anh4.jpg"></AvatarSong>
            <InfoSong>
              <NameSong>BAI 1</NameSong>
              <ArtistSong>Artist 1</ArtistSong>
            </InfoSong>
            <TimeSong>4:17</TimeSong>
          </Song>
          <Time>Ngày 8 tháng 10 Năm 2001</Time>
        </List>
        <List>
          <Song>
            <IconPlay>
              <FaPlay />
            </IconPlay>
            <AvatarSong src="./image/anh4.jpg"></AvatarSong>
            <InfoSong>
              <NameSong>BAI 1</NameSong>
              <ArtistSong>Artist 1</ArtistSong>
            </InfoSong>
            <TimeSong>4:17</TimeSong>
          </Song>
          <Time>Ngày 8 tháng 10 Năm 2001</Time>
        </List>
        <List>
          <Song>
            <IconPlay>
              <FaPlay />
            </IconPlay>
            <AvatarSong src="./image/anh4.jpg"></AvatarSong>
            <InfoSong>
              <NameSong>BAI 1</NameSong>
              <ArtistSong>Artist 1</ArtistSong>
            </InfoSong>
            <TimeSong>4:17</TimeSong>
          </Song>
          <Time>Ngày 8 tháng 10 Năm 2001</Time>
        </List>
      </ListSongsRecently>
    </WapperHistoryPage>
  );
}

const WapperHistoryPage = styled.div`
  padding: 40px 70px 0;
  height: 510px;
`;
const WapperTilte = styled.div`
  display: flex;
  margin-bottom: 20px;
`;
const TitleHistory = styled.div`
  width: 60%;
  text-align: center;
`;
const DateTimeHistory = styled.div`
  width: 40%;
  text-align: center;
`;
const ListSongsRecently = styled.div``;
const List = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
`;
const Song = styled.div`
  /* padding-right: 10%; */
  width: 60%;
  display: grid;
  align-items: center;
  background-color: azure;
  padding: 3px 0;
  grid-template-columns: 10% 10% 70% 10%;
  border-radius: 10px;
`;
const IconPlay = styled.div`
  cursor: pointer;
  text-align: center;
`;
const AvatarSong = styled.img`
  width: 40px;
  height: 40px;
`;
const InfoSong = styled.div``;
const NameSong = styled.div``;
const ArtistSong = styled.div``;
const TimeSong = styled.div``;
const Time = styled.div`
  margin-left: 10%;
  float: right;
  width: 30%;
  height: 46px;
  background-color: azure;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  /* width: 40%; */
  text-align: center;
`;
