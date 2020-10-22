// Import: Dependencies
import styled, { keyframes } from "styled-components";

// Styled: ContactContainer
export const ContactContainer = styled.div`
  height: auto;
  position: relative;
  width: 100%;
`;

// Styled: ContactSplashContainer
export const ContactSplashContainer = styled.section`
  background: ${(props) => props.theme.colors.global.backgroundPrimary};
  height: 84vh;
  transition: all 150ms linear;
  width: 100%;

  @media screen and (max-width: 1434px) {
    height: auto;
  }
`;

// Styled: ContactSplash
export const ContactSplash = styled.div`
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

// Styled: ContactSplashLeft
export const ContactSplashLeft = styled.div`
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
    font-size: 6rem;
    font-weight: 600;
    letter-spacing: 8px;
    text-transform: uppercase;
    transition: all 150ms linear;

    @media screen and (max-width: 718px) {
      font-size: 4.6rem;
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

// Styled: ContactSplashRight
export const ContactSplashRight = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  height: 100%;
  justify-content: flex-end;
  margin: 1rem 0;
  width: 100%;

  @media screen and (max-width: 1434px) {
    justify-content: center;
    margin: 6rem 0;
  }
`;

// Styled: ContactFormWrapper
export const ContactFormWrapper = styled.div`
  background: ${(props) => props.theme.colors.global.backgroundPrimary};
`;

// Styled: splashGradient
const splashGradient = keyframes`
    0% {background-position: 0 50%};
    50% {background-position: 100% 50%};
    100% {background-position: 0 50%};
`;

// Styled: ContactIconContainer
export const ContactIconContainer = styled.div`
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
    color: ${(props) => props.theme.colors.global.backgroundPrimary};
    font-size: 24rem;
    transition: all 150ms linear;

    @media screen and (max-width: 570px) {
      font-size: 18rem;
    }
  }
`;

// Styled: ContactWrapper
export const ContactWrapper = styled.div`
  background: red !important;
  width: 100%;
  height: 100%;
`;
