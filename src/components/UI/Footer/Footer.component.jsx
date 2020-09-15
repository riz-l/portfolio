// Import: Dependencies
import React from "react";
import styled from "styled-components";

// UI: Footer
function Footer() {
  return (
    <FooterContainer>
      <p>Footer</p>
    </FooterContainer>
  );
}

// Export: Footer
export default Footer;

// Styled: FooterContainer
const FooterContainer = styled.footer`
  background: ${(props) => props.theme.colors.global.backgroundSecondary};
  height: 40vh;
  transition: all 150ms linear;
  width: 100%;
`;
