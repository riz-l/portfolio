// Import: Dependencies
import React, { useEffect } from "react";
import WhatshotIcon from "@material-ui/icons/Whatshot";

// Import: Styled Components
import {
  PortfolioContainer,
  PortfolioSplashContainer,
  PortfolioSplash,
  PortfolioSplashLeft,
  PortfolioSplashRight,
  PortfolioIconContainer,
} from "./Portfolio.elements";

// Page: Portfolio
function Portfolio() {
  // Upon navigation to Portfolio, moves DOM to top of window
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PortfolioContainer>
      <PortfolioSplashContainer>
        <PortfolioSplash>
          <PortfolioSplashLeft>
            <h1>Portfolio</h1>
            <h2>My work</h2>
          </PortfolioSplashLeft>

          <PortfolioSplashRight>
            <PortfolioIconContainer>
              <WhatshotIcon />
            </PortfolioIconContainer>
          </PortfolioSplashRight>
        </PortfolioSplash>
      </PortfolioSplashContainer>
    </PortfolioContainer>
  );
}

// Export: Portfolio
export default Portfolio;
