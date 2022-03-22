import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  Button,
  Container,
  ContentCarousel,
  Layout,
  Loader,
  Title,
} from "@Components/index";

import { carTypes, fetchCar, imgType } from "@helpers/index";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { toast } from "react-toastify";
import { carType } from "@helpers/types/carType";

const Details = (props: { selectedCar: carType }) => {
  const route = useRouter();

  const { selectedCar } = props;

  const [itemDetais, setItemDetais] = useState<carTypes>();
  const [currentImage, setCurrentImage] = useState<imgType>();
  const [imgs, setImgs] = useState<imgType[]>([]);

  const redirect = () => {
    route.push("/");
  };
  const nextImage = () => {
    let newArray: imgType[] = imgs;
    if (imgs.length === 1) return;
    const lastItem = newArray.pop();
    if (lastItem) newArray.unshift(lastItem);
    setCurrentImage(newArray[1]);
    setImgs(newArray);
  };

  const prevImage = () => {
    let newArray: imgType[] = imgs;
    if (imgs.length === 1) return;
    let firstItem = newArray.shift();
    if (firstItem) newArray.push(firstItem);
    setCurrentImage(newArray[1]);
    setImgs(newArray);
  };
  const handleSelect = (idx: number) => {
    let indiceSelected;

    if (currentImage) indiceSelected = imgs.indexOf(currentImage);

    if (indiceSelected || indiceSelected === 0) {
      idx > indiceSelected && prevImage();
      idx < indiceSelected && nextImage();
      idx === indiceSelected && toast.warn("Item already selected");
    }
  };
  const listCarCarousel = () => {
    return imgs.map((img, idx) => {
      return (
        <ContentCarousel
          selected={img.id === currentImage?.id}
          key={img.id}
          img={img.img}
          handleClick={() => handleSelect(idx)}
        />
      );
    });
  };

  useEffect(() => {
    if (selectedCar) {
      let img;
      if (selectedCar.imgs.length > 1) {
        img = selectedCar.imgs[1];
      } else {
        img = selectedCar.imgs[0];
      }
      setCurrentImage(img);
      setImgs(selectedCar.imgs);
      setItemDetais(selectedCar);
    }
  }, [selectedCar]);

  if (!selectedCar) {
    return <Loader />;
  }

  return (
    <Layout>
      {itemDetais && (
        <Container type="details">
          <Container type="logo">
            <img src={itemDetais?.logo} alt="logo" />
            <Title type="textDetails">
              {itemDetais?.name} {itemDetais?.model}
              <p>${itemDetais?.price}/day</p>
            </Title>
          </Container>
          <Container type="colorDescription">
            <Title type="textDetails">
              {currentImage?.id} <p>{currentImage?.color}</p>
            </Title>
          </Container>
          <Container type="cartMain">
            <Container>
              <Button typeStyle="carousel" handleClick={redirect} secondary>
                <BsArrowLeft /> <span>Back to catalog</span>
              </Button>
            </Container>
            <Container type="imgShowCart">
              <img src={currentImage?.img} alt={currentImage?.label} />
              <Button typeStyle="carousel">
                Book now <BsArrowRight />
              </Button>
            </Container>
          </Container>
          <Container type="carousel">
            {imgs.length > 1 && (
              <Button
                handleClick={nextImage}
                typeStyle="carousel"
                action={true}
              >
                <BsArrowLeft />
              </Button>
            )}

            <Container type="imgsCarousel">{listCarCarousel()}</Container>
            {imgs.length > 1 && (
              <Button
                handleClick={prevImage}
                typeStyle="carousel"
                action={true}
              >
                <BsArrowRight />
              </Button>
            )}
          </Container>
        </Container>
      )}
    </Layout>
  );
};

export async function getStaticProps(context: any) {
  const { params } = context;
  const carId = params.id;
  const selectedCar = await fetchCar(carId);

  if (!selectedCar) {
    return { notFound: true };
  }

  return {
    props: {
      selectedCar,
    },
  };
}
export async function getStaticPaths() {
  const cars = await fetchCar();

  const ids = cars.map((car: carType) => car.id);

  const params = ids.map((id: number) => ({ params: { id: id } }));
  return {
    paths: params,
    fallback: true,
  };
}

export default Details;
