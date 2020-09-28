// Import: Dependencies
import React, { useEffect } from "react";
import styled from "styled-components";

// page: Portfolio
function Portfolio() {
  // Upon navigation to Portfolio, moves DOM to top of window
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PortfolioContainer>
      <PortfolioSplash></PortfolioSplash>
    </PortfolioContainer>
  );
}

// Export: Portfolio
export default Portfolio;

// Styled: PortfolioContainer
const PortfolioContainer = styled.div`
  background: ${(props) => props.theme.colors.global.backgroundPrimary};
  height: auto;
  position: relative;
  transition: all 150ms linear;
  width: 100%;
`;

// Styled: PortfolioSplash
const PortfolioSplash = styled.section`
  background: ${(props) => props.theme.colors.global.backgroundSecondary};
  height: 84vh;
  padding-bottom: 18rem;
  transition: all 150ms linear;
`;
