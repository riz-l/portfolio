// Import: Dependencies
import styled, { keyframes } from "styled-components";

// Styled: PortfolioContainer
export const PortfolioContainer = styled.div`
  height: auto;
  position: relative;
  width: 100%;
`;

// Styled: PortfolioSplashContainer
export const PortfolioSplashContainer = styled.section`
  background: ${(props) => props.theme.colors.global.backgroundPrimary};
  height: 84vh;
  transition: all 150ms linear;
  width: 100%;

  @media screen and (max-width: 1434px) {
    height: auto;
  }
`;

// Styled: PortfolioSplash
export const PortfolioSplash = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  margin: auto;
  width: 70%;

  @media screen and (max-width: 1434px) {
    flex-direction: column;
  }

  @media screen and (max-width: 1024px) {
    width: 85%;
  }
`;

// Styled: PortfolioSplashLeft
export const PortfolioSplashLeft = styled.div`
  align-items: flex-start;
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  width: 100%;

  @media screen and (max-width: 1434px) {
    align-items: center;
    margin-top: 15.5rem;
  }

  & h1 {
    color: ${(props) => props.theme.colors.global.textPrimary};
    font-size: 5rem;
    font-weight: 600;
    letter-spacing: 8px;
    text-transform: uppercase;
    transition: all 150ms linear;

    @media screen and (max-width: 718px) {
      font-size: 4.6rem;
    }

    @media screen and (max-width: 556px) {
      font-size: 3.6rem;
    }

    @media screen and (max-width: 428px) {
      font-size: 2.7rem;
    }
  }

  & h2 {
    color: ${(props) => props.theme.colors.global.textSecondary};
    font-size: 2.5rem;
    font-weight: 300;
    letter-spacing: 2px;
    text-transform: uppercase;
    transition: all 150ms linear;

    @media screen and (max-width: 570px) {
      font-size: 2.2rem;
    }
  }
`;

// Styled: PortfolioSplashRight
export const PortfolioSplashRight = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  height: 100%;
  justify-content: flex-end;
  margin: 1rem 0;
  width: 100%;

  @media screen and (max-width: 1434px) {
    justify-content: center;
    margin: 12rem 0;
  }
`;

// Styled: splashGradient
const splashGradient = keyframes`
    0% {background-position: 0 50%};
    50% {background-position: 100% 50%};
    100% {background-position: 0 50%};
`;

// Styled: PortfolioIconContainer
export const PortfolioIconContainer = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  justify-content: center;

  & svg {
    animation-duration: 10s;
    animation-name: ${splashGradient};
    animation-iteration-count: infinite;
    background: ${(props) => props.theme.colors.global.backgroundSecondary};
    background: linear-gradient(
      -45deg,
      ${(props) => props.theme.colors.homeGradient.gradientPrimary} 15%,
      ${(props) => props.theme.colors.homeGradient.gradientSecondary},
      ${(props) => props.theme.colors.homeGradient.gradientTertiary}
    );
    background-size: 400% 400%;
    border-radius: 100%;
    color: ${(props) => props.theme.colors.global.textPrimary};
    font-size: 24rem;

    @media screen and (max-width: 570px) {
      font-size: 18rem;
    }
  }
`;
