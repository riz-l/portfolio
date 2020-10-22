// Import: Dependencies
import React, { useEffect } from "react";
import InfoIcon from "@material-ui/icons/Info";

// Import: Data
import {
  aboutObjOne,
  aboutObjTwo,
  aboutObjThree,
  aboutObjFour,
} from "./aboutData";

// Import: Styled Components
import {
  AboutContainer,
  AboutSplashContainer,
  AboutSplash,
  AboutSplashLeft,
  AboutSplashRight,
  AboutIconContainer,
} from "./About.elements";

// Import: Components
import { ContentSection, Skills } from "../../components";

// Page: About
function About() {
  // Upon navigation to About, moves DOM to top of window
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <AboutContainer>
      <AboutSplashContainer>
        <AboutSplash>
          <AboutSplashLeft>
            <h1>About</h1>
            <h2>Hi, I'm Riz.</h2>
          </AboutSplashLeft>

          <AboutSplashRight>
            <AboutIconContainer>
              <InfoIcon />
            </AboutIconContainer>
          </AboutSplashRight>
        </AboutSplash>
      </AboutSplashContainer>

      {/* About Me */}
      <ContentSection {...aboutObjOne} />

      {/* Skills */}
      <Skills />

      {/* Work Experience */}
      <ContentSection {...aboutObjTwo} />

      {/* Education */}
      <ContentSection {...aboutObjThree} />

      {/* Other */}
      <ContentSection {...aboutObjFour} />
    </AboutContainer>
  );
}

// Export: About
export default About;
