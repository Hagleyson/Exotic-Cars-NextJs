import { theme } from "@globalStyle/theme";
import styled from "styled-components";

export const MainStyle = styled.main`
  width: 100%;
  height: calc(100vh - 80px);
  max-height: calc(100vh - 80px);
  position: absolute;
  top: 80px;
  background-color: ${theme.background};
  z-index: 0;
`;
