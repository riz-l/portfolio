// Import: Dependencies
import React from "react";
import styled from "styled-components";

// UI: GalleryCard
function GalleryCard({ cardImage, cardText, cardTitle }) {
  return (
    <GalleryCardContainer>
      <GalleryCardImage
        style={{ backgroundImage: `url(${cardImage})` }}
        title={cardTitle}
      >
        <GalleryTextButton>
          <GalleryCardText>{cardText}</GalleryCardText>
        </GalleryTextButton>
      </GalleryCardImage>
    </GalleryCardContainer>
  );
}

// Export: GalleryCard
export default GalleryCard;

// Styled: GalleryCardContainer
const GalleryCardContainer = styled.div`
  height: 100%;
  max-height: 100%;
  object-fit: cover;
  width: 100%;
  max-width: 100%;
`;

// Styled: GalleryCardImage
const GalleryCardImage = styled.div`
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  height: 100%;
  max-height: 100%;
  object-fit: cover;
  width: 100%;
  max-width: 100%;
  transition: all 300ms ease-in-out;

  &:hover {
    background-size: 110%;
    filter: grayscale(80%);
    transition: all 300ms ease-in-out;
  }
`;

// Styled: GalleryTextButton
const GalleryTextButton = styled.div`
  background: ${(props) => props.theme.colors.global.backgroundPrimary};
  cursor: pointer;
  padding: 0.5rem 1rem;
  transition: all 150ms linear;

  &:hover {
    background: ${(props) => props.theme.colors.global.backgroundSecondary};
    transition: all 150ms linear;
  }
`;

// Styled: GalleryCardText
const GalleryCardText = styled.h2`
  color: ${(props) => props.theme.colors.global.textSecondary};
  font-size: 1.4rem;
  font-weight: 300;
  letter-spacing: 2px;
  text-transform: uppercase;
  transition: all 150ms linear;

  &:hover {
    color: ${(props) => props.theme.colors.global.textPrimary};
    transition: all 150ms linear;
  }
`;
