// Import: Dependencies
import styled from "styled-components";

// Styled: GalleryContainer
export const GalleryContainer = styled.section`
  align-items: center;
  background: ${(props) => props.theme.colors.global.backgroundSecondary};
  display: grid;
  grid-gap: 1.6rem;
  grid-template-columns: repeat(2, 1fr);
  height: auto;
  margin: auto;
  padding: 1.6rem;
  transition: all 150ms linear;
  width: 70%;

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
  }

  @media screen and (max-width: 1024px) {
    width: 85%;
  }
`;

// Styled: GalleryItem
export const GalleryItem = styled.article`
  height: 40vh;

  @media screen and (min-width: 800px) {
    &:last-child {
      grid-column: span 2;
    }
  }
`;
