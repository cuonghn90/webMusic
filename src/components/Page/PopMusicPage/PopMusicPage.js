import React from "react";
import styled from "styled-components";

export default function PopMusicPage() {
  return (
    <WapperHistoryPage>
      <WapperTilte>
        <TitleHistory>Ten Bai Hat</TitleHistory>
        <DateTimeHistory>Chi tiết</DateTimeHistory>
      </WapperTilte>
      <ListSongsRecently>
        <List>
          <Song>
            <AvatarSong src="./image/anh4.jpg"></AvatarSong>
            <InfoSong>
              <NameSong>BAI 1</NameSong>
              <ArtistSong>Artist 1</ArtistSong>
            </InfoSong>
          </Song>
          <Time>Ngày 8 tháng 10 Năm 2001</Time>
          <DownloadAgain>Tải lại</DownloadAgain>
          <DeleteHistory>Xóa</DeleteHistory>
        </List>
        <List>
          <Song>
            <AvatarSong src="./image/anh4.jpg"></AvatarSong>
            <InfoSong>
              <NameSong>BAI 1</NameSong>
              <ArtistSong>Artist 1</ArtistSong>
            </InfoSong>
          </Song>
          <Time>Ngày 8 tháng 10 Năm 2001</Time>
          <DownloadAgain>Tải lại</DownloadAgain>
          <DeleteHistory>Xóa</DeleteHistory>
        </List>
        <List>
          <Song>
            <AvatarSong src="./image/anh4.jpg"></AvatarSong>
            <InfoSong>
              <NameSong>BAI 1</NameSong>
              <ArtistSong>Artist 1</ArtistSong>
            </InfoSong>
          </Song>
          <Time>Ngày 8 tháng 10 Năm 2001</Time>
          <DownloadAgain>Tải lại</DownloadAgain>
          <DeleteHistory>Xóa</DeleteHistory>
        </List>
        <List>
          <Song>
            <AvatarSong src="./image/anh4.jpg"></AvatarSong>
            <InfoSong>
              <NameSong>BAI 1</NameSong>
              <ArtistSong>Artist 1</ArtistSong>
            </InfoSong>
          </Song>
          <Time>Ngày 8 tháng 10 Năm 2001</Time>
          <DownloadAgain>Tải lại</DownloadAgain>
          <DeleteHistory>Xóa</DeleteHistory>
        </List>
        <List>
          <Song>
            <AvatarSong src="./image/anh4.jpg"></AvatarSong>
            <InfoSong>
              <NameSong>BAI 1</NameSong>
              <ArtistSong>Artist 1</ArtistSong>
            </InfoSong>
          </Song>
          <Time>Ngày 8 tháng 10 Năm 2001</Time>
          <DownloadAgain>Tải lại</DownloadAgain>
          <DeleteHistory>Xóa</DeleteHistory>
        </List>
        <List>
          <Song>
            <AvatarSong src="./image/anh4.jpg"></AvatarSong>
            <InfoSong>
              <NameSong>BAI 1</NameSong>
              <ArtistSong>Artist 1</ArtistSong>
            </InfoSong>
          </Song>
          <Time>Ngày 8 tháng 10 Năm 2001</Time>
          <DownloadAgain>Tải lại</DownloadAgain>
          <DeleteHistory>Xóa</DeleteHistory>
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
  width: 50%;
  text-align: center;
`;
const DateTimeHistory = styled.div`
  margin-left: 5%;
  width: 25%;
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
  width: 50%;
  display: grid;
  align-items: center;
  background-color: azure;
  padding: 3px 0;
  grid-template-columns: 10% 90%;
  border-radius: 10px;
`;
const AvatarSong = styled.img`
  width: 40px;
  height: 40px;
  margin-left: 10px;
`;
const InfoSong = styled.div`
  margin-left: 10px;
`;
const NameSong = styled.div`
  font-size: 15px;
`;
const ArtistSong = styled.div`
  font-size: 14px;
`;
const Time = styled.div`
  margin-left: 5%;
  float: right;
  width: 25%;
  height: 46px;
  background-color: azure;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  /* width: 40%; */
  text-align: center;
`;
const DownloadAgain = styled.div`
  width: 7%;
  margin-left: 3%;
  cursor: pointer;
  text-align: center;
  display: flex;
  align-items: center;
  border-radius: 10px;
  justify-content: center;
  height: 46px;
  &:hover {
    background-color: azure;
  }
`;
const DeleteHistory = styled.div`
  width: 7%;
  text-align: center;
  margin-left: 3%;
  display: flex;
  align-items: center;
  border-radius: 10px;
  justify-content: center;
  height: 46px;
  &:hover {
    background-color: azure;
  }
  cursor: pointer;
`;
