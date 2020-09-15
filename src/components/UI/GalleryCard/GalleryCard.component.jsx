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
      <GalleryCardTextContainer>
        <GalleryCardText>{cardText}</GalleryCardText>
      </GalleryCardTextContainer>
    </GalleryCardContainer>
  );
}

// Export: GalleryCard
export default GalleryCard;

// Styled: GalleryCardContainer
const GalleryCardContainer = styled.div`
  background: ${(props) => props.theme.colors.global.backgroundPrimary};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  filter: brightness(0.8) saturate(90%);
  height: 100%;
  transition: all 300ms ease-in-out;
  width: 100%;

  &:hover {
    filter: brightness(1) saturate(100%);
    transition: all 300ms ease-in-out;
  }
`;

// Styled: GalleryCardTextContainer
const GalleryCardTextContainer = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  width: 100%;
`;

// Styled: GalleryCardText
const GalleryCardText = styled.p`
  background: ${(props) => props.theme.colors.global.backgroundSecondary};
  color: ${(props) => props.theme.colors.global.textPrimary};
  cursor: pointer;
  font-size: 1.4rem;
  letter-spacing: 1px;
  padding: 1rem 2rem;
  text-align: center;
  text-transform: uppercase;
  transition: background 150ms linear, color 150ms linear,
    border-radius 300ms linear;

  &:hover {
    background: ${(props) => props.theme.colors.global.backgroundSecondary};
    border-radius: 80px;
    color: ${(props) => props.theme.colors.global.highlightPrimary};
    transition: background 150ms linear, color 150ms linear,
      border-radius 300ms linear;
  }
`;
