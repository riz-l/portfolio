// Import: Dependencies
import React, { useEffect } from "react";
import styled from "styled-components";

// page: About
function About() {
  // Upon navigation to About, moves DOM to top of window
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <AboutContainer>
      <AboutSplash></AboutSplash>
    </AboutContainer>
  );
}

// Export: About
export default About;

// Styled: AboutContainer
const AboutContainer = styled.div`
  background: ${(props) => props.theme.colors.global.backgroundPrimary};
  height: auto;
  position: relative;
  transition: all 150ms linear;
  width: 100%;
`;

// Styled: AboutSplash
const AboutSplash = styled.section`
  background: ${(props) => props.theme.colors.global.backgroundSecondary};
  height: 84vh;
  padding-bottom: 18rem;
  transition: all 150ms linear;
`;
