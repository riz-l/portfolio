// Import: Dependencies
import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// Import: Material UI Icons
import CloseIcon from "@material-ui/icons/Close";

// Import: Material Core
import { IconButton } from "@material-ui/core";

// UI: NavigationMenu
function NavigationMenu({ isDarkTheme, isOpen, setIsOpen }) {
  // Upon navigation from NavigationMenu, moves DOM to top of window
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <NavigationMenuContainer isOpen={isOpen} isDarkTheme={isDarkTheme}>
      <NavigationToggleContainer>
        <NavigationToggle>
          <IconButton onClick={() => setIsOpen((isOpen) => !isOpen)}>
            <CloseIcon fontSize="large" />
          </IconButton>
        </NavigationToggle>
      </NavigationToggleContainer>

      <NavigationOptions>
        <Link
          to="/"
          onClick={() => {
            setIsOpen((isOpen) => !isOpen);
          }}
        >
          <p>Home</p>
        </Link>

        <Link
          to="/portfolio"
          onClick={() => {
            setIsOpen((isOpen) => !isOpen);
          }}
        >
          <p>Portfolio</p>
        </Link>

        <Link
          to="/about"
          onClick={() => {
            setIsOpen((isOpen) => !isOpen);
          }}
        >
          <p>About</p>
        </Link>

        <Link
          to="/contact"
          onClick={() => {
            setIsOpen((isOpen) => !isOpen);
          }}
        >
          <p>Contact</p>
        </Link>
      </NavigationOptions>
    </NavigationMenuContainer>
  );
}

// Export: NavigationMenu
export default NavigationMenu;

// Styled: NavigationMenuContainer
const NavigationMenuContainer = styled.nav`
  background: ${(props) => props.theme.colors.global.backgroundPrimary};
  height: 100vh;
  max-height: 100vh;
  min-height: 100vh;
  position: fixed;
  right: 0;
  top: 0;
  transform: ${({ isOpen }) => (isOpen ? `translateX(0)` : `translateX(100%)`)};
  transition: transform 0.3s ease-in-out, visibility 0.3s ease-in-out;
  visibility: ${({ isOpen }) => (isOpen ? `visible` : `hidden`)};
  width: 100vw;
  max-width: 100vw;
  min-width: 100vw;
  z-index: 99999;
`;

// Styled: NavigationToggleContainer
const NavigationToggleContainer = styled.div`
  align-items: center;
  display: flex;
  height: 8vh;
  justify-content: center;
  top: 0;
  transition: all 150ms linear;
  z-index: 100;
`;

// Styled: NavigationToggle
const NavigationToggle = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-end;
  margin: auto;
  width: 70%;

  @media screen and (max-width: 1024px) {
    width: 85%;
  }

  & .MuiButtonBase-root {
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

// Styled: NavigationOptions
const NavigationOptions = styled.div`
  display: flex;
  flex-direction: column;
  height: 92vh;
  align-items: center;
  justify-content: center;
  margin: auto;

  & p {
    color: ${(props) => props.theme.colors.global.textPrimary};
    cursor: pointer;
    font-size: 3rem;
    font-weight: 600;
    letter-spacing: 2px;
    padding: 2rem 0;
    text-transform: uppercase;
    transition: color 0.3s linear;

    &:hover {
      color: ${(props) => props.theme.colors.global.highlightPrimary};
      transition: color 0.3s linear;
    }
  }
`;
