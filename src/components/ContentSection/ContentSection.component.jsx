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
  isHeadingAtStart,
  isPrimaryBackground,
  heading,
  subHeadingOne,
  subHeadingOneLead,
  textOneFirst,
  textOneSecond,
  subHeadingTwo,
  subHeadingTwoLead,
  textTwoFirst,
  textTwoSecond,
}) {
  return (
    <ContentSectionContainer isPrimaryBackground={isPrimaryBackground}>
      <Container>
        <Wrapper>
          <ContentSectionWrapper isHeadingAtStart={isHeadingAtStart}>
            <h3>{heading ? heading : null}</h3>

            <h4>{subHeadingOne ? subHeadingOne : null}</h4>
            <h5>{subHeadingOneLead ? subHeadingOneLead : null}</h5>
            <p>{textOneFirst ? textOneFirst : null}</p>
            <p style={subHeadingTwo ? { marginBottom: "2rem" } : null}>
              {textOneSecond ? textOneSecond : null}
            </p>

            <h4>{subHeadingTwo ? subHeadingTwo : null}</h4>
            <h5>{subHeadingTwoLead ? subHeadingTwoLead : null}</h5>
            <p>{textTwoFirst ? textTwoFirst : null}</p>
            <p>{textTwoSecond ? textTwoSecond : null}</p>
          </ContentSectionWrapper>
        </Wrapper>
      </Container>
    </ContentSectionContainer>
  );
}

// Export: ContentSection
export default ContentSection;
