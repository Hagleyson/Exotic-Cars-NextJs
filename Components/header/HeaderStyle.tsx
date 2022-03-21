import styled from "styled-components";
import { theme } from "@globalStyle/index";

export const HeaderStyle = styled.header`
  width: 100%;
  height: 80px;
  padding: 20px 100px;
  display: flex;
  justify-content: space-between;
  background-color: ${theme.white};
  box-shadow: ${theme.boxShadow};
  position: fixed;

  top: 0;
  z-index: 1;
  @media screen and (max-width: 1107px) {
    > div:nth-child(2) {
      display: none;
    }
  }
  @media screen and (max-width: 583px) {
    padding: 20px 40px;
  }
`;
