// Import: Dependencies
import React, { useEffect } from "react";

// Import: Styled Components
import { PortfolioContainer, PortfolioSplash } from "./Portfolio.elements";

// Page: Portfolio
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
