// Import: Dependencies
import styled from "styled-components";

// Styled: ContactFormContainer
export const ContactFormContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

// Styled: ContactFormForm
export const ContactFormForm = styled.form`
  height: 100%;
  margin: auto;
  width: 70%;

  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;

//Styled: ContactFormLabel
export const ContactFormLabel = styled.label`
  display: block;
  color: ${(props) => props.theme.colors.global.textSecondary};
  font-size: 1.4rem;
  line-height: 2.4rem;
  margin: 2rem 0 10px 0;
`;

// Styled: ContactFormSpan
export const ContactFormSpan = styled.span`
  color: ${(props) => props.theme.colors.global.highlightPrimary};
`;

//Styled: ContactFormInput
export const ContactFormInput = styled.input`
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  color: #292929;
  display: inline-block;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  font-size: 1rem;
  padding: 0.8rem 0;
  text-indent: 1rem;
  transition: all 150ms linear;
  width: 100%;

  &:focus {
    box-shadow: 0 0 10px
      ${(props) => props.theme.colors.global.highlightPrimary};
    outline: none !important;
    transition: all 150ms linear;

    &::placeholder {
      color: transparent;
      display: none;
      transition: all 150ms linear;
      visibility: hidden;
    }
  }

  &::placeholder {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
      "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif;
    font-size: 1rem;
  }
`;

//Styled: ContactFormTextArea
export const ContactFormTextArea = styled.textarea`
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  color: #292929;
  display: inline-block;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  font-size: 1rem;
  height: 400px;
  padding: 1rem;
  margin-top: 10px 0;
  resize: none;
  width: 100%;

  &:focus {
    box-shadow: 0 0 10px
      ${(props) => props.theme.colors.global.highlightPrimary};
    outline: none !important;
    transition: all 150ms linear;
  }

  &::placeholder {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
      "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif;
    font-size: 1rem;
  }
`;

// Styled: ContactFormInputSubmitContainer
export const ContactFormInputSubmitContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`;

// Styled: ContactFormInputSubmit
export const ContactFormInputSubmit = styled.input`
  background: ${(props) => props.theme.colors.global.backgroundSecondary};
  border: none;
  color: ${(props) => props.theme.colors.global.textPrimary};
  cursor: pointer;
  font-size: 1.4rem;
  letter-spacing: 1px;
  margin-top: 6rem;
  padding: 1.4rem 2rem;
  text-align: center;
  text-transform: uppercase;
  transition: background 150ms linear, color 150ms linear,
    border-radius 300ms linear;
  width: 50%;

  &:hover {
    color: ${(props) => props.theme.colors.global.highlightPrimary};
    background: ${(props) => props.theme.colors.global.backgroundSecondary};
    border-radius: 80px;
    transition: background 150ms linear, color 150ms linear,
      border-radius 300ms linear;
  }
`;
