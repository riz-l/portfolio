// Import: Dependencies
import styled from "styled-components";

// Styled: HeaderContainer
export const HeaderContainer = styled.header`
  align-items: center;
  background: ${(props) => props.theme.colors.global.backgroundPrimary};
  box-shadow: 0 5px 8px -9px rgba(0, 0, 0, 0.75);
  display: flex;
  height: 8vh;
  max-height: 80px;
  min-height: 65px;
  justify-content: center;
  position: sticky;
  top: 0;
  transition: all 150ms linear;
  width: 100%;
  z-index: 100;
`;

// Styled: HeaderWrapper
export const HeaderWrapper = styled.div`
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
export const HeaderLeft = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-evenly;
`;

// Styled: HeaderToggleScale
export const HeaderToggleScale = styled.div`
  transform: scale(0.65);
  -webkit-tap-highlight-color: transparent;
`;

// Styled: HeaderToggleLight
export const HeaderToggleLight = styled.span`
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
export const HeaderToggleDark = styled.span`
  color: ${(props) => props.theme.colors.global.textSecondary};
  letter-spacing: 1px;
  margin-left: 10px;
  text-transform: uppercase;
`;

// Styled: HeaderCenter
export const HeaderCenter = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
`;

// Styled: HeaderRight
export const HeaderRight = styled.div`
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
