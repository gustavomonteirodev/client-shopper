import React from "react";
import GlobalStyle from "./GlobalStyles"
import Router from "./routes/Router"
// import GlobalState from "./Global/GlobalState";

const App = () =>  {

  return (
    <div >
    {/* <GlobalState > */}
       <Router /> 
       <GlobalStyle />
       {/* </GlobalState> */}
    </div>
  );
}

export default App;