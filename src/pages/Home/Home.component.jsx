// Import: Dependencies
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

// Import: Styled Components
import {
  HomeContainer,
  HomeSplash,
  HomeTextContainer,
  HomeTextCTA,
  HomeGalleryContainer,
  HomeAboutContainer,
  HomeAboutWrapper,
} from "./Home.elements";

// Import: Components
import { Gallery } from "../../components";

// Page: Home
function Home() {
  // Upon navigation to Home, moves DOM to top of window
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
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
            I'm currently working for DXC Technology as a Front-end Developer -
            a role where I'm able to learn exciting new technologies daily,
            whilst tackling real-life problems. When I'm not working my day job,
            I sit as a lead for the Mobile Application Adoption in Defence work
            stream for Team Defence Information's JIG-V.
          </p>

          <Link to="/about">
            <HomeTextCTA>
              <span>About me</span>
            </HomeTextCTA>
          </Link>
        </HomeAboutWrapper>
      </HomeAboutContainer>
    </HomeContainer>
  );
}

// Export: Home
export default Home;
