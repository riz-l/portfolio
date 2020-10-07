// Import: Dependencies
import styled from "styled-components";

// Styled: ContentSectionContainer
export const ContentSectionContainer = styled.section`
  background: ${({ isPrimaryBackground, theme }) =>
    isPrimaryBackground
      ? `${theme.colors.global.backgroundPrimary}`
      : `${theme.colors.global.backgroundSecondary}`};
  height: 100%;
  transition: all 150ms linear;
  width: 100%;
`;

// Styled: ContentSectionWrapper
export const ContentSectionWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 70%;

  @media screen and (max-width: 1024px) {
    width: 85%;
  }
`;
