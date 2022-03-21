import { Button, Container, Title } from "..";
import { HeaderStyle } from "./HeaderStyle";
import { MdLocationOn } from "react-icons/md";
import { IoCalendarSharp, IoSearchOutline } from "react-icons/io5";
const Header = () => {
  return (
    <HeaderStyle id="menu">
      <Container>
        <Title type="mainHeader">
          EXOTIC <span>Cars</span>
        </Title>{" "}
      </Container>
      <Container>
        <Title type="headerSecondary">
          {" "}
          <MdLocationOn /> Nort Carolina, NC 90025{" "}
        </Title>
        <Title type="headerSecondary">
          {" "}
          <IoCalendarSharp /> 11/03/2021 <IoCalendarSharp /> 12/12/2021{" "}
        </Title>
        <IoSearchOutline className="svg-search" />
      </Container>
      <Container>
        <Button typeStyle="header">Sign up</Button>
        <Button typeStyle="header" secondary>
          Sign in
        </Button>
      </Container>
    </HeaderStyle>
  );
};

export default Header;
