import React from "react";
import GlobalStyle from "./GlobalStyles"
import Router from "./routes/Router"
// import GlobalState from "./Global/GlobalState";
import { ThemeProvider } from '@mui/material/styles'
import { theme } from "./components/theme/theme"

const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <Router />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;