// Import: Dependencies
import styled from "styled-components";

// Styled: AboutContainer
export const AboutContainer = styled.div`
  height: auto;
  position: relative;
  width: 100%;
`;

// Styled: AboutSplashContainer
export const AboutSplashContainer = styled.section`
  background: ${(props) => props.theme.colors.global.backgroundPrimary};
  height: 84vh;
  transition: all 150ms linear;
  width: 100%;

  @media screen and (max-width: 1290px) {
    height: auto;
  }
`;

// Styled: AboutSplash
export const AboutSplash = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  margin: auto;
  width: 70%;

  @media screen and (max-width: 1290px) {
    flex-direction: column;
  }

  @media screen and (max-width: 1024px) {
    width: 85%;
  }
`;

// Styled: AboutSplashLeft
export const AboutSplashLeft = styled.div`
  align-items: flex-start;
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  width: 100%;

  @media screen and (max-width: 1290px) {
    align-items: center;
    margin-top: 180px;
  }

  & h1 {
    color: ${(props) => props.theme.colors.global.textPrimary};
    font-size: 6rem;
    font-weight: 600;
    letter-spacing: 8px;
    text-transform: uppercase;
    transition: all 150ms linear;

    @media screen and (max-width: 1030px) {
      font-size: 5.5rem;
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
    color: ${(props) => props.theme.colors.global.textSecondary};
    font-size: 2.5rem;
    font-weight: 300;
    letter-spacing: 2px;
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

// Styled: AboutSplashRight
export const AboutSplashRight = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  height: 100%;
  justify-content: flex-end;
  width: 100%;

  @media screen and (max-width: 1290px) {
    justify-content: center;
    margin: 6rem 0;
  }
`;

// Styled: AboutSplashImageContainer
export const AboutSplashImageContainer = styled.div`
  align-items: center;
  display: flex;
  height: 90%;
  justify-content: center;
  width: 90%;
  transition: all 150ms linear;

  & img {
    background: ${(props) => props.theme.colors.global.textPrimary};
    box-shadow: 0 5px 8px -9px rgba(0, 0, 0, 0.75);
    margin: auto;
    padding: 2rem;
    width: 80%;
    transition: all 150ms linear;
  }
`;
