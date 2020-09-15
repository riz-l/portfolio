// Import: Dependencies
import React from "react";
import styled, { keyframes } from "styled-components";

// Import: UI
import Gallery from "../../UI/Gallery/Gallery.component";

// page: Home
function Home() {
  return (
    <>
      <HomeContainer>
        <HomeSplash>
          <HomeTextContainer>
            <h1>Riz Layton</h1>
            <h2>Web &amp; App Developer</h2>
          </HomeTextContainer>
        </HomeSplash>

        <Gallery />
      </HomeContainer>
      <HomeAboutContainer></HomeAboutContainer>
    </>
  );
}

// Export: Home
export default Home;

// Styled: HomeContainer
const HomeContainer = styled.main`
  background: ${(props) => props.theme.colors.global.backgroundSecondary};
  height: auto;
  transition: all 150ms linear;
  width: 100%;

  position: relative;
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
    ${(props) => props.theme.colors.homeGradient.gradientPrimary} 15%,
    ${(props) => props.theme.colors.homeGradient.gradientSecondary},
    ${(props) => props.theme.colors.homeGradient.gradientTertiary}
  );
  background-size: 400% 400%;
  height: 80vh;
  min-height: 700px;
  position: relative;
  transition: all 350ms ease-in-out;
`;

// Styled: HomeTextContainer
const HomeTextContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  margin: auto;
  text-align: center;
  transition: all 150ms linear;
  width: 70%;

  @media screen and (max-width: 1024px) {
    width: 85%;
  }

  & h1 {
    color: ${(props) => props.theme.colors.global.backgroundPrimary};
    font-size: 10rem;
    font-weight: 600;
    letter-spacing: 1.2rem;
    padding-bottom: 2rem;
    text-transform: uppercase;
    transition: all 150ms linear;

    @media screen and (max-width: 1536px) {
      font-size: 8rem;
    }

    @media screen and (max-width: 1284px) {
      font-size: 6rem;
    }

    @media screen and (max-width: 1030px) {
      font-size: 5.8rem;
    }

    @media screen and (max-width: 830px) {
      font-size: 5rem;
    }

    @media screen and (max-width: 746px) {
      font-size: 4rem;
      padding-bottom: 1rem;
    }

    @media screen and (max-width: 406px) {
      font-size: 3rem;
    }
  }

  & h2 {
    color: ${(props) => props.theme.colors.global.backgroundSecondary};
    font-size: 2.5rem;
    font-weight: 300;
    letter-spacing: 4px;
    text-transform: uppercase;
    transition: all 150ms linear;

    @media screen and (max-width: 830px) {
      font-size: 2rem;
    }

    @media screen and (max-width: 642px) {
      font-size: 1.4rem;
    }

    @media screen and (max-width: 406px) {
      font-size: 1rem;
    }
  }
`;

// Styled: HomeAboutContainer
const HomeAboutContainer = styled.div`
  background: ${(props) => props.theme.colors.global.backgroundPrimary};
  min-height: 260vh;
  transition: all 150ms linear;
  width: 100%;
`;
