import styled, { createGlobalStyle } from 'styled-components';
import { colors, fonts, lightenDarkenColor } from ".";

export default createGlobalStyle`
  /* importing roboto font-family */
  @import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap');

  /* reseting browser defaults */
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  /* setting default containers */
  body {
    overflow: hidden;
  }

  #root {
    background-color: ${colors.black};
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
    height: 100vh; 
  }

  /* fonts */
  body {
    font-family: "Ubuntu", sans-serif;
    font-size: ${fonts.md};
    color: ${colors.light};
    -webkit-font-smoothing: antialiased;
  }

  h1 {
    font-size: ${fonts.xl};
  }

  h2 {
    font-size: ${fonts.lg};
  }
  
  h3 {
    font-size: ${fonts.md};
  }

  a {
    text-decoration: none;
    transition: color .3s ease-in-out;
  }

  /* scrollbar */
  /* ::-webkit-scrollbar { 
    width: 6px;

    &-track {
      border-radius: 6px;
      background-color: ${lightenDarkenColor(colors.gray, 60)};
    }

    &-thumb {
      border-radius: 6px;
      background-color: ${colors.gray};

      &:hover {
        background-color: ${lightenDarkenColor(colors.gray, -30)};
      }
    }
  } */
`;