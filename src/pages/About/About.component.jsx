// Import: Dependencies
import React, { useEffect } from "react";

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
  AboutSplashImageContainer,
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
            <AboutSplashImageContainer>
              <img
                src="https://images.unsplash.com/photo-1544030622-5c2c58b1c463?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80"
                alt="It's me, Riz!"
              />
            </AboutSplashImageContainer>
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
