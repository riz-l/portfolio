// Import: Dependencies
import React from "react";
import styled from "styled-components";

// UI: GCard
function GCard({ cardImage, cardText, cardTitle }) {
  return (
    <GCardContainer
      style={{ backgroundImage: `url(${cardImage})` }}
      title={cardTitle}
    >
      <p>{cardText}</p>
    </GCardContainer>
  );
}

// Export: GCard
export default GCard;

// Styled: GCardContainer
const GCardContainer = styled.div`
  background: ${(props) => props.theme.colors.global.backgroundPrimary};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  filter: brightness(0.9) saturate(95%);
  height: 100%;
  transition: all 300ms ease-in-out;
  width: 100%;

  &:hover {
    filter: brightness(1) saturate(100%);
    transition: all 300ms ease-in-out;
  }
`;
