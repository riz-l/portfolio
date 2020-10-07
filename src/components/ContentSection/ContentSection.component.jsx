// Import: Dependencies
import React from "react";
import { Container, Wrapper } from "../../globalComponents";

// Import: Styled Components
import { ContentSectionContainer } from "./ContentSection.elements";

// Component: ContentSection
function ContentSection({ isPrimaryBackground, heading, textOne, textTwo }) {
  return (
    <ContentSectionContainer isPrimaryBackground={isPrimaryBackground}>
      <Container>
        <Wrapper>
          <h3>{heading}</h3>

          <p>{textOne}</p>

          <p>{textTwo}</p>
        </Wrapper>
      </Container>
    </ContentSectionContainer>
  );
}

// Export: ContentSection
export default ContentSection;
