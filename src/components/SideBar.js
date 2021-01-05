import React from "react";
import styled from "styled-components";
import { menuData } from "../data/MenuData";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import Button from "./Button";

const SideBarContainer = styled.div`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #cd853f;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: 1;
`;

const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;
const CloseIcon = styled(FaTimes)`
  color: #000d1a;
`;
const SideBarWrapper = styled.div``;
const SideBarMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 80px);
  text-align: center;
  margin-bottom: 4rem;
`;
const SideBarLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
`;

const BtnWrap = styled.div``;

const SideBar = () => {
  return (
    <SideBarContainer>
      <Icon>
        <CloseIcon />
      </Icon>

      <SideBarWrapper>
        <SideBarMenu>
          {menuData.map((item, index) => (
            <SideBarLink to={item.link} key={index}>
              {item.title}
            </SideBarLink>
          ))}
        </SideBarMenu>

        <BtnWrap>
          <Button primary="true" round="true" big="true" to="/contact">
            Contact Us
          </Button>
        </BtnWrap>
      </SideBarWrapper>
    </SideBarContainer>
  );
};

export default SideBar;
