import { Button, Container, Title } from "@Components/index";
import { BsArrowLeft } from "react-icons/bs";
import { useRouter } from "next/router";
const NotFound = () => {
  const route = useRouter();
  return (
    <Container type="notFound">
      <Title>404 Page Not Found</Title>
      <Button
        handleClick={() => route.push("/")}
        typeStyle="carousel"
        secondary
      >
        <BsArrowLeft /> Back to catalog
      </Button>
    </Container>
  );
};

export default NotFound;
