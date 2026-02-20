import styled, {css} from "styled-components";
import React from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 90px;
  padding-top: 20px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  box-shadow: 8px 0 30px rgba(0, 0, 0, 0.15);
  border-right: 1px solid rgba(255, 255, 255, 0.2);
`;

const VRSLogoImage = styled.img`
  margin-top: 15px;
  margin-bottom: 28px;
`;

const MenuImage = styled.img`
  width: 36px;
  height: 36px;
  object-fit: cover;
  filter: brightness(0) invert(1);
  transition: all 0.3s ease;
`;

const MenuContainer = styled.span`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 16px 24px;
  margin: 12px 0;
  justify-content: center;
  cursor: pointer;
  border-radius: 12px;
  transition: all 0.3s ease;
  ${(props) =>
    props.isSelected
        ? css`
          opacity: 1;
          background: rgba(255, 255, 255, 0.2);
          box-shadow: 0 4px 15px rgba(255, 255, 255, 0.2);
        `
        : css`
          opacity: 0.6;
          &:hover {
            opacity: 0.8;
            background: rgba(255, 255, 255, 0.1);
          }
        `}
`;
const SideMenuComponent = (props) => {
    const onMenuClick = (activeMenu) => {
        props.changeTab(activeMenu)
    }
    return (
        <Container>
            <MenuContainer isSelected={props.selectedTab === "home"} onClick={() => onMenuClick("home")}>
                <MenuImage src="/images/wallet.png"/>
            </MenuContainer>
            <MenuContainer isSelected={props.selectedTab === "categories"} onClick={() => onMenuClick("categories")}>
                <MenuImage src="/images/tag.png"/>
            </MenuContainer>
            <MenuContainer isSelected={props.selectedTab === "reports"} onClick={() => onMenuClick("reports")}>
                <MenuImage src="/images/pie-chart.png"/>
            </MenuContainer>
        </Container>
    );
};

export default SideMenuComponent;
