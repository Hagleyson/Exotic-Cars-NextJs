import { theme } from "@globalStyle/theme";
import styled from "styled-components";

type propsType = {
  type?: string;
};

export const TitleStyle = styled.h1`
  ${(props: propsType) =>
    props.type === "mainHeader" &&
    `       
       font-weight: 400;             
       font-size: 32px;
       color:${theme.darkGrey}      
       display: flex;       
       justify-content: flex-start;
       span{
        font-weight: 400;             
        font-size: 21px;
        color:${theme.darkGrey}       
       }   
    `}
  ${(props: propsType) =>
    props.type === "headerSecondary" &&
    `
        font-weight: 400;
        font-size: 16px;
        color: ${theme.gray};
        justify-content: center;
        align-items: center;
        margin: 0 40px  0 0;
    `}   
    
    ${(props: propsType) =>
    props.type === "cardModel" &&
    `
        position:absolute;
        top:25px;
        left:15px;
        font-size:17px;
        font-weight: bold;        
        >p{
          font-weight: lighter;        
          font-size:17px;
        }
    `}
    ${(props: propsType) =>
    props.type === "cardPrice" &&
    `
        position:absolute;
        bottom:25px;
        right:15px;
        font-size:24px;
        font-weight: bold;       
        color:${theme.darkGrey} ;

        span{
            font-size:14px;
            
        }
        span:first-child{                        
            top:10px;
            position:absolute;
            top:-2px;
            left:-10px;
        }

        span:last-child{
            font-weight: lighter;          
        }
        
    `}
    ${(props: propsType) =>
    props.type === "cardBook" &&
    `
        font-size:17px;
        color:${theme.white};
        position:absolute;
        bottom:25px;
        left:15px;                
    `}  
    
     ${(props: propsType) =>
    props.type === "textDetails" &&
    `
        font-size:67px;        
        font-weight: bold;    
        color:${theme.darkGrey};        
        margin-left:10px;        
        >p{
          font-size:40px;
          font-weight: lighter;      
        }
        @media screen and (max-width: 1440px){
          font-size:40px;           
          >p{
            font-size:35px;
          }
        }
        @media screen and (max-width: 1050px){
          font-size:35px; 
          >p{
            font-size:30px; 
          }
        }
        @media screen and (max-width: 900px){
          font-size:25px; 
          >p{
            font-size:20px; 
          }
        }
        
    `}        
    
    ${(props: propsType) =>
    props.type === "notFound" &&
    `
        font-size:20px;        
        font-weight: bold;    
        margin-top:10px;
        color:${theme.darkGrey};        
        text-align:center ;             
    `}
`;
