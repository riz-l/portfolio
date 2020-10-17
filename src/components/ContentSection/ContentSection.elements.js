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

  & h4 {
    color: ${(props) => props.theme.colors.global.highlightPrimary};
    font-size: 2.4rem;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  & p {
    color: ${(props) => props.theme.colors.global.textSecondary};
    font-size: 1.4rem;
    line-height: 2.4rem;
  }
`;

// Styled: ContentSectionWrapper
export const ContentSectionWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
`;
