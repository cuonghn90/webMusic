import React from "react";
import styled from "styled-components";
import Catogory from "./Catogory";

export default function ContentLeft() {
  return (
    <WapperContentLeft>
      <Catogory></Catogory>
    </WapperContentLeft>
  );
}
const WapperContentLeft = styled.div`
  width: 20%;
  height: 570px;
  display: inline-flex;
  flex-direction: column;
  background-color: rgb(179, 240, 255);
  z-index: -1;
`;
