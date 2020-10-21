// Import: Dependencies
import React, { useEffect } from "react";

// Import: Styled Components
import {
  PortfolioContainer,
  PortfolioSplashContainer,
  PortfolioSplash,
  PortfolioSplashLeft,
  PortfolioSplashRight,
  PortfolioSplashImageContainer,
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
            <PortfolioSplashImageContainer>
              <img
                src="https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80"
                alt="Old telephone hanging by cable"
              />
            </PortfolioSplashImageContainer>
          </PortfolioSplashRight>
        </PortfolioSplash>
      </PortfolioSplashContainer>
    </PortfolioContainer>
  );
}

// Export: Portfolio
export default Portfolio;
