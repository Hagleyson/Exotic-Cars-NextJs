import { Container, Title } from "@Components/index";
import Link from "next/link";
import Image from "next/image";

const NotFound = () => {
  return (
    <Container type="notFound">
      <Title>Looks like you got lost</Title>
      <div>
        <Image
          src="/image/warning/02.jpg"
          alt="warning"
          width={100}
          height={55}
          layout="responsive"
        />
      </div>
      <Title>
        I want to go back to the home page. <Link href={"/"}>Click here</Link>
      </Title>
    </Container>
  );
};

export default NotFound;
