import { Button, Container, Title } from "@Components/index";
import { BsArrowLeft } from "react-icons/bs";

const NotFound = () => {
  return (
    <Container type="notFound">
      <Title>404 Page Not Found</Title>
      <Button
        handleClick={() => console.log("ok")}
        typeStyle="carousel"
        secondary
      >
        <BsArrowLeft /> Back to catalog
      </Button>
    </Container>
  );
};

export default NotFound;
