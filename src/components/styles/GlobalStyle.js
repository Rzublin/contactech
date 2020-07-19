import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  $aero-blue: #c7efcfff;
  $beige: #eef5dbff;
  $orange-peel: #ff9d17ff;
  $blue-sapphire: #006989ff;
  $cg-blue: #007090ff;
  html, body{
    height: 100%;
  }
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
  }
  .container{
    max-width: 900px;
    margin: auto;
  }
  .main{
    flex: 1 0 auto;
  }
`;

export default GlobalStyle;
