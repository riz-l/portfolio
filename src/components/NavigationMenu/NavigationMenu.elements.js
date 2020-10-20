// Import: Dependencies
import styled from "styled-components";

// Styled: NavigationMenuContainer
export const NavigationMenuContainer = styled.nav`
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
export const NavigationToggleContainer = styled.div`
  align-items: center;
  display: flex;
  height: 8vh;
  max-height: 80px;
  min-height: 65px;
  justify-content: center;
  top: 0;
  transition: all 150ms linear;
  z-index: 100;
`;

// Styled: NavigationToggle
export const NavigationToggle = styled.div`
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
export const NavigationOptions = styled.div`
  display: flex;
  flex-direction: column;
  height: 80vh;
  align-items: center;
  justify-content: center;
  margin: auto;

  & p {
    color: ${(props) => props.theme.colors.global.textPrimary};
    cursor: pointer;
    font-size: 2.4rem;
    font-weight: 600;
    letter-spacing: 2px;
    padding: 2rem 0;
    text-transform: uppercase;
    transition: color 150ms linear;

    &:hover {
      color: ${(props) => props.theme.colors.global.highlightPrimary};
      transition: color 150ms linear;
    }

    @media screen and (max-width: 1024px) {
      font-size: 1.8rem;
    }
  }
`;
