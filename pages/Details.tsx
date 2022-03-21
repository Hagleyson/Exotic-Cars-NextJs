import {
  Button,
  Container,
  ContentCarousel,
  Layout,
  Loader,
  Title,
} from "@Components/index";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";

import { useEffect, useState } from "react";
import { carTypes, fetchCar, imgType } from "src/helpers";
import { toast } from "react-toastify";
const Details = () => {
  const navigate = useNavigate();
  const params = useParams();

  const [itemDetais, setItemDetais] = useState<carTypes>();
  const [currentImage, setCurrentImage] = useState<imgType>();
  const [imgs, setImgs] = useState<imgType[]>([]);

  const [isLoading, setIsLoading] = useState(false);

  const redirect = () => {
    navigate("/");
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
    const loaderCars = async () => {
      setIsLoading(true);
      console.log(!params.id);
      if (!params.id) {
        setIsLoading(false);
        return;
      }
      const request = await fetchCar(+params.id);

      if (request) {
        let img;
        if (request.imgs.length > 1) {
          img = request.imgs[1];
        } else {
          img = request.imgs[0];
        }
        setCurrentImage(img);
        setImgs(request.imgs);
        setItemDetais(request);
      }

      setIsLoading(false);
    };
    loaderCars();
  }, [params.id]);
  if (isLoading) {
    return <Loader />;
  }

  return (
    <Layout>
      {!params.id || !itemDetais ? (
        <Title type="notFound">Unable to load car details</Title>
      ) : (
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

export default Details;
