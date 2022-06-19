import { nameOfCatogory } from "./contants";
import React from "react";
import styled from "styled-components/macro";
import CatogoryList from "./CatogoryList";

export default function CatogorySlideBar() {
  return (
    <WapperCatogorySlide>
      {nameOfCatogory.map(function (name, id) {
        if (id > 0) {
          return <CatogoryList key={id} name={name} id={id}></CatogoryList>;
        }
      })}
    </WapperCatogorySlide>
  );
}
const WapperCatogorySlide = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 5px;
  }
  &:hover::-webkit-scrollbar-thumb {
    background: #888;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;
