// Import: Dependencies
import React from "react";
import styled from "styled-components";

// UI: GalleryCard
function GalleryCard({ cardImage, cardText, cardTitle }) {
  return (
    <GalleryCardContainer
      style={{ backgroundImage: `url(${cardImage})` }}
      title={cardTitle}
    >
      <h2>{cardText}</h2>
    </GalleryCardContainer>
  );
}

// Export: GalleryCard
export default GalleryCard;

// Styled: GalleryCardContainer
const GalleryCardContainer = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  height: 100%;
  width: 100%;
`;
