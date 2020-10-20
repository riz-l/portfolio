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
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: center;

  & h3 {
    color: ${(props) => props.theme.colors.global.textPrimary};
    font-size: 3.4rem;
    font-weight: 600;
    letter-spacing: 1px;
    margin-bottom: 3.2rem;
    text-transform: uppercase;
  }

  & h4 {
    color: ${(props) => props.theme.colors.global.highlightPrimary};
    font-size: 2.8rem;
    font-weight: 300;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  & h5 {
    color: ${(props) => props.theme.colors.global.textPrimary};
    font-size: 1.5rem;
    font-weight: 300;
    letter-spacing: 2px;
    margin-bottom: ${(subHeadingOneLead) =>
      subHeadingOneLead ? "1rem" : null};
    text-transform: uppercase;
  }

  & p {
    color: ${(props) => props.theme.colors.global.textSecondary};
    font-size: 1.4rem;
    line-height: 2.4rem;
  }
`;
