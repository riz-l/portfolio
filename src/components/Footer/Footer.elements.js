// Import: Dependencies
import styled from "styled-components";

// Styled: FooterContainer
export const FooterContainer = styled.footer`
  background: ${(props) => props.theme.colors.global.backgroundPrimary};
  height: auto;
  transition: all 150ms linear;
  width: 100%;
`;

// Styled: FooterWrapper
export const FooterWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: auto;
  padding: 3.2rem 0;
  width: 70%;

  @media screen and (max-width: 1024px) {
    width: 85%;
  }
`;

// Styled: FooterHeader
export const FooterHeader = styled.div`
  align-items: flex-start;
  border-bottom: 1px solid ${(props) => props.theme.colors.global.textPrimary};
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  width: 100%;
  -webkit-tap-highlight-color: transparent;

  & h4 {
    color: ${(props) => props.theme.colors.global.textPrimary};
    cursor: pointer;
    font-size: 2.6rem;
    font-weight: 300;
    letter-spacing: 1px;
    text-transform: uppercase;
    transition: all 150ms linear;

    &:hover {
      color: ${(props) => props.theme.colors.global.highlightPrimary};
      transition: all 150ms linear;
    }
  }
`;

// Styled: FooterSocialContainer
export const FooterSocialContainer = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: flex-start;
  padding: 1rem 0 3rem 0;
  width: 100%;
`;

// Styled: FooterSocialItem
export const FooterSocialItem = styled.div`
  transition: background 150ms linear, border-radius 300ms linear,
    color 100ms linear;

  &:hover {
    .MuiIconButton-root {
      background-color: ${(props) =>
        props.theme.colors.global.backgroundSecondary};
    }
  }

  & .MuiButtonBase-root {
    background: ${(props) => props.theme.colors.global.backgroundSecondary};
    border-radius: 0;
    margin-right: 16px;
    transition: background 150ms linear, border-radius 300ms linear,
      color 100ms linear;

    & .MuiIconButton-label {
      & .MuiSvgIcon-root {
        color: ${(props) => props.theme.colors.global.textSecondary};
        transition: color 100ms linear;

        &:hover {
          color: ${(props) => props.theme.colors.global.highlightPrimary};
          transition: color 100ms linear;
        }
      }
    }

    &:hover {
      border-radius: 80px;
      transition: background 150ms linear, border-radius 300ms linear,
        color 100ms linear;

      & .MuiIconButton-label {
        & .MuiSvgIcon-root {
          color: ${(props) => props.theme.colors.global.highlightPrimary};
          transition: color 100ms linear;
        }
      }
    }
  }
`;

// Styled: FooterNavigation
export const FooterNavigation = styled.div`
  align-items: flex-start;
  display: flex;
  flex-wrap: wrap;
  height: auto;
  justify-content: flex-start;
  margin-top: 3rem;
  width: 100%;
`;

// Styled: FooterNavigationLinks
export const FooterNavigationLinks = styled.div`
  padding: 1rem 0;
  margin-right: 10px;
  min-width: 220px;

  & h5 {
    color: ${(props) => props.theme.colors.global.textPrimary};
    cursor: pointer;
    font-size: 22px;
    font-weight: 500;
    padding: 8px 0;
    transition: all 100ms linear;
    -webkit-tap-highlight-color: transparent;

    &:hover {
      color: ${(props) => props.theme.colors.global.highlightPrimary};
      transition: all 100ms linear;
    }
  }

  & ul {
    list-style: none;

    & li {
      color: ${(props) => props.theme.colors.global.textSecondary};
      cursor: pointer;
      font-size: 14px;
      margin: 6px 0;
      padding: 2px 0;
      transition: all 100ms linear;
      width: 70%;
      -webkit-tap-highlight-color: transparent;

      &:hover {
        color: ${(props) => props.theme.colors.global.highlightPrimary};
        transition: all 100ms linear;
      }
    }
  }
`;
