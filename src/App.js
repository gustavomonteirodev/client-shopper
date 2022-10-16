import React from "react";
import GlobalStyle from "./GlobalStyles";
import Router from "./routes/Router";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./components/theme/theme";
import GlobalState from "./Global/GlobalState"

const App = () => {

  return (
    <GlobalState>
    <ThemeProvider theme={theme}>
      <Router />
      <GlobalStyle />
    </ThemeProvider>
    </GlobalState>
  );
}

export default App;