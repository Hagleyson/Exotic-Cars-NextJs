import { Card, Container, Layout, Loader, Title } from "@Components/index";
import { useEffect, useState } from "react";
import { fetchCar } from "@helpers/index";
import { IoIosArrowUp } from "react-icons/io";

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const loaderCars = async () => {
      setIsLoading(true);
      const request = await fetchCar();
      if (request) {
        setCars(request);
      }
      setIsLoading(false);
    };
    loaderCars();
  }, []);

  return (
    <Layout type="home">
      {isLoading && <Loader />}
      {!isLoading && cars.length < 1 ? (
        <Title type="notFound">Could not load the cars</Title>
      ) : (
        <Container type="home">
          {cars.map(({ id, name, model, price, imgs, logo }) => (
            <Card
              id={id}
              key={id}
              name={name}
              model={model}
              price={price}
              imgs={imgs}
              logo={logo}
            />
          ))}

          <div className="goToTheTop" onClick={() => window.scrollTo(0, 0)}>
            <IoIosArrowUp />
          </div>
        </Container>
      )}
    </Layout>
  );
};

export default Home;
