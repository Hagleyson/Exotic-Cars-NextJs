import { theme } from "globalStyle/theme";
import styled from "styled-components";
type propsType = {
  type?: string;
};
export const ContainerStyle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  ${(props: propsType) =>
    props.type === "home" &&
    `
        width:100%;            
        display: flex;
        padding:10px 100px;
        justify-content: space-between;          
        flex-wrap: wrap;
        align-items: flex-start; 
        position:relative;
        @media screen and (max-width: 583px) {
            padding: 20px 40px;
        }      
        .goToTheTop{
            width:73px ;
            height:73px ;
            border-radius:50% ;
            background-color:${theme.purpleLight};
            font-size:5rem;
            color:${theme.white};
            display:flex ;
            justify-content:center ;
            align-items:center ; 
            position:absolute;
            bottom:0px;    
            right:50px;   
            &:hover{
                cursor:pointer ;
                background-color:${theme.purple} ;
            }            
        }  
    `}

  ${(props: propsType) =>
    props.type === "cardImage" &&
    `        
        width:100%;
        max-width: 100%;
        height:100%;
        max-height:100%;    
        position:relative;         
        display:flex;
        justify-content: center;                       
        align-items: center;
        > div{
            width: 300px;  
            max-width: 300px;    
            height:100px;
            max-height:100px;                                                 
        }           
        @media screen and (max-width: 827px) {
            > div{
                width: 400px;  
                max-width: 400px;    
                height:200px;
                max-height:200px;                            
            } 
        } 
        @media screen and (max-width: 612px){
            > div{
                width: 400px;  
                max-width: 400px;    
                height:200px;
                max-height:100px;                            
            } 
        }
    `}
    
  ${(props: propsType) =>
    props.type === "ball" &&
    `
        position:absolute;        
        top: 25px;
        right: 15px;
        z-index:9999;  
        span{        
            height: 10px;
            width: 10px;            
            border:2px solid ${theme.ball};
            border-radius: 50%;
            margin-left:4px;
            cursor:pointer;
        }            
        .selected{
            background-color: ${theme.ball};
        }
    `}   
    ${(props: propsType) =>
    props.type === "card" &&
    `
           width: 100%;
           height: 100%;      
               
    `}   
    ${(props: propsType) =>
    props.type === "details" &&
    `
        width: 100%;
        height: 100%;      
        background: transparent linear-gradient(125deg, #FFFFFF 0%, #D8D7D7 100%) 0% 0% no-repeat padding-box;               
        position:relative;  
        @media screen and (max-width: 1440px){
            
        }                
    `}

     ${(props: propsType) =>
    props.type === "logo" &&
    `          
        position:absolute;
        top:60px;
        left: 40px;                        
        >img{          
          height: 123px;
        }
        @media screen and (max-width: 1440px){
            top:30px;
            left: 40px;            
            
        }
        @media screen and (max-width:900px){
            >img{          
              height: 80px;
            }
        }
        @media screen and (max-width: 800px){
            left: 10px;
        }  
        @media screen and (max-width: 384px){            
            >img{          
              height: 60px;
            }
        }
        
    `}

    ${(props: propsType) =>
    props.type === "colorDescription" &&
    `
        position:absolute;        
        top:120px;
        right: 80px;  
        @media screen and (max-width: 800px){
            right: 10px;
        }   
        @media screen and (max-width: 384px){            
            top:150px;
        }           
    `}
    
    ${(props: propsType) =>
    props.type === "cartMain" &&
    `
        width: 100%;
        height: 70%;
        justify-content: center;
        position:relative;                
        padding-top:50px;        
        >div:first-child{                        
            padding-left:40px;
            position:absolute;
            left:40px;
            top:calc(50% - 10px);        
        }       
        @media screen and (max-width: 1440px){
            >div:first-child{                                    
                position:absolute;
                left:0px;
                top:calc(50%);        
             } 
        }  
        @media screen and (max-width: 800px){
            >div:first-child{                                    
                padding-left:0px;   
             } 
        }  
                                 
    `}
    ${(props: propsType) =>
    props.type === "imgShowCart" &&
    `
        width: 100%;
        height: 100%;
        justify-content: center;                        
        flex-direction: column;        
        padding:40px;        
        >div{
            width: 50%;            
            height: 70%;
        }    
        >button{
            position:absolute;
            bottom:10px;
        }
        @media screen and (max-width: 1366px){
            >div{
                width: 40%;            
                height: 80%;         
                 
            }  
        } 
        @media screen and (max-width: 1024px){
            >div{
                width: 60%;            
                height: 60%;                
            }  
        }  
        @media screen and (max-width: 668px){           
            >div{
                width: 90%;                            
                height: 70%;                
            }  
        }  
        @media screen and (max-width: 446px){           
            >div{
                width: 95%;                            
                height: 30%;                        
            }  
        }  
        

        
    `}
        
  ${(props: propsType) =>
    props.type === "carousel" &&
    `
        width: 100%;
        height:30%;  
        max-height:30%;      
        justify-content: center;
        align-items: center;           
        padding:20px;
        @media screen and (max-width: 1440px){
            height:25%;  
            max-height:25%;          
        }   
        @media screen and (max-width: 389px){
            flex-direction: column;                     
        } 
     `};

  ${(props: propsType) =>
    props.type === "imgsCarousel" &&
    `
        width: 65%;
        height:100%;       
        max-height:100%;
        overflow: auto;            
        justify-content: space-around;       
        align-items: baseline;    
        @media screen and (max-width: 1440px){
            width: 60%;       
        }     
        @media screen and (max-width: 900px){
            width: 70%;       
        }   
        
     `};
  ${(props: propsType) =>
    props.type === "notFound" &&
    `
        width: 100%;
        height:100vh;       
        max-height:100%;
        display:flex;
        justify-content: center;       
        align-items: center;           
        flex-direction: column;
        text-align: center;
        >div{
            width: 50%;
            height:auto;            
        }
        >button{
            margin-top:20px;
        }      
        @media screen and (max-width:795px) {
            >div{
                width: 70%;
                
            }         
        }
        @media screen and (max-width:502px) {
            >div{
                width: 90%;
                
            }         
        }
           
     `};
`;
