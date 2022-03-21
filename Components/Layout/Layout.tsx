import { LayoutStyle } from "./LayoutStyle";
import { Header, Main } from "..";
import { FC } from "react";

type propsType = {
  type?: string;
};
const Layout: FC<propsType> = (props) => {
  return (
    <LayoutStyle>
      <Header />
      <Main>{props.children}</Main>
    </LayoutStyle>
  );
};

export default Layout;
