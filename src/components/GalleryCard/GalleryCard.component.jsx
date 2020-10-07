// Import: Dependencies
import React from "react";

// Import: Styled Components
import {
  GalleryCardContainer,
  GalleryCardTextContainer,
  GalleryCardText,
} from "./GalleryCard.elements";

// Component: GalleryCard
function GalleryCard({ cardImage, cardText, cardTitle }) {
  return (
    <GalleryCardContainer
      style={{ backgroundImage: `url(${cardImage})` }}
      title={cardTitle}
    >
      <GalleryCardTextContainer>
        <GalleryCardText>{cardText}</GalleryCardText>
      </GalleryCardTextContainer>
    </GalleryCardContainer>
  );
}

// Export: GalleryCard
export default GalleryCard;
