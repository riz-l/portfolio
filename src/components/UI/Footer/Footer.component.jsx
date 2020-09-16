// Import: Dependencies
import React from "react";
import styled from "styled-components";

// UI: Footer
function Footer() {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterHeader>
          <FooterHeaderText>Riz Layton</FooterHeaderText>
        </FooterHeader>
      </FooterWrapper>
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

// Styled: FooterHeader
const FooterHeader = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 2rem 0;
  width: 100%;
`;

// Styled: FooterHeaderText
const FooterHeaderText = styled.h1`
  color: ${(props) => props.theme.colors.global.textPrimary};
  font-size: 3rem;
  font-weight: 300;
  letter-spacing: 2px;
  text-transform: uppercase;
`;

// Styled: FooterHeaderCTA
const FooterHeaderCTA = styled.p`
  background: ${(props) => props.theme.colors.global.backgroundSecondary};
  color: ${(props) => props.theme.colors.global.textPrimary};
  cursor: pointer;
  font-size: 1.4rem;
  letter-spacing: 1px;
  padding: 1rem 2rem;
  text-align: center;
  text-transform: uppercase;
  transition: background 150ms linear, color 150ms linear,
    border-radius 300ms linear;

  &:hover {
    color: ${(props) => props.theme.colors.global.highlightPrimary};
    background: ${(props) => props.theme.colors.global.backgroundSecondary};
    border-radius: 80px;
    transition: background 150ms linear, color 150ms linear,
      border-radius 300ms linear;
  }
`;
