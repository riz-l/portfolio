// Import: Dependencies
import React, { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";

// Import: Themes
import lightTheme from "./themes/lightTheme";
import darkTheme from "./themes/darkTheme";

// Import: UI
import Header from "./components/UI/Header/Header.component";

// Import: page
import Home from "./components/pages/Home/Home.component";

// Component: App
function App() {
  // State = isDarkTheme
  const [isDarkTheme, setIsDarkTheme] = useState(getInitialTheme());

  // Sets user preference for light/dark theme
  useEffect(() => {
    localStorage.setItem("dark", JSON.stringify(isDarkTheme));
  }, [isDarkTheme]);

  // If returning user expressed preference for dark theme previously,
  // theme === darkTheme
  // otherwise, theme === lightTheme
  function getInitialTheme() {
    const isReturningUser = "dark" in localStorage;
    const savedTheme = JSON.parse(localStorage.getItem("dark"));
    const userPrefersDark = getPrefColorTheme();

    // If theme was saved, set theme to lightTheme/darkTheme
    if (isReturningUser) {
      return savedTheme;
    }
    // If preferred color theme is dark, sets theme to dark
    else if (userPrefersDark) {
      return true;
    }
    // Else sets theme to light
    else {
      return false;
    }
  }

  // Looks for user's preferred color scheme
  function getPrefColorTheme() {
    if (!window.matchMedia) return;
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  return (
    <>
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <AppContainer>
          <Header isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme} />
          <Home />
        </AppContainer>
      </ThemeProvider>
    </>
  );
}

// Export: App
export default App;

// Styled: AppContainer
const AppContainer = styled.div`
  height: 100%;
  width: 100%;
`;
