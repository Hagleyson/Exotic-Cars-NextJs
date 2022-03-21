import { Circles } from "react-loader-spinner";
import { LoaderStyle } from "./LoaderStyle";

const Loader = () => {
  return (
    <LoaderStyle>
      <Circles color="#ad0e0e" height={100} width={110} />
    </LoaderStyle>
  );
};
export default Loader;
