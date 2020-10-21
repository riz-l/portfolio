// Import: Dependencies
import styled from "styled-components";

// Styled: Container
export const Container = styled.div`
  height: auto;
  padding: 2rem 0;
  transition: all 150ms linear;
  width: 100%;
`;

// Styled: Wrapper
export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  padding: 6.4rem 0;
  transition: all 150ms linear;
  width: 70%;

  @media screen and (max-width: 1024px) {
    width: 85%;
  }

  & h3 {
    color: ${(props) => props.theme.colors.global.textPrimary};
    font-size: 3rem;
    font-weight: 300;
    letter-spacing: 1px;
    margin-bottom: 3.2rem;
    text-transform: uppercase;
  }

  & p {
    color: ${(props) => props.theme.colors.global.textSecondary};
    font-size: 1.4rem;
    line-height: 2.4rem;
    padding: 1rem 0;
  }
`;
