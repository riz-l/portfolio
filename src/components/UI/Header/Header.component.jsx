// Import: Dependencies
import React from "react";
import styled from "styled-components";

// Import: Material UI Icons
import MenuIcon from "@material-ui/icons/Menu";
import Brightness2Icon from "@material-ui/icons/Brightness2";
import WbSunnyIcon from "@material-ui/icons/WbSunny";

// Import: Material Core
import { IconButton } from "@material-ui/core";

// UI: Header
function Header({ isDarkTheme, setIsDarkTheme }) {
  return (
    <HeaderContainer>
      <HeaderWrapper>
        <HeaderLeft>
          <p>Riz</p>
        </HeaderLeft>

        <HeaderCenter></HeaderCenter>

        <HeaderRight>
          <IconButton
            onClick={() => {
              setIsDarkTheme((isDarkTheme) => !isDarkTheme);
              localStorage.setItem(
                "isDarkTheme",
                (isDarkTheme) => !isDarkTheme
              );
            }}
          >
            {isDarkTheme ? <Brightness2Icon /> : <WbSunnyIcon />}
          </IconButton>

          <IconButton>
            <MenuIcon />
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
  background: ${(props) => props.theme.colors.global.backgroundSecondary};
  box-shadow: 0 5px 8px -9px rgba(0, 0, 0, 0.75);
  display: flex;
  justify-content: center;
  position: sticky;
  top: 0;
  transition: all 150ms linear;
  z-index: 100;
`;

// Styled: HeaderWrapper
const HeaderWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  margin: auto;
  width: 75%;

  @media screen and (max-width: 1024px) {
    width: 85%;
  }
`;

// Styled: HeaderLeft
const HeaderLeft = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-evenly;

  & p {
    color: ${(props) => props.theme.colors.global.textPrimary};
    font-size: 2rem;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: lowercase;
  }
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
      background-color: ${(props) =>
        props.theme.colors.global.backgroundPrimary};
      transition: all 150ms linear;
    }

    & .MuiIconButton-label {
      & .MuiSvgIcon-root {
        color: ${(props) => props.theme.colors.global.textPrimary};
        transition: all 150ms linear;
      }
    }
  }
`;
