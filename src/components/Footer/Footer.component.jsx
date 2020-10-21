// Import: Dependencies
import React from "react";
import { Link } from "react-router-dom";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import { IconButton } from "@material-ui/core";

// Import: Styled Components
import {
  FooterContainer,
  FooterWrapper,
  FooterHeader,
  FooterSocialContainer,
  FooterSocialItem,
  FooterNavigation,
  FooterNavigationLinks,
} from "./Footer.elements";

// Component: Footer
function Footer() {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterHeader>
          <Link to="/">
            <h4>Riz Layton</h4>
          </Link>

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
            <Link to="/portfolio">
              <h5>Portfolio</h5>
            </Link>
            <ul>
              <li>One Response</li>
              <li>Acronym Search</li>
              <li>Rizji</li>
              <li>Keyboard Shop</li>
              <li>Portfolio Website</li>
            </ul>
          </FooterNavigationLinks>

          <FooterNavigationLinks>
            <Link to="/about">
              <h5>About</h5>
            </Link>
            <ul>
              <li>About Me</li>
              <li>Skills</li>
              <li>Work Experience</li>
              <li>Education</li>
              <li>Other</li>
            </ul>
          </FooterNavigationLinks>

          <FooterNavigationLinks>
            <Link to="/contact">
              <h5>Contact</h5>
            </Link>
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
