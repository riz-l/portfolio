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
          cardInfo="Used by paramedics to log Patient information whilst attending emergency incidents"
          cardTitle="Toy ambulance on grey wood"
          cardImage="https://images.unsplash.com/photo-1502740479091-635887520276?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80"
        />
      </GalleryItem>
      <GalleryItem>
        <GalleryCard
          cardText="Acronym Search"
          cardInfo="Makes Defence industry acronyms and definitions accessible and easier to learn"
          cardTitle="Eurofighter Typhoon taking off"
          cardImage="https://images.unsplash.com/photo-1580028468862-6895981d7a67?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
        />
      </GalleryItem>
      <GalleryItem>
        <GalleryCard
          cardText="Rizji"
          cardInfo="Gaming social media platform that facilitates user interaction"
          cardTitle="Retro gaming technology"
          cardImage="https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
        />
      </GalleryItem>
      <GalleryItem>
        <GalleryCard
          cardText="Keyboard Shop"
          cardInfo="Marketplace for keyboard hobbyists and enthusiasts"
          cardTitle="Decorative mechanical keyboard"
          cardImage="https://images.unsplash.com/photo-1595225476474-87563907a212?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80"
        />
      </GalleryItem>
      <GalleryItem>
        <GalleryCard
          cardText="Portfolio Website"
          cardInfo="Detailed explanation of how this portfolio was developed"
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
const GalleryContainer = styled.section`
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
const GalleryItem = styled.article`
  height: 40vh;

  @media screen and (min-width: 800px) {
    &:last-child {
      grid-column: span 2;
    }
  }
`;
