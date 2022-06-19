import React from "react";
import { useState } from "react";
import styled from "styled-components";

export default function Header() {
  const [toggle, setToggle] = useState(false);
  const toggleTableSetting = () => {
    const icon = document.querySelector(".iconSetting i");
    if (icon.classList.contains("fa-caret-down")) {
      icon.classList.add("fa-caret-up");
      icon.classList.remove("fa-caret-down");
    } else {
      icon.classList.remove("fa-caret-up");
      icon.classList.add("fa-caret-down");
    }
    setToggle(!toggle);
  };
  return (
    <Wapper>
      <HeaderRight>
        <SearchHeader>
          <IconSearch>
            <TagI className="fa fa-search iconSearch" aria-hidden="true"></TagI>
          </IconSearch>
          <InputSearch
            type="text"
            placeholder="Search Song, Artist, Album,..."
          ></InputSearch>
        </SearchHeader>
        <Notification>
          <TagI className="fa fa-bell" aria-hidden="true"></TagI>
        </Notification>
        <UserAndSetting>
          <User>
            <AvatarUser src="./image/CenturesImg.jpg"></AvatarUser>
            <NameAndTypeAccount>
              <NameUser>Cuong Nguyen</NameUser>
              <TypeAccount>VIP</TypeAccount>
            </NameAndTypeAccount>
          </User>
          <Setting>
            <IconSetting
              className="iconSetting"
              onClick={() => toggleTableSetting()}
            >
              <i className="fa fa-caret-down" aria-hidden="true"></i>
            </IconSetting>
            <TableSetting className={toggle === true ? "active" : ""}>
              <WapperChoose>
                <TagI className="fa fa-upload" aria-hidden="true"></TagI>
                <ChooseSetting>Tải nhạc lên</ChooseSetting>
              </WapperChoose>
              <WapperChoose>
                <TagI className="fa fa-money" aria-hidden="true"></TagI>
                <ChooseSetting>Mua VIP</ChooseSetting>
              </WapperChoose>

              <WapperChoose>
                <TagI className="fa fa-key" aria-hidden="true"></TagI>
                <ChooseSetting>Đổi mật khẩu</ChooseSetting>
              </WapperChoose>

              <WapperChoose>
                <TagI className="fa fa-sign-out" aria-hidden="true"></TagI>
                <ChooseSetting>Đăng xuất</ChooseSetting>
              </WapperChoose>
            </TableSetting>
          </Setting>
        </UserAndSetting>
      </HeaderRight>
    </Wapper>
  );
}
const Wapper = styled.div`
  height: 60px;
  width: 100%;
  padding: 0 20px 0 40px;
  border-bottom: 2px solid black;
  background-color: rgb(153, 221, 255);
  box-shadow: -2px 0px 6px rgb(179, 240, 255);
`;
const HeaderRight = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;
const SearchHeader = styled.div`
  height: 100%;
  width: 65%;
  display: flex;
  align-items: center;
  border-right: 2px solid black;
  > .iconSearch {
    font-size: 20px;
  }
`;

const IconSearch = styled.div`
  width: 25px;
  height: 25px;
`;
const InputSearch = styled.input`
  background-color: rgb(153, 221, 255);
  flex: 1;
  margin-left: 15px;
  outline: none;
  font-size: 18px;
  border: none;
`;
const Notification = styled.div`
  width: 7%;
  height: 100%;
  display: inline-flex;
  border-right: 2px solid black;
  align-items: center;
  justify-content: center;
`;
const TagI = styled.i`
  cursor: pointer;
`;
const UserAndSetting = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 25%;
  justify-content: space-evenly;
`;
const User = styled.div`
  display: flex;
  align-items: center;
`;
const AvatarUser = styled.img`
  margin: 0 10px;
  width: 40px;
  height: 40px;
  object-fit: cover;
  margin-right: 20px;
  cursor: pointer;
  border-radius: 50%;
`;
const NameAndTypeAccount = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
const NameUser = styled.p`
  font-size: 18px;
`;
const TypeAccount = styled.p`
  margin-top: 5px;
  font-size: 15px;
`;
const Setting = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  position: relative;
  color: black;
`;
const TableSetting = styled.div`
  display: none;
  z-index: 100;
  &.active {
    display: block;
  }
  position: absolute;
  content: "";
  top: 90%;
  left: -100px;
  width: 150px;
  height: 150px;
  border-radius: 10px;
  background-color: lightskyblue;
  overflow: hidden;
`;

const ChooseSetting = styled.p`
  margin-left: 15px;
  font-size: 17px;
`;
const WapperChoose = styled.div`
  padding: 0 0 0 10px;
  display: flex;
  align-items: center;
  width: 100%;
  height: 25%;
  cursor: pointer;
  &:hover {
    background-color: dodgerblue;
  }
`;
const IconSetting = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  background-color: aqua;
  border-radius: 50%;
`;
