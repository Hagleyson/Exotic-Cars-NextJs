import {createGlobalStyle} from "styled-components";
import { theme } from "./theme";

export const GlobalStyle =createGlobalStyle`
    *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;   
    font-family: 'Segoe UI', sans-serif;    
    box-sizing: border-box;    
  }
  .svg-search{   
    width: 30px;
    height: 30px;     
    border-radius: 50%;
    padding: 5px;
    background-color: ${theme.white};
    box-shadow: 0px 3px 15px #beb9b9c8;
    color: ${theme.purple};
    cursor: pointer;   
  }
`