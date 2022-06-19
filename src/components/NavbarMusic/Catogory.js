import { nameOfCatogory } from "./contants";
import React from "react";
import styled from "styled-components/macro";
import CatogoryList from "./CatogoryList";
import CatogorySlideBar from "./CategorySlideBar";
export default function Catogory() {
  return (
    <>
      <WapperCatogory>
        {nameOfCatogory.map(function (name, id) {
          if (id < 1) {
            return <CatogoryList key={id} name={name} id={id}></CatogoryList>;
          }
        })}
      </WapperCatogory>
      <CatogorySlideBar></CatogorySlideBar>
    </>
  );
}
const WapperCatogory = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  z-index: 1;
  box-shadow: 0px 15px 10px rgb(153, 235, 255), 0px 5px 6px rgb(230, 250, 255);
  margin-bottom: 14px;
`;
