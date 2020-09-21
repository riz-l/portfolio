// Import: Dependencies
import React from "react";
import styled, { keyframes } from "styled-components";

// Import: Material UI Icons
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

// Import: UI
import Footer from "../../UI/Footer/Footer.component";
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

            <HomeTextCTA>
              <span>My work</span>
              <ExpandMoreIcon />
            </HomeTextCTA>
          </HomeTextContainer>
        </HomeSplash>

        <HomeGalleryContainer>
          <Gallery />
        </HomeGalleryContainer>

        <HomeAboutContainer>
          <HomeAboutWrapper>
            <h3>Hi, I'm Riz. Nice to meet you.</h3>
            <p>
              Since starting my career in the tech industry, I've been craving
              opportunities to learn and push myself. Armed with VS Code, Figma
              and plenty of coffee, I'm ready for a challenge.
            </p>

            <p>
              I'm currently working for DXC Technology as a React JS developer -
              a role where I'm able to learn exciting new technologies daily,
              whilst tackling real-life problems. When I'm not doing my day job,
              I sit as a lead for the Mobile Application Adoption in Defence
              work stream for Team Defence Information's JIG-V.
            </p>

            <HomeTextCTA>
              <span>About me</span>
            </HomeTextCTA>
          </HomeAboutWrapper>
        </HomeAboutContainer>

        <Footer />
      </HomeContainer>
    </>
  );
}

// Export: Home
export default Home;

// Styled: HomeContainer
const HomeContainer = styled.main`
  background: ${(props) => props.theme.colors.global.backgroundPrimary};
  height: auto;
  position: relative;
  transition: all 150ms linear;
  width: 100%;
`;

// Styled: homeGradient
const homeGradient = keyframes`
    0% {background-position: 0 50%};
    50% {background-position: 100% 50%};
    100% {background-position: 0 50%};
`;

// Styled: HomeSplash
const HomeSplash = styled.section`
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
  height: 84vh;
  padding-bottom: 18rem;
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
  padding-top: 18rem;
  text-align: center;
  transition: all 150ms linear;
  width: 70%;

  @media screen and (max-width: 1024px) {
    width: 85%;
  }

  & h1 {
    color: ${(props) => props.theme.colors.global.backgroundPrimary};
    font-size: 6rem;
    font-weight: 600;
    letter-spacing: 1.2rem;
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

// Styled: HomeTextCTA
const HomeTextCTA = styled.div`
  align-items: center;
  background: ${(props) => props.theme.colors.global.backgroundSecondary};
  color: ${(props) => props.theme.colors.global.textSecondary};
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  margin-top: 4rem;
  padding: 1rem 2rem;
  text-align: center;
  transition: background 150ms linear, color 150ms linear,
    border-radius 300ms linear;

  &:hover {
    color: ${(props) => props.theme.colors.global.highlightPrimary};
    background: ${(props) => props.theme.colors.global.backgroundSecondary};
    border-radius: 80px;
    transition: background 150ms linear, color 150ms linear,
      border-radius 300ms linear;
  }

  & span {
    font-size: 1.4rem;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  & svg {
    margin-left: 10px;
  }
`;

// Styled: HomeGalleryContainer
const HomeGalleryContainer = styled.div`
  margin-top: -8rem;
  padding: 3.2rem 0;
`;

// Styled: HomeAboutContainer
const HomeAboutContainer = styled.section`
  background: ${(props) => props.theme.colors.global.backgroundPrimary};
  height: auto;
  margin: 3.2rem 0;
  transition: all 150ms linear;
  width: 100%;
`;

// Styled: HomeAboutWrapper
const HomeAboutWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  padding: 3.2rem 0;
  transition: all 150ms linear;
  width: 60%;

  @media screen and (max-width: 1024px) {
    width: 75%;
  }

  & h3 {
    color: ${(props) => props.theme.colors.global.textPrimary};
    font-size: 3rem;
    font-weight: 300;
    letter-spacing: 1px;
    margin-bottom: 3.2rem;
    text-transform: uppercase;
  }

  & p {
    color: ${(props) => props.theme.colors.global.textSecondary};
    font-size: 1.4rem;
    line-height: 2.4rem;
    padding: 1rem 0;
  }
`;
