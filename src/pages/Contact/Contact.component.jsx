// Import: Dependencies
import React, { useEffect } from "react";
import { Container, Wrapper } from "../../globalComponents";

// Import: Styled Components
import {
  ContactContainer,
  ContactSplashContainer,
  ContactSplash,
  ContactSplashLeft,
  ContactSplashRight,
  ContactSplashImageContainer,
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
            <ContactSplashImageContainer>
              <img
                src="https://images.unsplash.com/photo-1523966211575-eb4a01e7dd51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=653&q=80"
                alt="Old telephone hanging by cable"
              />
            </ContactSplashImageContainer>
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
