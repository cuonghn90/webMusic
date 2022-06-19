import React from "react";
import styled from "styled-components/macro";

export default function CatogoryName({ name }) {
  return (
    <WapperText>
      <Text>{name}</Text>
    </WapperText>
  );
}
const WapperText = styled.div`
  margin: 20px 0px 7px 0px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Text = styled.p`
  font-size: 26px;
`;
