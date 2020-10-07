// Import: Dependencies
import styled from "styled-components";

// Styled: ContactContainer
export const ContactContainer = styled.div`
  background: ${(props) => props.theme.colors.global.backgroundPrimary};
  height: auto;
  position: relative;
  transition: all 150ms linear;
  width: 100%;
`;

// Styled: ContactSplash
export const ContactSplash = styled.section`
  background: ${(props) => props.theme.colors.global.backgroundPrimary};
  height: 84vh;
  padding-bottom: 18rem;
  transition: all 150ms linear;
`;
