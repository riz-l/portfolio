// Import: Dependencies
import styled from "styled-components";

// Styled: PortfolioContainer
export const PortfolioContainer = styled.div`
  background: ${(props) => props.theme.colors.global.backgroundPrimary};
  height: auto;
  position: relative;
  transition: all 150ms linear;
  width: 100%;
`;

// Styled: PortfolioSplash
export const PortfolioSplash = styled.section`
  background: ${(props) => props.theme.colors.global.backgroundPrimary};
  height: 84vh;
  padding-bottom: 18rem;
  transition: all 150ms linear;
`;
