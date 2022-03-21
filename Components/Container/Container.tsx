import { FC } from "react";
import { ContainerStyle } from "./ContainerStyle";

type propsType = {
  type?: string;
  handleClick?: () => void;
  id?: string;
};
const Container: FC<propsType> = (props) => {
  return (
    <ContainerStyle type={props.type} onClick={props.handleClick}>
      {props.children}
    </ContainerStyle>
  );
};

export default Container;
