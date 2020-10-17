// Import: Dependencies
import React from "react";
import { Container, Wrapper } from "../../globalComponents";

// Import: Styled Components
import {
  ContentSectionContainer,
  ContentSectionWrapper,
} from "./ContentSection.elements";

// Component: ContentSection
function ContentSection({
  isPrimaryBackground,
  heading,
  subHeadingOne,
  textOneFirst,
  textOneSecond,
  subHeadingTwo,
  textTwoFirst,
  textTwoSecond,
}) {
  return (
    <ContentSectionContainer isPrimaryBackground={isPrimaryBackground}>
      <Container>
        <Wrapper>
          <ContentSectionWrapper>
            <h3>{heading}</h3>
            <h4>{subHeadingOne}</h4>
            <p>{textOneFirst}</p>
            <p style={{ marginBottom: "2rem" }}>{textOneSecond}</p>
            <h4>{subHeadingTwo}</h4>
            <p>{textTwoFirst}</p>
            <p>{textTwoSecond}</p>
          </ContentSectionWrapper>
        </Wrapper>
      </Container>
    </ContentSectionContainer>
  );
}

// Export: ContentSection
export default ContentSection;
