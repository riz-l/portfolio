// Import: Dependencies
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import CloseIcon from "@material-ui/icons/Close";
import { IconButton } from "@material-ui/core";

// Import: Styled Components
import {
  NavigationMenuContainer,
  NavigationToggleContainer,
  NavigationToggle,
  NavigationOptions,
} from "./NavigationMenu.elements";

// Component: NavigationMenu
function NavigationMenu({ isDarkTheme, isOpen, setIsOpen }) {
  // Upon navigation from NavigationMenu, moves DOM to top of window
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <NavigationMenuContainer isOpen={isOpen} isDarkTheme={isDarkTheme}>
      <NavigationToggleContainer>
        <NavigationToggle>
          <IconButton onClick={() => setIsOpen((isOpen) => !isOpen)}>
            <CloseIcon fontSize="large" />
          </IconButton>
        </NavigationToggle>
      </NavigationToggleContainer>

      <NavigationOptions>
        <Link
          to="/"
          onClick={() => {
            setIsOpen((isOpen) => !isOpen);
          }}
        >
          <p>Home</p>
        </Link>

        <Link
          to="/portfolio"
          onClick={() => {
            setIsOpen((isOpen) => !isOpen);
          }}
        >
          <p>Portfolio</p>
        </Link>

        <Link
          to="/about"
          onClick={() => {
            setIsOpen((isOpen) => !isOpen);
          }}
        >
          <p>About</p>
        </Link>

        <Link
          to="/contact"
          onClick={() => {
            setIsOpen((isOpen) => !isOpen);
          }}
        >
          <p>Contact</p>
        </Link>
      </NavigationOptions>
    </NavigationMenuContainer>
  );
}

// Export: NavigationMenu
export default NavigationMenu;
