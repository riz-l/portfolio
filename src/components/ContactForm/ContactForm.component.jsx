// Import: Dependencies
import React from "react";
import emailjs from "emailjs-com";

// Import: Styled Components
import {
  ContactFormContainer,
  ContactFormForm,
  ContactFormLabel,
  ContactFormSpan,
  ContactFormInput,
  ContactFormTextArea,
  ContactFormInputSubmitContainer,
  ContactFormInputSubmit,
} from "./ContactForm.elements";

// Component: ContactForm
function ContactForm() {
  // Email JS: sendEmail
  function sendEmail(e) {
    // Prevents default behaviour of refreshing the page on form submit
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_b8j6nze",
        e.target,
        "user_f54kUdd4292YdlYMEjVxh"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    // Refreshes all input fields upon a form submit
    e.target.reset();
  }

  return (
    <ContactFormContainer>
      <ContactFormForm className="contact-form" onSubmit={sendEmail}>
        <ContactFormLabel>
          Name<ContactFormSpan>*</ContactFormSpan>
        </ContactFormLabel>
        <ContactFormInput
          type="text"
          name="from_name"
          placeholder="Name"
          required
        />

        <ContactFormLabel>
          Email<ContactFormSpan>*</ContactFormSpan>
        </ContactFormLabel>
        <ContactFormInput
          type="email"
          name="user_email"
          placeholder="Email"
          required
        />

        <ContactFormLabel>Contact Number</ContactFormLabel>
        <ContactFormInput
          type="tel"
          placeholder="Contact number"
          name="contact_number"
        />

        <ContactFormLabel>
          Subject<ContactFormSpan>*</ContactFormSpan>
        </ContactFormLabel>
        <ContactFormInput
          type="text"
          placeholder="Subject"
          name="message_subject"
          required
        />

        <ContactFormLabel>
          Message<ContactFormSpan>*</ContactFormSpan>
        </ContactFormLabel>
        <ContactFormTextArea
          name="message"
          placeholder="Type your message here..."
          required
        />

        <ContactFormInputSubmitContainer>
          <ContactFormInputSubmit type="submit" value="Send Email" />
        </ContactFormInputSubmitContainer>
      </ContactFormForm>
    </ContactFormContainer>
  );
}

// Export: ContactForm
export default ContactForm;
