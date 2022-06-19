import CatogoryName from "./CategoryName";
import Choose from "./Choose";
import { listDetailCato } from "./contants";
import React from "react";

export default function CatogoryList({ id, name }) {
  const listChoose = [];
  for (let i = 0; i < listDetailCato[id].length; i++) {
    listChoose.push(
      <Choose
        key={i}
        id={listDetailCato[id][i].id}
        icon={listDetailCato[id][i].iconChoose}
        text={listDetailCato[id][i].nameChoose}
        name={listDetailCato[id][i].namePage}
      ></Choose>
    );
  }
  return (
    <>
      <CatogoryName name={name}></CatogoryName>
      {listChoose}
    </>
  );
}
