import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300&display=swap');

* {
  scrollbar-width: thin;
  font-family: 'Nunito', sans-serif;
  margin: 0;
  padding: 0;
}

*::-webkit-scrollbar {
  width: 8px;
}
*::-webkit-scrollbar-thumb {
  background-color: #c5baba ;
  border-radius: 20px;
  height: 130px;
}

body {
  margin: 0;
  padding: 0;
}

`

export default GlobalStyle;