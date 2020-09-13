// Import: Dependencies
import React from "react";
import styled from "styled-components";

// page: Home
function Home() {
  return (
    <HomeContainer>
      <HomeIntro>
        <h1>Hello, world!</h1>
        <h2>Hi, I'm Riz.</h2>
      </HomeIntro>
    </HomeContainer>
  );
}

// Export: Home
export default Home;

// Styled: HomeContainer
const HomeContainer = styled.main`
  background: ${(props) => props.theme.colors.global.backgroundPrimary};
  min-height: 100vh;
  width: 100%;
`;

// Styled: HomeIntro
const HomeIntro = styled.div`
  display: grid;
  margin: auto;
  place-items: center;
  width: 75%;

  @media screen and (max-width: 1024px) {
    width: 85%;
  }
`;
