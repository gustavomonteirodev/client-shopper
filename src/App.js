import React from "react";
import GlobalStyle from "./GlobalStyles";
import Router from "./routes/Router";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./components/theme/theme";
import GlobalState from "./Global/GlobalState"
import { ToastContainer, toast } from 'react-custom-alert';
import 'react-custom-alert/dist/index.css'; 

const App = () => {

  return (
    <GlobalState>
    <ThemeProvider theme={theme}>
      <Router />
      <GlobalStyle />
      <ToastContainer floatingTime={1000} />
    </ThemeProvider>
    </GlobalState>
  );
}

export default App;