import { LayoutStyle } from "./LayoutStyle";
import { Header, Main } from "..";
import { FC } from "react";

const Layout: FC = (props) => {
  return (
    <LayoutStyle>
      <Header />
      <Main>{props.children}</Main>
    </LayoutStyle>
  );
};

export default Layout;
