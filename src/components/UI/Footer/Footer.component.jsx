// Import: Dependencies
import React from "react";
import styled from "styled-components";

// UI: Footer
function Footer() {
  return (
    <FooterContainer>
      <FooterWrapper></FooterWrapper>
    </FooterContainer>
  );
}

// Export: Footer
export default Footer;

// Styled: FooterContainer
const FooterContainer = styled.footer`
  background: red;
  height: 40vh;
  transition: all 150ms linear;
  width: 100%;
`;

// Styled: FooterWrapper
const FooterWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: auto;
  width: 70%;

  @media screen and (max-width: 1024px) {
    width: 85%;
  }
`;
