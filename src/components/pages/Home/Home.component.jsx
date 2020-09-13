// Import: Dependencies
import React from "react";
import styled, { keyframes } from "styled-components";

// page: Home
function Home({ isDarkTheme, setIsDarkTheme }) {
  return (
    <HomeContainer>
      <HomeSplash>
        <HomeTextContainer>
          <h1>Riz Layton</h1>
          <h2>Web &amp; App Developer</h2>
        </HomeTextContainer>
      </HomeSplash>
    </HomeContainer>
  );
}

// Export: Home
export default Home;

// Styled: HomeContainer
const HomeContainer = styled.main`
  background: ${(props) => props.theme.colors.global.backgroundSecondary};
  min-height: 92vh;
  padding-bottom: 4rem;
  transition: all 150ms linear;
`;

// Styled: homeGradient
const homeGradient = keyframes`
    0% {background-position: 0 50%};
    50% {background-position: 100% 50%};
    100% {background-position: 0 50%};
`;

// Styled: HomeSplash
const HomeSplash = styled.div`
  animation-duration: 10s;
  animation-name: ${homeGradient};
  animation-iteration-count: infinite;
  background: ${(props) => props.theme.colors.global.backgroundSecondary};
  background: linear-gradient(
    -45deg,
    ${(props) => props.theme.colors.global.highlightPrimary} 15%,
    #86a8e7,
    #5ffbf1
  );
  background-size: 400% 400%;
  height: 80vh;
  position: relative;
  transition: all 150s linear;
`;

// Styled: HomeTextContainer
const HomeTextContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  margin: auto;
  transition: all 150ms linear;
  width: 95%;

  @media screen and (max-width: 1024px) {
    width: 85%;
  }

  & h1 {
    color: ${(props) => props.theme.colors.header.backgroundPrimary};
    font-size: 10rem;
    font-weight: 600;
    letter-spacing: 1.2rem;
    padding-bottom: 2rem;
    text-transform: uppercase;
  }

  & h2 {
    color: ${(props) => props.theme.colors.header.backgroundSecondary};
    font-size: 2.5rem;
    font-weight: 300;
    letter-spacing: 4px;
    text-transform: uppercase;
  }
`;
