import styled from "styled-components";

type propsType = {
  selected?: boolean;
};
export const ContentCarouselStyle = styled.div`
  width: 20%;
  height: 80%;
  border-radius: 20px;
  background: #cecece 0% 0% no-repeat padding-box;
  display: flex;
  align-items: center;
  cursor: pointer;

  > div {
    width: 100%;
    height: 80%;
    > div {
      width: 120%;
      height: 100%;
    }
  }
  @media screen and (max-width: 668px) {
    > div {
      > div {
        width: 125%;
        padding-top: 10px;
        height: 100%;
      }
    }
  }
  @media screen and (max-width: 668px) {
    height: 60px;
    > div {
      max-height: 60px;
      > div {
        width: 125%;
        height: 10%;
      }
    }
  }
  ${(props: propsType) =>
    props.selected &&
    `
      width:30%;
      background: transparent linear-gradient(52deg, #A1A7F4 0%, #E6D3F1 100%) 0% 0% no-repeat padding-box;
      height: 90%;
      >div{
        width: 110%;  
        height:100% ;  
      } 
    `}
`;
