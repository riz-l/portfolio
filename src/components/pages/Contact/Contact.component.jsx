// Import: Dependencies
import React, { useEffect } from "react";
import styled from "styled-components";

// page: Contact
function Contact() {
  // Upon navigation to Contact, moves DOM to top of window
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ContactContainer>
      <ContactSplash></ContactSplash>
    </ContactContainer>
  );
}

// Export: Contact
export default Contact;

// Styled: ContactContainer
const ContactContainer = styled.div`
  background: ${(props) => props.theme.colors.global.backgroundPrimary};
  height: auto;
  position: relative;
  transition: all 150ms linear;
  width: 100%;
`;

// Styled: ContactSplash
const ContactSplash = styled.section`
  background: ${(props) => props.theme.colors.global.backgroundPrimary};
  height: 84vh;
  padding-bottom: 18rem;
  transition: all 150ms linear;
`;
