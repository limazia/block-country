import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0 !important;
  }

  html,
  body,
  #app {
    height: 100vh;
  }

  body {
    background: #f2f2f2;
  }

  ::-webkit-scrollbar-track {
    background-color: #FFFFFF;
  }

  ::-webkit-scrollbar {
    width: 5px;
    background: #FFFFFF;
  }

  ::-webkit-scrollbar-thumb {
    background: #9466FF;
  }
`;