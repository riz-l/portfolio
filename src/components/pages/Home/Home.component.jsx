// Import: Dependencies
import React from "react";
import styled from "styled-components";

// page: Home
function Home({ isDarkTheme, setIsDarkTheme }) {
  return (
    <HomeContainer>
      <HomeSplash>
        <HomeTextContainer>
          <h1>Home</h1>
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

// Styled: HomeSplash
const HomeSplash = styled.div`
  background: ${(props) => props.theme.colors.global.highlightPrimary};
  min-height: 78vh;
  width: 100%;
`;

// Styled: HomeTextContainer
const HomeTextContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: auto;
  width: 95%;

  @media screen and (max-width: 1024px) {
    width: 85%;
  }
`;
