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

  img {
    width: 120%;
    height: 100%;
  }
`;
