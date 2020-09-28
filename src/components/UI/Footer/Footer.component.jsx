// Import: Dependencies
import React from "react";
import styled from "styled-components";

// Import: Material UI Icons
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";

// Import: Material Core
import { IconButton } from "@material-ui/core";

// UI: Footer
function Footer() {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterHeader>
          <h4>Riz Layton</h4>

          <FooterSocialContainer>
            <FooterSocialItem>
              <a
                href="https://github.com/riz-l"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconButton>
                  <GitHubIcon fontSize="large" />
                </IconButton>
              </a>
            </FooterSocialItem>

            <FooterSocialItem>
              <a
                href="https://www.linkedin.com/in/joshua-layton-a41100167/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconButton>
                  <LinkedInIcon fontSize="large" />
                </IconButton>
              </a>
            </FooterSocialItem>

            <FooterSocialItem>
              <a
                href="https://twitter.com/riz_layton"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconButton>
                  <TwitterIcon fontSize="large" />
                </IconButton>
              </a>
            </FooterSocialItem>

            <FooterSocialItem>
              <IconButton>
                <InstagramIcon fontSize="large" />
              </IconButton>
            </FooterSocialItem>
          </FooterSocialContainer>
        </FooterHeader>

        <FooterNavigation>
          <FooterNavigationLinks>
            <h5>Portfolio</h5>
            <ul>
              <li>One Response</li>
              <li>Acronym Search</li>
              <li>Rizji</li>
              <li>Keyboard Shop</li>
              <li>Portfolio Website</li>
            </ul>
          </FooterNavigationLinks>

          <FooterNavigationLinks>
            <h5>About</h5>
            <ul>
              <li>About Me</li>
              <li>Background</li>
              <li>Qualifications</li>
              <li>Work Experience</li>
            </ul>
          </FooterNavigationLinks>

          <FooterNavigationLinks>
            <h5>Contact</h5>
            <ul>
              <li>Get In Touch</li>
            </ul>
          </FooterNavigationLinks>
        </FooterNavigation>
      </FooterWrapper>
    </FooterContainer>
  );
}

// Export: Footer
export default Footer;

// Styled: FooterContainer
const FooterContainer = styled.footer`
  background: ${(props) => props.theme.colors.global.backgroundPrimary};
  height: auto;
  transition: all 150ms linear;
  width: 100%;
`;

// Styled: FooterWrapper
const FooterWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: auto;
  padding: 3.2rem 0;
  width: 70%;

  @media screen and (max-width: 1024px) {
    width: 85%;
  }
`;

// Styled: FooterHeader
const FooterHeader = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme.colors.global.textPrimary};

  & h4 {
    color: ${(props) => props.theme.colors.global.textPrimary};
    font-size: 2.6rem;
    font-weight: 300;
    letter-spacing: 1px;
    text-transform: uppercase;
  }
`;

// Styled: FooterSocialContainer
const FooterSocialContainer = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: flex-start;
  padding: 1rem 0 3rem 0;
  width: 100%;
`;

// Styled: FooterSocialItem
const FooterSocialItem = styled.div`
  transition: border-radius 300ms linear, color 150ms linear;

  &:hover {
    .MuiIconButton-root {
      background-color: ${(props) =>
        props.theme.colors.global.backgroundSecondary};
    }
  }

  & .MuiButtonBase-root {
    background: ${(props) => props.theme.colors.global.backgroundSecondary};
    border-radius: 0;
    margin-right: 16px;
    transition: border-radius 300ms linear, color 150ms linear;

    & .MuiIconButton-label {
      & .MuiSvgIcon-root {
        color: ${(props) => props.theme.colors.global.textSecondary};
        transition: color 150ms linear;

        &:hover {
          color: ${(props) => props.theme.colors.global.highlightPrimary};
          transition: color 150ms linear;
        }
      }
    }

    &:hover {
      border-radius: 80px;
      transition: border-radius 300ms linear, color 150ms linear;

      & .MuiIconButton-label {
        & .MuiSvgIcon-root {
          color: ${(props) => props.theme.colors.global.highlightPrimary};
          transition: color 150ms linear;
        }
      }
    }
  }
`;

// Styled: FooterNavigation
const FooterNavigation = styled.div`
  align-items: flex-start;
  display: flex;
  flex-wrap: wrap;
  height: auto;
  justify-content: flex-start;
  margin-top: 3rem;
  width: 100%;
`;

// Styled: FooterNavigationLinks
const FooterNavigationLinks = styled.div`
  padding: 1rem 0;
  margin-right: 10px;
  min-width: 220px;

  & h5 {
    color: ${(props) => props.theme.colors.global.textPrimary};
    cursor: pointer;
    font-size: 22px;
    font-weight: 500;
    padding: 8px 0;
    transition: all 150ms linear;

    &:hover {
      color: ${(props) => props.theme.colors.global.highlightPrimary};
      transition: all 150ms linear;
    }
  }

  & ul {
    list-style: none;

    & li {
      color: ${(props) => props.theme.colors.global.textSecondary};
      cursor: pointer;
      font-size: 14px;
      margin: 6px 0;
      padding: 2px 0;
      transition: all 150ms linear;
      width: 70%;

      &:hover {
        color: ${(props) => props.theme.colors.global.highlightPrimary};
        transition: all 150ms linear;
      }
    }
  }
`;
