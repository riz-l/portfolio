// Import: Dependencies
import React from "react";
import styled from "styled-components";

// Import: Assets
import Switch from "../Switch/Switch.component";

// Import: Material UI Icons
import MenuIcon from "@material-ui/icons/Menu";

// Import: Material Core
import { IconButton } from "@material-ui/core";

// UI: Header
function Header({ isDarkTheme, setIsDarkTheme, isOpen, setIsOpen }) {
  return (
    <HeaderContainer>
      <HeaderWrapper>
        <HeaderLeft>
          <HeaderToggleLight>Light</HeaderToggleLight>
          <HeaderToggleScale>
            <Switch
              isOn={isDarkTheme}
              handleToggle={() => {
                setIsDarkTheme((isDarkTheme) => !isDarkTheme);
                localStorage.setItem(
                  "isDarkTheme",
                  (isDarkTheme) => !isDarkTheme
                );
              }}
              onColor="#06d6A0"
            />
          </HeaderToggleScale>
          <HeaderToggleDark>Dark</HeaderToggleDark>
        </HeaderLeft>

        <HeaderCenter></HeaderCenter>

        <HeaderRight>
          <IconButton onClick={() => setIsOpen((isOpen) => !isOpen)}>
            <MenuIcon fontSize="large" />
          </IconButton>
        </HeaderRight>
      </HeaderWrapper>
    </HeaderContainer>
  );
}

// Export: Header
export default Header;

// Styled: HeaderContainer
const HeaderContainer = styled.header`
  align-items: center;
  background: ${(props) => props.theme.colors.global.backgroundPrimary};
  box-shadow: 0 5px 8px -9px rgba(0, 0, 0, 0.75);
  display: flex;
  height: 8vh;
  min-height: 65px;
  justify-content: center;
  position: sticky;
  top: 0;
  transition: all 150ms linear;
  width: 100%;
  z-index: 100;
`;

// Styled: HeaderWrapper
const HeaderWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: auto;
  width: 70%;

  @media screen and (max-width: 1024px) {
    width: 85%;
  }
`;

// Styled: HeaderLeft
const HeaderLeft = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-evenly;
`;

// Styled: HeaderToggleScale
const HeaderToggleScale = styled.div`
  transform: scale(0.65);
  -webkit-tap-highlight-color: transparent;
`;

// Styled: HeaderToggleLight
const HeaderToggleLight = styled.span`
  color: ${(props) => props.theme.colors.global.textSecondary};
  letter-spacing: 1px;
  margin-right: 10px;
  text-transform: uppercase;

  @media screen and (max-width: 1024px) {
    display: none;
    margin-right: 0;
  }
`;

// Styled: HeaderToggleDark
const HeaderToggleDark = styled.span`
  color: ${(props) => props.theme.colors.global.textSecondary};
  letter-spacing: 1px;
  margin-left: 10px;
  text-transform: uppercase;
`;

// Styled: HeaderCenter
const HeaderCenter = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
`;

// Styled: HeaderRight
const HeaderRight = styled.div`
  display: flex;

  & .MuiButtonBase-root {
    margin-left: 1rem;
    transition: all 150ms linear;

    &:hover {
      background: ${(props) => props.theme.colors.global.backgroundSecondary};
      transition: all 150ms linear;
    }

    & .MuiIconButton-label {
      & .MuiSvgIcon-root {
        color: ${(props) => props.theme.colors.global.textSecondary};
        transition: all 150ms linear;
      }
    }
  }
`;
