import { createGlobalStyle } from "styled-components";

export const GlobalCSS = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI';
    list-style: none;
    text-decoration: none;
    color: #93ccde;
  }

  body {
    background-image: linear-gradient(145deg, rgba(15,47,65,1) 0%, rgba(14,30,39,1) 36%, rgba(12,12,12,1) 100%);
  }

  .container {
    margin: 0 auto;
    @media (max-width: 480px) {
      width: 90%

    }

    @media (min-width: 1921px) {
      width: 1920px
    }
  }

`