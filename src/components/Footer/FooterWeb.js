import React from "react";
import { useState } from "react";
import styled from "styled-components";
import InfoSong from "./InfoSong";
import ManipulateSong from "./ManipulateSong";
import ProgressSong from "./ProgressSong";
import VolumeSong from "./VolumeSong";

export default function FooterWeb() {
  // const [Playing, setPlaying] = useState(false);
  // const handlePlaying = () => {
  //   setPlaying(!Playing);
  // };
  return (
    <WapperFooter>
      <WapperInfoSong>
        <InfoSong></InfoSong>
      </WapperInfoSong>
      <Midder>
        <ManipulateSong></ManipulateSong>
        <ProgressSong></ProgressSong>
      </Midder>
      <WapperVolumeSong>
        <VolumeSong></VolumeSong>
      </WapperVolumeSong>
    </WapperFooter>
  );
}
const WapperFooter = styled.div`
  display: flex;
  /* justify-content: space-evenly; */
  background-color: rgb(153, 204, 255);
  z-index: 1;
  width: 100%;
  height: calc(100vh - 570px);
  position: relative;
`;
const Midder = styled.div`
  width: 50%;
  display: flex;
  /* margin: 0 20%; */
  flex-direction: column;
  z-index: 1;
  justify-content: center;
`;
const WapperInfoSong = styled.div`
  width: 25%;
`;
const WapperVolumeSong = styled.div`
  width: 25%;
  justify-content: flex-start;
  align-items: center;
  display: flex;
`;
