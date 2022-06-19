import React from "react";
import styled from "styled-components";

export default function AlbumsSlide({ ind }) {
  return (
    <Album>
      <Avatar src={"./image/anh" + `${ind}` + ".jpg"}></Avatar>
      {/* <NameAlbums>Album 1</NameAlbums>
      <NumberSong>21 Songs</NumberSong> */}
    </Album>
  );
}
const Album = styled.div`
  margin: 0 12px;
  height: 100%;
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;
const Avatar = styled.img`
  border-radius: 10px;
  overflow: hidden;
  min-width: 306.31px;
  height: 100%;
  object-fit: cover;
`;
// const NameAlbums = styled.p`
//   margin-left: 20px;
//   font-size: 17px;
// `;
// const NumberSong = styled.p`
//   font-size: 16px;
//   margin-left: 20px;
// `;
