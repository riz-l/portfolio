// Import: Dependencies
import React from "react";
import styled from "styled-components";

// UI: Gallery
function Gallery() {
  return (
    <GalleryContainer>
      <GalleryItem>
        <p>OneResponse / Management</p>
      </GalleryItem>

      <GalleryItem>
        <p>Rizji</p>
      </GalleryItem>

      <GalleryItem>
        <p>Acronym Search</p>
      </GalleryItem>

      <GalleryItem>
        <p>Keyboard Shop</p>
      </GalleryItem>

      <GalleryItem>
        <p>Personal Website</p>
      </GalleryItem>
    </GalleryContainer>
  );
}

// Export: Gallery
export default Gallery;

// Styled: GalleryContainer
const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 0 auto;
  max-width: 100%;

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

// Styled: GalleryItem
const GalleryItem = styled.div`
  background-color: dodgerblue;
  color: white;
  margin: 1rem;
  max-height: 350px;
  min-height: 350px;
  padding: 1rem;

  @media screen and (min-width: 800px) {
    &:last-child {
      grid-column: span 2;
    }
  }
`;
