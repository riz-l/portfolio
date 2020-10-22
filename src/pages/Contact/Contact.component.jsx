// Import: Dependencies
import React, { useEffect } from "react";
import { Container, Wrapper } from "../../globalComponents";
import HelpIcon from "@material-ui/icons/Help";

// Import: Styled Components
import {
  ContactContainer,
  ContactSplashContainer,
  ContactSplash,
  ContactSplashLeft,
  ContactSplashRight,
  ContactIconContainer,
  ContactFormWrapper,
} from "./Contact.elements";

// Import: Components
import { ContactForm } from "../../components";

// Page: Contact
function Contact() {
  // Upon navigation to Contact, moves DOM to top of window
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ContactContainer>
      <ContactSplashContainer>
        <ContactSplash>
          <ContactSplashLeft>
            <h1>Contact</h1>
            <h2>Get in touch</h2>
          </ContactSplashLeft>

          <ContactSplashRight>
            <ContactIconContainer>
              <HelpIcon />
            </ContactIconContainer>
          </ContactSplashRight>
        </ContactSplash>
      </ContactSplashContainer>

      <ContactFormWrapper>
        <Container>
          <Wrapper>
            <ContactForm />
          </Wrapper>
        </Container>
      </ContactFormWrapper>
    </ContactContainer>
  );
}

// Export: Contact
export default Contact;
