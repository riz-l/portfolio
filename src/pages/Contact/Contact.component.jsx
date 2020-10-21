// Import: Dependencies
import React, { useEffect } from "react";

// Import: Styled Components
import { ContactContainer, ContactSplash } from "./Contact.elements";

// Page: Contact
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
