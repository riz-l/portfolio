// Import: Dependencies
import React from "react";
import styled from "styled-components";

// Import: UI
import GalleryCard from "../GalleryCard/GalleryCard.component";

// UI: Gallery
function Gallery() {
  return (
    <GalleryContainer>
      <GalleryItem>
        <GalleryCard
          cardText="One Response"
          cardTitle="Toy ambulance on grey wood"
          cardImage="https://images.unsplash.com/photo-1502740479091-635887520276?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80"
        />
      </GalleryItem>

      <GalleryItem>
        <GalleryCard
          cardText="Acronym Search"
          cardTitle="Eurofighter Typhoon taking off"
          cardImage="https://images.unsplash.com/photo-1580028468862-6895981d7a67?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
        />
      </GalleryItem>

      <GalleryItem>
        <GalleryCard
          cardText="Rizji"
          cardTitle="Retro gaming technology"
          cardImage="https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
        />
      </GalleryItem>

      <GalleryItem>
        <GalleryCard
          cardText="Keyboard Shop"
          cardTitle="Decorative mechanical keyboard"
          cardImage="https://images.unsplash.com/photo-1595225476474-87563907a212?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80"
        />
      </GalleryItem>

      <GalleryItem>
        <GalleryCard
          cardText="Portfolio Website"
          cardTitle="Phone, notebook, pencil, glasses and laptop"
          cardImage="https://images.unsplash.com/photo-1488998427799-e3362cec87c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
        />
      </GalleryItem>
    </GalleryContainer>
  );
}

// Export: Gallery
export default Gallery;

// Styled: GalleryContainer
const GalleryContainer = styled.div`
  align-items: center;
  display: grid;
  grid-gap: 1.6rem;
  grid-template-columns: repeat(2, 1fr);
  margin: 1.6rem;
  max-width: 100%;

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

// Styled: GalleryItem
const GalleryItem = styled.div`
  height: 350px;
  max-height: 350px;
  min-height: 350px;

  @media screen and (min-width: 800px) {
    &:last-child {
      grid-column: span 2;
      height: 350px;
      max-height: 350px;
      min-height: 350px;
    }
  }
`;
