// Import: Dependencies
import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { IconButton } from "@material-ui/core";

// Import: Components
import Switch from "../Switch/Switch.component";

// Import: Styled Components
import {
  HeaderContainer,
  HeaderWrapper,
  HeaderLeft,
  HeaderToggleLight,
  HeaderToggleScale,
  HeaderToggleDark,
  HeaderCenter,
  HeaderRight,
} from "./Header.elements";

// Component: Header
function Header({ isDarkTheme, setIsDarkTheme, isOpen, setIsOpen }) {
  return (
    <HeaderContainer>
      <HeaderWrapper>
        <HeaderLeft>
          <HeaderToggleLight>Light</HeaderToggleLight>
          <HeaderToggleScale>
            <Switch
              isOn={isDarkTheme}
              handleToggle={() => {
                setIsDarkTheme((isDarkTheme) => !isDarkTheme);
                localStorage.setItem(
                  "isDarkTheme",
                  (isDarkTheme) => !isDarkTheme
                );
              }}
              onColor="#06d6A0"
            />
          </HeaderToggleScale>
          <HeaderToggleDark>Dark</HeaderToggleDark>
        </HeaderLeft>

        <HeaderCenter></HeaderCenter>

        <HeaderRight>
          <IconButton onClick={() => setIsOpen((isOpen) => !isOpen)}>
            <MenuIcon fontSize="large" />
          </IconButton>
        </HeaderRight>
      </HeaderWrapper>
    </HeaderContainer>
  );
}

// Export: Header
export default Header;
