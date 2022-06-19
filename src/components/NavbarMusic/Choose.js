import React from "react";
import { useContext } from "react";
import styled from "styled-components/macro";
import { ChangePage } from "../../App";

export default function Choose({ icon, text, id, name }) {
  const data = useContext(ChangePage);
  const handleToglle = (id) => {
    const x = document.querySelectorAll(".choose");
    for (let i = 0; i < x.length; i++) {
      if (x[i].getAttribute("data-id") == id) {
        x[i].classList.add("active");
      } else {
        x[i].classList.remove("active");
      }
    }
    data.handleChangeNamePage(name);
  };
  return (
    <WapperChoose
      className={id == 0 ? "choose active" : "choose"}
      data-id={id}
      onClick={() => handleToglle(id)}
    >
      <IconChoose>{icon}</IconChoose>
      <TextChoose>{text}</TextChoose>
    </WapperChoose>
  );
}
const WapperChoose = styled.div`
  width: 100%;
  height: 100%;
  padding: 7px 10px;
  display: flex;
  align-items: center;
  padding-left: 25px;
  z-index: 1;
  position: relative;
  cursor: pointer;
  &.active::before {
    position: absolute;
    height: 100%;
    background-color: orange;
    content: "";
    left: 0px;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    z-index: -1;
    width: 90%;
  }
`;
const IconChoose = styled.span`
  font-size: 19px;
  margin-right: 25px;
`;
const TextChoose = styled.p`
  font-size: 16px;
`;
