import { Card, Container, Layout, Loader, Title } from "@Components/index";
import { useEffect, useState } from "react";
import { fetchCar } from "@helpers/index";
import { IoIosArrowUp } from "react-icons/io";
import { carType } from "@helpers/types/carType";
import { toast } from "react-toastify";

type propsType = {
  cars: carType[];
  loading: boolean;
  erro: any;
};

const Home = (props: propsType) => {
  const { cars, loading, erro } = props;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(loading);
  }, [loading]);
  useEffect(() => {
    if (erro.hasError) {
      toast.error(erro.msg);
    }
  }, []);

  return (
    <Layout type="home">
      {isLoading && <Loader />}
      {!isLoading && cars.length < 1 && (
        <Title type="notFound">Could not load the cars</Title>
      )}
      {cars.length > 0 && (
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
export async function getStaticProps() {
  const listCar = await fetchCar();
  return {
    props: {
      cars: listCar.length > 0 ? listCar : [],
      loading: false,
      erro:
        listCar && listCar.hasError ? listCar : { hasError: false, msg: null },
    },
    revalidate: 120,
  };
}
export default Home;
