// Import: Dependencies
import styled from "styled-components";

// Styled: SkillsContainer
export const SkillsContainer = styled.div`
  background: ${(props) => props.theme.colors.global.backgroundPrimary};
  height: 100%;
  width: 100%;
`;

// Styled: SkillsWrapper
export const SkillsWrapper = styled.div`
  display: grid;
  height: 100%;
  place-items: center;
  width: 100%;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

// Styled: SkillsSection
export const SkillsSection = styled.div`
  background: ${(props) => props.theme.colors.global.backgroundSecondary};
  box-shadow: 0 5px 8px -9px rgba(0, 0, 0, 0.75);
  border-radius: 10px;
  display: grid;
  grid-template: 1fr / repeat(3, 1fr);
  height: 100%;
  transition: all 150ms linear;
  width: 100%;

  @media screen and (max-width: 1384px) {
    background: transparent;
    box-shadow: none;
    grid-template-columns: 1fr;
    transition: all 150ms linear;
  }
`;

// Styled: SkillsCard
export const SkillsCard = styled.article`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 4rem 0;
  transition: all 150ms linear;

  @media screen and (max-width: 1384px) {
    background: ${(props) => props.theme.colors.global.backgroundSecondary};
    border-radius: 10px;
    box-shadow: 0 5px 8px -9px rgba(0, 0, 0, 0.75);
    transition: all 150ms linear;
  }

  &:nth-child(2) {
    border-left: 1px solid
      ${(props) => props.theme.colors.global.highlightPrimary};
    border-right: 1px solid
      ${(props) => props.theme.colors.global.highlightPrimary};

    @media screen and (max-width: 1384px) {
      border-left: none;
      border-right: none;
      margin: 2rem 0;
    }
  }
`;

// Styled: SkillsHeader
export const SkillsHeader = styled.div`
  display: grid;
  padding-bottom: 1rem;
  place-items: center;
  text-align: center;
  width: 90%;

  & svg {
    color: ${(props) => props.theme.colors.global.textPrimary};
    font-size: 10rem;
    margin-bottom: 2rem;
    transition: all 150ms linear;
  }

  & h4 {
    color: ${(props) => props.theme.colors.global.textPrimary};
    font-size: 2.2rem;
    font-weight: 600;
    letter-spacing: 2px;
    text-transform: uppercase;
    transition: all 150ms linear;
  }

  & p {
    color: ${(props) => props.theme.colors.global.textSecondary};
    font-size: 1.2rem;
    line-height: 2rem;
    margin: auto;
    transition: all 150ms linear;
    width: 90%;
  }
`;

// Styled: SkillsDescription
export const SkillsDescription = styled.div`
  display: grid;
  margin-top: 2rem;
  place-items: center;
  text-align: center;
  width: 90%;

  & h5 {
    color: ${(props) => props.theme.colors.global.highlightPrimary};
    font-size: 2rem;
    font-weight: 300;
    letter-spacing: 0.8px;
    text-transform: uppercase;
    transition: all 150ms linear;
  }

  & p {
    color: ${(props) => props.theme.colors.global.textSecondary};
    font-size: 1.2rem;
    line-height: 2rem;
    margin: auto;
    transition: all 150ms linear;
    width: 90%;
  }
`;
